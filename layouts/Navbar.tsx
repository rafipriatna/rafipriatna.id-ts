import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import Me from "../assets/me.jpg"

export default function Navbar() {
    const router = useRouter()

    const menus = [
        {
            name: "Beranda",
            href: "/",
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "Proyek",
            href: "/proyek",
        },
    ]

    return (
        <div className="transition text-xl lg:my-5">
            <div className="flex flex-col lg:flex-row">
                <div className="flex items-center justify-center py-4 uppercase font-semibold text-gray-new lg:justify-between">
                    <Link href="/">
                        <div className="flex space-x-2 items-center">
                            <div>
                                <div className="group w-8 h-8 rounded-full overflow-hidden hidden lg:block">
                                    <Image
                                        src={Me}
                                        className="object-center w-full h-full"
                                        alt="8 bit me"
                                        width="50px"
                                        height="50px"
                                    />
                                </div>
                            </div>
                            <div className="mx-auto">RAFIPRIATNA.ID</div>
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:block flex flex-row w-full text-gray-new">
                    <div className="flex justify-end items-center">
                        {menus.map((item, index) => {
                            return (
                                <li
                                    className={`${
                                        router.pathname == item.href &&
                                        "text-purple"
                                    } ${index != menus.length - 1 ? "mx-4" : "ml-4" } transition duration-200 ease-in-out lg:py-2 block font-medium hover:text-purple`}
                                    key={index}
                                >
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
