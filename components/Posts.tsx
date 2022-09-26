import Link from "next/link"
import Heading from "./Heading"
import type { PostsInterface, PostInterface } from "../typings/Posts"

export default function Posts({ posts, showYear = false }: PostsInterface) {
    const collections: PostInterface[][] = []

    posts.forEach((post: PostInterface) => {
        const year = Number(post.properties.date.date.start.split("-").shift())
        collections[year] = [...(collections[year] || []), post]
    })

    if (showYear) {
        return (
            <>
                {collections.map((year, index) => {
                    const title = index.toString()
                    return (
                        <>
                            <Heading key={index} title={title} />
                        </>
                    )
                    // year.map((post: PostInterface, index) => {
                    //     console.log(post.properties.name.title[0].plain_text)
                    //     return (
                    //         <p className="text-lg" key={index}>
                    //             Tes
                    //         </p>
                    //     )
                    // })
                })}
            </>
        )
    }

    return (
        <>
            {posts.map((post: PostInterface, index) => {
                return (
                    <div key={index}>
                        <PostItem {...post} />
                    </div>
                )
            })}
        </>
    )
}

const PostItem = (post: PostInterface) => {
    const thumbnail = post.icon?.emoji || "❔"
    const date = new Date(post.properties.date.date.start)
    const postDate = date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })

    return (
        <Link href={post.properties.slug.rich_text[0].plain_text}>
            <div className="rounded-md px-2 py-2 lg:mt-4 mt-2 cursor-pointer hover:bg-purple">
                <div className="lg:flex inline-block lg:flex-row justify-between w-full lg:py-0">
                    <div className="text-lg flex inline-block lg:flex-row">
                        <div className="max-w-xs mr-2">{thumbnail}</div>
                        <h2>{post.properties.name.title[0].plain_text}</h2>
                    </div>
                    <div className="lg:block hidden">
                        <span>{postDate}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
