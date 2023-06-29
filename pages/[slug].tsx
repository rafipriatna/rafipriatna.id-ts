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
    const gambar = props.blocks.find(objek => objek.type === "image")
    const ogImage = gambar?.type === "external" ? gambar?.image.external.url : gambar?.image.file.url ?? ""

    return (
        <>
            <Seo
                title={props.detail.properties.name.title[0].plain_text}
                description={
                    props.detail.properties.description.rich_text[0].plain_text
                }
                ogImage={ogImage}
            />
            <article className="prose max-w-full break-words text-lg text-white font-light leading-relaxed tracking-wide">
                <header className="break-words not-prose my-10 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row">
                        <div className="text-6xl mr-5 mb-5 lg:mb-0">
                            {thumbnail}
                        </div>
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
                </header>
                {props.blocks.map((block, index) => {
                    return <Fragment key={index}>{Blocks(block)}</Fragment>
                })}
            </article>
        </>
    )
}
