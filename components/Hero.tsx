import Image from "next/image"
import Me from "../assets/me.jpg"

export default function Hero() {
    const links = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/rafipriatna/",
        },
        {
            name: "Github",
            href: "https://github.com/rafipriatna",
        },
        {
            name: "Twitter",
            href: "https://twitter.com/rafipriatna",
        },
    ]

    return (
        <div className="grid items-center grid-cols-1 md:grid-cols-6 my-10 lg:my-20">
            <div className="order-2 col-span-5 lg:my-0 my-10">
                <h1 className="text-4xl font-semibold leading-tight md:leading-normal md:order-1 max-w-lg">
                    Hei,{" "}
                    <span role="img" aria-label="hand">
                        👋🏻
                    </span>
                    <span className="block">
                        Saya{" "}
                        <span className="animate-pulse text-purple">
                            Rafi Priatna K
                        </span>
                        .
                    </span>
                </h1>
                <p className="text-xl leading-relaxed md:order-1 max-w-lg my-5">
                    Selamat datang di kebun digital saya{" "}
                    <span role="img" aria-label="tanaman">
                        🌱
                    </span>
                    .
                    <span className="block">
                        Di sini akan banyak berisi tulisan random tentang saya,
                        opini, dan kebanyakan tentang dokumentasi saya pribadi
                        saat belajar.
                    </span>
                </p>

                {links.map((link, index) => (
                    <button
                        className="text-white text-lg transition duration-300 ease-in-out rounded-lg border-2 border-purple hover:bg-purple my-3 px-3 py-1 mr-3 lg:px-6 lg:py-2 lg:mr-6"
                        key={index}
                    >
                        <a href={link.href} target="_blank" rel="noreferrer">
                            {link.name}
                        </a>
                    </button>
                ))}
            </div>

            <div className="order-1 md:order-2">
                <Image
                    src={Me}
                    alt="8bit me wkwkw"
                    className="rounded-lg"
                    width="500px"
                    height="500px"
                />
            </div>
        </div>
    )
}
