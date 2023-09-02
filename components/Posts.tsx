import Link from "next/link"
import Heading from "./Heading"
import type { PostsInterface, PostInterface } from "../typings/Posts"
import { reformatDate } from "../lib/utils"

interface GroupByYearInterface {
    year: number
    posts: PostInterface[]
}

export default function Posts({ posts, showYear = false }: PostsInterface) {
    const collections: PostInterface[][] = []

    posts.forEach((post: PostInterface) => {
        const year = Number(post.properties.date.date.start.split("-").shift())
        collections[year] = [...(collections[year] || []), post]
    })

    const postsData: GroupByYearInterface[] = []

    collections.map((data, index) => {
        const year = index
        const posts: PostInterface[] = []

        data.map((post) => {
            posts.push(post)
        })

        postsData.push({
            year,
            posts,
        })
    })

    postsData.reverse()

    if (showYear) {
        return (
            <>
                {postsData.map(
                    (postData: GroupByYearInterface, index: number) => {
                        const title = postData.year.toString()
                        return (
                            <div key={index}>
                                <div className="my-5">
                                    <Heading title={title} />
                                </div>

                                {postData.posts.map(
                                    (post: PostInterface, index: number) => {
                                        return (
                                            <div
                                                className="my-2"
                                                key={title + index}
                                            >
                                                <PostItem {...post} />
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        )
                    }
                )}
            </>
        )
    }

    return (
        <>
            {posts.map((post: PostInterface, index: number) => {
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
    const thumbnail = post.icon?.emoji || "📝"
    const postDate = reformatDate(post.properties.date.date.start)

    return (
        <Link href={post.properties.slug.rich_text[0].plain_text}>
            <div className="rounded-md px-2 py-2 lg:mt-4 mt-2 cursor-pointer hover:bg-purple hover:bg-opacity-30">
                <div className="lg:flex inline-block lg:flex-row justify-between w-full lg:py-0">
                    <div className="text-lg flex inline-block lg:flex-row">
                        <div className="max-w-xs mr-2">{thumbnail}</div>
                        <h2>{post.properties.name.title[0].plain_text}</h2>
                    </div>
                    <div className="lg:block hidden font-mono">
                        <span>{postDate}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
