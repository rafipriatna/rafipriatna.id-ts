import type { NextPage } from "next"
import { Hero, Heading, Posts } from "../components"
import { getAllPosts } from "../lib/notion"
import { PostsInterface } from "../typings/Posts"

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
                <Heading title="ARTIKEL TERBARU" />
                <Posts posts={props.posts} />
            </section>
        </>
    )
}

export default Home
