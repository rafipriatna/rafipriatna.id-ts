import "../styles/tailwind.css"
import type { AppProps } from "next/app"

import { DefaultLayout, Navbar } from "../layouts"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <Navbar />
            <Component {...pageProps} />
        </DefaultLayout>
    )
}

export default MyApp
