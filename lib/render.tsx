import Prism from "prismjs"
import { useEffect } from "react"
import Image from "next/image"
import { Line } from "../components"
import { TextInterface, BlockInterface } from "../typings/Notion"

// Prism
import "prism-themes/themes/prism-vsc-dark-plus.min.css" // Theme
// Prism Language
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-python"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-php-extras"

const imagePlaceholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 40 40' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='feather feather-image'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E`

export function Text(content: TextInterface) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    if (!content) return null
    return (
        <>
            {content.rich_text.map((value, index) => {
                const {
                    annotations: {
                        bold,
                        code,
                        color,
                        italic,
                        strikethrough,
                        underline,
                    },
                    text,
                } = value

                return (
                    <span
                        key={index}
                        className={[
                            bold ? "font-bold" : null,
                            italic ? "italic" : null,
                            code
                                ? "bg-purple text-indigo-500 text-gray-100 bg-opacity-50 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base"
                                : null,
                            strikethrough ? "line-through" : null,
                            underline ? "underline" : null,
                        ].join(" ")}
                        style={color !== "default" ? { color } : {}}
                    >
                        {text.link ? (
                            <a className="text-purple" href={text.link.url}>
                                {text.content}
                            </a>
                        ) : (
                            text.content
                        )}
                    </span>
                )
            })}
        </>
    )
}

export function Blocks(block: BlockInterface) {
    const { type, id } = block
    const value: BlockInterface = block[type]

    switch (type) {
        case "paragraph":
            return (
                <p>
                    <Text {...value} />
                </p>
            )

        case "heading_1":
            return (
                <h1 className="text-6xl">
                    <Text {...value} />
                </h1>
            )

        case "heading_2":
            return (
                <h2 className="text-3xl mb-5 not-prose text-white my-2">
                    <Text {...value} />
                    {Line()}
                </h2>
            )

        case "heading_3":
            return (
                <h3 className="text-2xl mb-5 not-prose text-white my-2">
                    <Text {...value} />
                </h3>
            )

        case "numbered_list_item":
            return (
                <ul>
                    <li>
                        <Text {...value} />
                    </li>
                </ul>
            )

        case "to_do":
            return (
                <div>
                    <label className="flex items-center justify-start space-x-3">
                        <input
                            id={id}
                            aria-describedby={value.text}
                            name={id}
                            type="checkbox"
                            className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <Text {...value} />
                    </label>
                </div>
            )

        case "code":
            return (
                <pre>
                    <code className={`language-${value.language}`}>
                        {value.rich_text[0].text.content}
                    </code>
                </pre>
            )

        case "callout":
            return (
                <div className="flex space-x-4 bg-slate-800 rounded-lg p-3 my-5">
                    {value.icon && <span>{value.icon.emoji}</span>}
                    <div>
                        <Text {...value} />
                    </div>
                </div>
            )

        case "quote":
            return (
                <div className="max-w-4xl p-4 bg-gray-800 rounded-lg shadow bg-slate-800">
                    <div className="mb-2">
                        <div className="h-3 text-3xl text-left">“</div>
                        <p className="px-4 text-center">
                            <Text {...value} />
                        </p>
                        <div className="h-3 text-3xl text-right">”</div>
                    </div>
                </div>
            )

        case "image": {
            const src =
                value.type === "external" ? value.external.url : value.file.url
            const caption =
                value.caption.length >= 1 ? value.caption[0].plain_text : ""
            return (
                <figure className="mt-0">
                    <Image
                        className="rounded-xl"
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                        alt={
                            caption
                                ? caption
                                : "A visual depiction of what is being written about"
                        }
                        src={src}
                        placeholder="blur"
                        blurDataURL={imagePlaceholder}
                    />
                    {caption && (
                        <figcaption className="text-center">
                            {caption}
                        </figcaption>
                    )}
                </figure>
            )
        }

        default:
            return `❌ Unsupported block (${
                type === "unsupported" ? "unsupported by Notion API" : type
            })`
    }
}
