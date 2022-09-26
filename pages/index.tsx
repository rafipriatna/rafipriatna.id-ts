import type { NextPage } from "next"
import { Hero } from "../components"
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
    return (
        <>
            <Hero />
            <section className="mt-10 lg:mt-28">
                <h1 className="text-3xl font-bold underline text-red-500">
                    Hello world!Hello world!Hello world!Hello world!Hello
                    world!Hello world!Hello world!Hello world!Hello world!Hello
                    world!Hello world!Hello world!Hello world!Hello world!Hello
                    world!Hello world!Hello world!Hello world!Hello world!
                </h1>
            </section>
        </>
    )
}

export default Home
