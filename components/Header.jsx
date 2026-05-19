"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    Moon,
    Sun,
    Layers3,
} from "lucide-react";

import { services } from "../data/projects";
import Button from "./PrimaryBtn";
import { usePathname } from "next/navigation";

export default function Header() {
    
    
    
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const pathname = usePathname();

    const isPortfolioSlug =
        pathname.startsWith("/portfolio/") &&
        pathname !== "/portfolio";

    const isSolidHeader = scrolled || isPortfolioSlug;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // DARK MODE
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setDarkMode(!darkMode);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "#" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSolidHeader
                        ? "bg-white/80 dark:bg-black/70 backdrop-blur-xl  py-3"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between">

                        {/* LOGO */}
                        <Link
                            href="/"
                            className={`text-2xl font-bold tracking-tight transition ${isSolidHeader
                                    ? "text-black dark:text-white"
                                    : "text-white"
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
                                    className={`text-sm font-medium transition hover:text-blue-500 ${isSolidHeader
                                            ? "text-black dark:text-white"
                                            : "text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* SERVICES MEGA MENU */}
                            <div
                                className="relative"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >

                                {/* CLICKABLE SERVICES */}
                                <Link
                                    href="/services"
                                    onClick={() => setServicesOpen(false)}
                                    className={`flex items-center gap-1 text-sm font-medium transition hover:text-blue-500 ${isSolidHeader
                                            ? "text-black dark:text-white"
                                            : "text-white"
                                        }`}
                                >
                                    Services
                                    <ChevronDown size={16} />
                                </Link>

                                {/* MEGA MENU */}
                                <div
                                    className={`absolute left-1/2 top-full mt-6 -translate-x-1/2 w-[850px] rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden transition-all duration-300 ${servicesOpen
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible translate-y-4"
                                        }`}
                                >
                                    <div className="grid grid-cols-2 gap-2 p-6">

                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                onClick={() => setServicesOpen(false)}
                                                className="group rounded-2xl p-4 hover:bg-gray-100 dark:hover:bg-white/5 transition"
                                            >
                                                <div className="flex gap-4">

                                                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                                                        <Layers3
                                                            size={22}
                                                            className="text-blue-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-black dark:text-white group-hover:text-blue-600 transition">
                                                            {service.hero.title}
                                                        </h4>

                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                                            {service.hero.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* FOOTER */}
                                    <div className="bg-gray-50 dark:bg-white/5 px-6 py-5 flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold text-black dark:text-white">
                                                Need custom solutions?
                                            </p>

                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Let’s build something amazing together.
                                            </p>
                                        </div>

                                        <Link
                                            href="/contact"
                                            onClick={() => setServicesOpen(false)}
                                            className="px-5 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* DARK MODE */}
                            <button
                                onClick={toggleTheme}
                                className={`w-11 h-11 rounded-full border flex items-center justify-center transition ${scrolled
                                    ? "border-black/10 dark:border-white/10 text-black dark:text-white"
                                    : "border-white/20 text-white"
                                    }`}
                            >
                                {darkMode ? (
                                    <Sun size={18} />
                                ) : (
                                    <Moon size={18} />
                                )}
                            </button>

                            <Button text="Get Started" />
                        </nav>

                        {/* MOBILE BUTTON */}
                        <div className="flex items-center gap-3 lg:hidden">

                            {/* MOBILE THEME */}
                            <button
                                onClick={toggleTheme}
                                className={`w-10 h-10 flex items-center justify-center rounded-full border transition hover:scale-105 ${isSolidHeader
                                    ? "text-black dark:text-white"
                                    : "text-white"
                                    }`}
                            >
                                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            <button
                                onClick={() => setMobileOpen(true)}
                                className={`${isSolidHeader ? "text-black dark:text-white" : "text-white"
                                    }`}
                            >
                                <Menu size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${mobileOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                    }`}
            >

                {/* BACKDROP */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />

                {/* SIDEBAR */}
                <div
                    className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white dark:bg-neutral-950 shadow-2xl transition-all duration-300 ${mobileOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                        }`}
                >

                    {/* TOP */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-black dark:text-white"
                            onClick={() => setMobileOpen(false)}
                        >
                            Cloud.
                        </Link>

                        <button
                            onClick={() => setMobileOpen(false)}
                            className="text-black dark:text-white"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* NAV */}
                    <div className="p-6 space-y-3 overflow-y-auto h-[calc(100vh-90px)]">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-between rounded-xl px-4 py-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* MOBILE SERVICES */}
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">

                            {/* CLICKABLE */}
                            <div className="flex items-center justify-between px-4 py-4">

                                <Link
                                    href="/services"
                                    onClick={() => setMobileOpen(false)}
                                    className="font-medium text-black dark:text-white"
                                >
                                    Services
                                </Link>

                                <button
                                    onClick={() =>
                                        setMobileServicesOpen(!mobileServicesOpen)
                                    }
                                    className="text-black dark:text-white"
                                >
                                    <ChevronDown
                                        size={20}
                                        className={`transition ${mobileServicesOpen
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* DROPDOWN */}
                            <div
                                className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen
                                    ? "max-h-[700px]"
                                    : "max-h-0"
                                    }`}
                            >
                                <div className="px-3 pb-3 space-y-2">

                                    {services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-xl p-3 hover:bg-gray-100 dark:hover:bg-white/5 transition"
                                        >
                                            <h4 className="text-sm font-semibold text-black dark:text-white">
                                                {service.hero.title}
                                            </h4>

                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                                {service.hero.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-5">
                            <Button text="Contact Us" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}