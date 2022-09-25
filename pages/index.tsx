import type { NextPage } from "next"
import { getAllPosts } from "../lib/notion"
import { PostsInterface } from "../typings/posts"

export async function getServerSideProps() {
    const { results } = await getAllPosts()
    return {
        props: {
            posts: results,
        },
    }
}

const Home: NextPage<PostsInterface> = (props: PostsInterface) => {
    console.log(props.posts)
    return (
        <>
            <h1 className="text-3xl font-bold underline text-red-500">
                Hello world!
            </h1>
        </>
    )
}

export default Home
