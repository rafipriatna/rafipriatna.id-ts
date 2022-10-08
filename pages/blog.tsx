import type { NextPage } from "next"
import { Posts, Seo } from "../components"
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
    props.posts.sort()
    console.log(props.posts)
    return (
        <>
            <Seo title="Blog" />
            <h1 className="text-5xl text-center font-semibold my-10">BLOG</h1>
            <section>
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
