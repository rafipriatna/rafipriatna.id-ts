import { Fragment } from "react"
import { Seo } from "../components"
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
    const thumbnail = props.detail.icon?.emoji || "📝"

    return (
        <>
            <Seo
                title={props.detail.properties.name.title[0].plain_text}
                description={
                    props.detail.properties.description.rich_text[0].plain_text
                }
            />
            <article className="prose max-w-full break-words text-xl text-white">
                <header className="break-words not-prose">
                    <div className="flex flex-row">
                        <div className="text-6xl mr-5">{thumbnail}</div>
                        <div className="w-full font-light">
                            <div>
                                <h6 className="font-semibold text-4xl">
                                    {
                                        props.detail.properties.name.title[0]
                                            .plain_text
                                    }
                                </h6>
                                <p className="text-gray-400 text-lg mt-2">
                                    Terbit pada tanggal{" "}
                                    {reformatDate(
                                        props.detail.properties.date.date.start
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 my-6">

                    </div>
                </header>
                {props.blocks.map((block, index) => {
                    return <Fragment key={index}>{Blocks(block)}</Fragment>
                })}
            </article>
        </>
    )
}
