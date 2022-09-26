import NextNProgress from "nextjs-progressbar"
import "../styles/tailwind.css"
import type { AppProps } from "next/app"

import { Seo } from "../components"
import { DefaultLayout, Navbar, Footer } from "../layouts"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <NextNProgress
                color="#8758FF"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Seo />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </DefaultLayout>
    )
}

export default MyApp
