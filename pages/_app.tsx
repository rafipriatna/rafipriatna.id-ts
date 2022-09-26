import "../styles/tailwind.css"
import type { AppProps } from "next/app"

import { Seo } from "../components"
import { DefaultLayout, Navbar, Footer } from "../layouts"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <Seo />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </DefaultLayout>
    )
}

export default MyApp
