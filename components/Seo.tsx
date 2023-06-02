import Head from "next/head"
import type { SeoInterface } from "../typings/Seo"

const DOMAIN = "https://rafipriatna.id/"
const DEFAULT_OG_IMAGE =
    "https://og-image.vercel.app/**RAFIPRIATNA.ID**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"

const SITE_NAME = "RAFIPRIATNA.ID"
const OG_TYPE = "website"
const TWITTER_USERNAME = "@rafipriatna"

export default function Seo({
    title = "Kebun Digital Rafi",
    description = "I love reading, listening to music and playing video games in my spare time. Learning new languages is one of my main hobby, I enjoy spending time doing web development, and CTF-ing. It helps me to improve my knowledge and skills.",
    canonical = DOMAIN,
    ogImage = DEFAULT_OG_IMAGE,
}: SeoInterface) {
    return (
        <Head>
            <title key="title">{`${title} – ${SITE_NAME}`}</title>
            <meta name="description" content={description} />
            <meta key="og_type" property="og:type" content={OG_TYPE} />
            <meta key="og_title" property="og:title" content={title} />
            <meta
                key="og_description"
                property="og:description"
                content={description}
            />
            <meta key="og_locale" property="og:locale" content="en_IE" />
            <meta
                key="og_site_name"
                property="og:site_name"
                content={SITE_NAME}
            />
            <meta
                key="og_url"
                property="og:url"
                content={canonical ?? DOMAIN}
            />
            <meta
                key="og_site_name"
                property="og:site_name"
                content={SITE_NAME}
            />
            <meta
                key="og_image"
                property="og:image"
                content={ogImage == "" ? DEFAULT_OG_IMAGE : ogImage}
            />
            <meta
                key="og_image:alt"
                property="og:image:alt"
                content={`${title} | ${SITE_NAME}`}
            />
            <meta
                key="og_image:width"
                property="og:image:width"
                content="1200"
            />
            <meta
                key="og_image:height"
                property="og:image:height"
                content="630"
            />

            <meta name="robots" content="index,follow" />

            <meta
                key="twitter:card"
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                key="twitter:site"
                name="twitter:site"
                content={TWITTER_USERNAME}
            />
            <meta
                key="twitter:creator"
                name="twitter:creator"
                content={TWITTER_USERNAME}
            />
            <meta
                key="twitter:title"
                property="twitter:title"
                content={title}
            />
            <meta
                key="twitter:description"
                property="twitter:description"
                content={description}
            />

            <link rel="canonical" href={canonical ?? DOMAIN} />

            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    )
}
