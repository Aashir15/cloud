"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./PrimaryBtn";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const products = [
        {
            name: "BPC-157",
            href: "/products/bpc-157",
        },
        {
            name: "TB500",
            href: "/products/tb500",
        },
        {
            name: "SS-31",
            href: "/products/ss-31",
        },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/40 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <Link
                        href="/"
                        className={`text-2xl font-bold tracking-tight transition ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        Cloud.
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-8">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition hover:text-blue-500 ${scrolled ? "text-black" : "text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button
                                className={`flex items-center gap-1 text-sm font-medium transition hover:text-blue-500 ${scrolled ? "text-black" : "text-white"
                                    }`}
                            >
                                Products
                                <ChevronDown size={16} />
                            </button>

                            <div
                                className={`absolute top-full left-0 mt-4 w-64 rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden transition-all duration-300 ${productsOpen
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible -translate-y-2"
                                    }`}
                            >
                                {products.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-5 py-4 text-sm text-gray-700 hover:bg-gray-100 transition"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Button text="Contact Us" />
                    </nav>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden transition ${scrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white border-t border-gray-200 px-6 py-6 space-y-5">

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-gray-800 font-medium"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* MOBILE PRODUCTS */}
                    <div className="space-y-3">
                        <p className="text-sm uppercase tracking-wider text-gray-400">
                            Products
                        </p>

                        {products.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/shop"
                        className="inline-flex bg-black text-white px-5 py-3 rounded-full text-sm font-medium"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </header>
    );
}