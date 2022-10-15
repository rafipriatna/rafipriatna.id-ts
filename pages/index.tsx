import type { NextPage } from "next"
import { Hero, Heading, Posts } from "../components"
import { getAllPosts, getAllWriteups } from "../lib/notion"
import { HomePostsInterface } from "../typings/Posts"

export async function getServerSideProps() {
    const articles = await getAllPosts()
    const writeups = await getAllWriteups()
    return {
        props: {
            posts: articles.slice(0, 5),
            writeups: writeups.slice(0, 5)
        },
    }
}

const Home: NextPage<HomePostsInterface> = (props: HomePostsInterface) => {
    return (
        <>
            <Hero />
            <section className="mt-10 lg:mt-28">
                {props.posts && (
                    <div>
                        <Heading title="ARTIKEL TERBARU" />
                        <Posts posts={props.posts} />
                    </div>
                )}

                {props.writeups && (
                    <div className="mt-10">
                        <Heading title="WRITEUP" />
                        <Posts posts={props.writeups} />
                    </div>
                )}
            </section>
        </>
    )
}

export default Home
