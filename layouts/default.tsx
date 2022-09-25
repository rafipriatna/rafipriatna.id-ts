import { FC, PropsWithChildren } from "react"

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
    <>
        <main className="mx-auto max-w-6xl container px-5">{children}</main>
    </>
)

export default DefaultLayout
