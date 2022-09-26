import "../styles/tailwind.css"
import type { AppProps } from "next/app"

import { Seo } from "../components"
import { DefaultLayout, Navbar } from "../layouts"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <Seo />
            <Navbar />
            <Component {...pageProps} />
        </DefaultLayout>
    )
}

export default MyApp
