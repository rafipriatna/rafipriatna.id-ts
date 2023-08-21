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
import "prismjs/components/prism-c"

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
                                ? "bg-purple bg-opacity-40 text-white rounded px-1 my-[-1px] inline-block align-middle font-mono text-sm"
                                : null,
                            strikethrough ? "line-through" : null,
                            underline ? "underline" : null,
                            "text-md tracking-wider leading-8"
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
                <>
                    {value.caption[0] && (
                        <div className="text-center text-sm bg-purple bg-opacity-50 pt-1 pb-2 rounded-t-md">{value.caption[0].plain_text}</div>
                    )}
                    <pre>
                        <code className={`language-${value.language}`}>
                            {value.rich_text[0].text.content}
                        </code>
                    </pre>
                </>
            )

        case "callout":
            return (
                <div className="flex space-x-4 bg-purple rounded-lg p-3 my-5 bg-opacity-60">
                    {value.icon && <span>{value.icon.emoji}</span>}
                    <div>
                        <Text {...value} />
                    </div>
                </div>
            )

        case "quote":
            return (
                <div className="max-w-4xl p-4 bg-soft-dark rounded-lg shadow">
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
                <div className="relative">
                    <figure className="my-4 p-0 rounded-xl relative overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 max-h-full bg-soft-dark bg-opacity-80 backdrop-filter backdrop-blur-md p-2">
                        <Image
                            layout="responsive"
                            width={16}
                            height={9}
                            className="object-scale-down"
                            objectPosition="center"
                            alt={
                            caption
                                ? caption
                                : "A visual depiction of what is being written about"
                            }
                            src={src}
                        />
                        </div>
                    </figure>

                    {caption && (
                        <figcaption className="text-center">
                        <div>{caption}</div>
                        </figcaption>
                    )}
                </div>
            )
        }

        default:
            return `❌ Unsupported block (${
                type === "unsupported" ? "unsupported by Notion API" : type
            })`
    }
}
