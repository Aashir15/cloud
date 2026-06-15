"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const links = [
        { name: "Home", path: "/" },
        // { name: "Portfolio", path: "/portfolio" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];


    return (
        <footer className="border-t border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-14">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1.1fr] md:grid-cols-2">

                    {/* BRAND */}
                    <div>
                        <Link
                            href="/"
                            className="flex items-center shrink-0"
                        >
                            <Image
                                src="/assets/cloud-mind-tech.png"
                                alt="Cloud Minds Tech"
                                width={500}
                                height={200}
                                className="w-25 h-auto"
                                priority
                            />
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-gray-200">
                            Cloud Minds Tech crafted with a focus on quality,
                            consistency, and a simple customer experience.
                        </p>

                        <div className="mt-6 flex items-center gap-3 text-lg text-gray-700">
                            <a
                                href="https://www.facebook.com/people/Cloud-Minds-Tech/61574807023512/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-white/10 flex text-white items-center justify-center hover:bg-blue-500 hover:text-white transition"
                            >
                                <i className="ri-facebook-fill"></i>
                            </a>

                            <a
                                href="https://www.instagram.com/cloud_minds_tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                            >
                                <i className="ri-instagram-line"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/cloud-minds-tech-llc"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
                            >
                                <i className="ri-linkedin-fill"></i>
                            </a>
                            <a
                                href="https://x.com/CloudsMindsTech"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
                            >
                                <i className="ri-twitter-x-fill"></i>
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-base font-semibold text-white">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {links.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className="group inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition"
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
                        <h3 className="text-base font-semibold text-white">
                            Get in touch
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-200">
                            Questions about orders, products, or support? Reach
                            out and our team will help you with the next step.
                        </p>

                        <div className="mt-6 space-y-4">
                            {/* <a
                                href="tel:3052656226"
                                className="flex gap-3 text-sm text-gray-200 hover:text-white transition"
                            >
                                <Phone
                                    size={18}
                                    className="mt-0.5 text-primary"
                                />

                                <span>+92 337 2111623</span>
                            </a> */}
                            <a
                                className="flex gap-3 text-sm text-gray-200 hover:text-white transition"
                                href="tel:+923372111623"
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.gtag) {
                                        window.gtag("event", "phone_click");
                                    }
                                }}
                            >
                                <Phone
                                    size={18}
                                    className="mt-0.5 text-primary"
                                />
                                <span>+92 337 2111623</span>
                            </a>

                            <a
                                href="mailto:info@gmail.com"
                                className="flex gap-3 text-sm text-gray-200 hover:text-white transition"
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.gtag) {
                                        window.gtag("event", "email_click");
                                    }
                                }}
                            >
                                <Mail
                                    size={18}
                                    className="mt-0.5 text-primary"
                                />

                                <span>support@cloudmindstechllc.com</span>
                            </a>

                            <div className="flex gap-3 text-sm text-gray-200">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-primary"
                                />

                                <span>Karachi, Pakistan</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-200">
                        © {new Date().getFullYear()} Cloud Minds Tech. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm text-gray-500">
                        <Link
                            href="/privacy"
                            className="hover:text-white text-gray-200 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/term"
                            className="hover:text-white text-gray-200 transition"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}