import { Client } from "@notionhq/client"
import { PostDetailInterface } from "../typings/Posts"

const notion = new Client({
    auth: process.env.NOTION_SECRET,
})

// GET Articles
export const getAllPosts = async () => {
    const allPosts = await notion.databases.query({
        database_id: `${process.env.NOTION_DATABASE_POSTS}`,
        filter: {
            and: [
                {
                    property: "status",
                    select: {
                        equals: "Posted",
                    },
                },
                {
                    property: "type",
                    select: {
                        equals: "Article",
                    },
                },
            ],
        },
    })

    return allPosts.results
}

export const getAllWriteups = async () => {
    const allWriteups = await notion.databases.query({
        database_id: `${process.env.NOTION_DATABASE_POSTS}`,
        filter: {
            and: [
                {
                    property: "status",
                    select: {
                        equals: "Posted",
                    },
                },
                {
                    property: "type",
                    select: {
                        equals: "Writeup",
                    },
                },
            ],
        },
    })

    return allWriteups.results
}

export const getAllContents = async () => {
    const allContents = await notion.databases.query({
        database_id: `${process.env.NOTION_DATABASE_POSTS}`,
        filter: {
            and: [
                {
                    property: "status",
                    select: {
                        equals: "Posted",
                    },
                },
            ],
        },
    })

    return allContents.results
}

// Article Detail
export const getPostBlocks = async (blockId: string) => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
    })

    return response.results
}

export const getPageDetail = async (data: any[], slug: string) => {
    const page = data.find((result: any) => {
        return result.properties.slug.rich_text[0].plain_text === slug
    })

    const pageBlocks = await getPostBlocks(page.id)
    const pageData: PostDetailInterface = {
        detail: page,
        blocks: pageBlocks,
    }

    return pageData
}
