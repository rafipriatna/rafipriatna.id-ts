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
        <>
            <div className="transition text-xl lg:my-5">
                <div className="flex flex-col lg:flex-row items-center border-b py-4 my-2 lg:border-none">
                    <div className="flex items-center justify-center uppercase font-semibold text-gray-new lg:justify-between">
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
                                        } ${
                                            index != menus.length - 1
                                                ? "mx-4"
                                                : "ml-4"
                                        } transition duration-200 ease-in-out lg:py-2 block font-medium hover:text-purple`}
                                        key={index}
                                    >
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <section className="block lg:hidden fixed inset-x-0 bottom-0 z-50 shadow-lg backdrop-blur-lg bg-opacity-50 border-t-2 border-gray-400/20">
                    <div id="tabs" className="flex justify-between">
                        <div className="w-full justify-center inline-block text-center pt-2 pb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline-block mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="tab block text-xs">
                                <Link href="/">Beranda</Link>
                            </span>
                        </div>
                        <div className="w-full justify-center inline-block text-center pt-2 pb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline-block mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                            <span className="tab block text-xs">
                                <Link href="/blog">Blog</Link>
                            </span>
                        </div>
                        <div className="w-full justify-center inline-block text-center pt-2 pb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline-block mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                            <span className="tab block text-xs">
                                <Link href="/proyek">Proyek</Link>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
