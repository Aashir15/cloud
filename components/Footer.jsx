"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
    const links = [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];
    

    return (
        <footer className="border-t border-black/10 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-14">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1.1fr] md:grid-cols-2">

                    {/* BRAND */}
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            Cloud.
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400">
                            ------------------------------ crafted with a focus on quality,
                            consistency, and a simple customer experience.
                        </p>

                        <div className="mt-6 flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
                            >
                                <i className="ri-facebook-fill"></i>
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                            >
                                <i className="ri-instagram-line"></i>
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition"
                            >
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-base font-semibold text-black dark:text-white">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {links.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className="group inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                                        />

                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-base font-semibold text-black dark:text-white">
                            Get in touch
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                            Questions about orders, products, or support? Reach
                            out and our team will help you with the next step.
                        </p>

                        <div className="mt-6 space-y-4">
                            <a
                                href="tel:3052656226"
                                className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                            >
                                <Phone
                                    size={18}
                                    className="mt-0.5 text-primary"
                                />

                                <span>+1 (555) 240-0188</span>
                            </a>

                            <a
                                href="mailto:info@gmail.com"
                                className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                            >
                                <Mail
                                    size={18}
                                    className="mt-0.5 text-primary"
                                />

                                <span>info@gmail.com</span>
                            </a>

                            <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-primary"
                                />

                                <span>125 Mercer Street, New York</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} xxxxxx. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
                        <Link
                            href="/privacy"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/term"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}