import Image from "next/image"
import Foto from "../assets/Foto.png"

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
        <div className="my-10 lg:my-20">
            <div className="flex flex-row">
                <div className="w-full lg:w-4/6">
                    <h1 className="text-4xl font-semibold leading-tight md:leading-normal">
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
                    <p className="text-xl leading-relaxed md:order-1 my-5 mr-5">
                        Selamat datang di kebun digital saya{" "}
                        <span role="img" aria-label="tanaman">
                            🌱
                        </span>
                        .
                        <span className="block">
                            Di sini akan banyak berisi tulisan random tentang
                            saya, opini, dan kebanyakan tentang dokumentasi saya
                            pribadi saat belajar.
                        </span>
                    </p>

                    {links.map((link, index) => (
                        <a
                            className="text-white text-lg transition duration-300 ease-in-out rounded-lg border-2 border-purple hover:bg-purple my-3 px-3 py-1 mr-3 lg:px-6 lg:py-2 lg:mr-6"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="w-80 relative hidden lg:block">
                    <Image
                        src={Foto}
                        alt="Meeeee"
                        className="rounded-full"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    )
}
