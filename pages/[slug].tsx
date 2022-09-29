import { Fragment } from "react"
import { getAllContents, getPageDetail } from "../lib/notion"
import { Blocks } from "../lib/render"
import { PostDetailInterface } from "../typings/Posts"
import { reformatDate } from "../lib/utils"

interface PostDetailParamsInterface {
    params: {
        slug: string
    }
}

export async function getServerSideProps({
    params,
}: PostDetailParamsInterface) {
    const slug = params.slug
    const posts = await getAllContents()
    const pageDetail = await getPageDetail(posts, slug)

    return {
        props: pageDetail,
    }
}

export default function PostDetail(props: PostDetailInterface) {
    return (
        <article className="prose max-w-full break-words text-xl text-white">
            <header className="break-words not-prose">
                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 dark:border-gray-600 pb-6 dark:text-white">
                    <div>
                        <h6 className="font-semibold text-4xl mb-5">
                            {props.detail.properties.name.title[0].plain_text}
                        </h6>
                        <p className="text-gray-400 text-lg">
                            Terbit pada tanggal{" "}
                            {reformatDate(
                                props.detail.properties.date.date.start
                            )}
                        </p>
                    </div>
                </div>
            </header>
            {props.blocks.map((block, index) => {
                return <Fragment key={index}>{Blocks(block)}</Fragment>
            })}
        </article>
    )
}
