import Prism from "prismjs"
import { useEffect } from "react"
import { Line } from "../components"
import { TextInterface, BlockInterface } from "../typings/Notion"

// Prism
import "prismjs/themes/prism-okaidia.css" // Theme
import "prismjs/components/" // Language

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
                <pre className="not-prose max-h-96">
                    <code className="language-javascript">
                        {value.rich_text[0].text.content}
                    </code>
                </pre>
            )

        case "callout":
            return (
                <div className="flex space-x-4 bg-gray-50 dark:bg-slate-800 rounded-lg p-3">
                    {value.icon && <span>{value.icon.emoji}</span>}
                    <div>
                        <Text {...value} />
                    </div>
                </div>
            )

        default:
            return `❌ Unsupported block (${
                type === "unsupported" ? "unsupported by Notion API" : type
            })`
    }
}
