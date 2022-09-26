import { Client } from "@notionhq/client"

const notion = new Client({
    auth: process.env.NOTION_SECRET,
})

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

    return allPosts
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

    return allWriteups
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

    return allContents
}
