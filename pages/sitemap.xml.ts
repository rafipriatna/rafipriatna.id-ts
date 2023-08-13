import { NextPageContext } from "next/types"
import { getAllContents } from "../lib/notion"

export async function getServerSideProps(context: NextPageContext) {
    const articles = await getAllContents()
    const sitemap = generateSiteMap(articles)

    context.res?.setHeader("Content-Type", "text/xml")
    context.res?.write(sitemap)
    context.res?.end()

    return {
        props: {},
    }
}

const URL = "https://rafipriatna.id"

function generateSiteMap(articles: any[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
     </url>
     ${articles.map((post) => {
             return `
           <url>
               <loc>${`${URL}/${post.properties.slug.rich_text[0].plain_text}`}</loc>
           </url>
         `
         })
         .join("")}
   </urlset>
 `
}

export default function SiteMap() {/**/}
