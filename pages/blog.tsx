import type { NextPage } from "next"
import { Posts } from "../components"
import { getAllContents } from "../lib/notion"
import { PostsInterface } from "../typings/Posts"

export async function getServerSideProps() {
    const articles = await getAllContents()

    return {
        props: {
            posts: articles,
        },
    }
}

const Blog: NextPage<PostsInterface> = (props: PostsInterface) => {
    return (
        <>
            <h1 className="text-5xl text-center font-semibold">BLOG</h1>
            <section className="mt-10">
                {props.posts && (
                    <div>
                        <Posts posts={props.posts} showYear />
                    </div>
                )}
            </section>
        </>
    )
}

export default Blog
