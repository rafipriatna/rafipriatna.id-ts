import Line from "./Line"

type HeadingType = {
    title: string
}

export default function Heading({ title }: HeadingType) {
    return (
        <h1 className="text-3xl mb-5">
            {title}
            {Line()}
        </h1>
    )
}
