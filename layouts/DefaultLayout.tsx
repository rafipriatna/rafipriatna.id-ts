import { FC, PropsWithChildren, useEffect } from "react"

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
    useEffect(() =>
    {        
        document.body.classList.add("bg-dark");
    });

    return (
        <>
            <main className="mx-auto max-w-3xl container px-5 text-white">{children}</main>
        </>
    )
}

export default DefaultLayout
