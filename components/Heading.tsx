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

function Line() {
    return (
        <span className="flex flex-row items-end mt-4">
            <hr className="border-2 border-purple w-4/12 lg:w-1/12"></hr>
            <hr className="border border-gray-white opacity-30 w-full"></hr>
        </span>
    )
}
