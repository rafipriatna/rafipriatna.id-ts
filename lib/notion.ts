import { Client } from "@notionhq/client"

const notion = new Client({
    auth: process.env.NOTION_SECRET,
})

export const getAllPosts = async () => {
    const allPosts = await notion.databases.query({
        database_id: `${process.env.NOTION_DATABASE_POSTS}`,
        filter: {
            property: "status",
            select: {
                equals: "Posted",
            },
        },
    })

    return allPosts
}
