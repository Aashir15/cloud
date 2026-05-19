"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>

            {/* HERO */}
            <section className="relative w-full md:min-h-150 min-h-100">
                <Image
                    src="/assets/portfolio.png"
                    alt="Portfolio Banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">
                        <p className="heading text-white">Contact</p>
                        <p className="text-gray-200 max-w-2xl mt-4">
                            Let’s talk about your next project.
                        </p>
                    </div>
                </div>
            </section>

            <section className="">

                <div className="max-w-6xl mx-auto">

                    {/* TOP */}
                    <div className="grid lg:grid-cols-3 gap-12 border-b border-white/10 pb-14 mb-14">

                        <div>
                            <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-5">
                                Booking Inquiry
                            </p>

                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                                Let’s Build Something Great Together
                            </h2>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-5">
                                Contact
                            </p>

                            <div className="space-y-4 text-gray-300 text-sm">
                                <div className="flex items-center gap-3">
                                    <Phone size={16} />
                                    <span>+92 300 1234567</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail size={16} />
                                    <span>cfonte7@icloud.com</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-5">
                                Availability
                            </p>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Currently accepting freelance projects, startup collaborations,
                                and premium website bookings worldwide.
                            </p>
                        </div>

                    </div>

                    {/* FORM */}
                    <div className="max-w-4xl">

                        <form className="space-y-8">

                            {/* ROW */}
                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full h-14 bg-transparent border border-white/10 px-5 outline-none focus:border-white transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full h-14 bg-transparent border border-white/10 px-5 outline-none focus:border-white transition-all"
                                    />
                                </div>

                            </div>

                            {/* WEBSITE */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-3">
                                    Website
                                </label>

                                <input
                                    type="text"
                                    placeholder="https://yourwebsite.com"
                                    className="w-full h-14 bg-transparent border border-white/10 px-5 outline-none focus:border-white transition-all"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-3">
                                    Message
                                </label>

                                <textarea
                                    rows="7"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-transparent border border-white/10 px-5 py-4 outline-none resize-none focus:border-white transition-all"
                                />
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="group relative overflow-hidden border border-white bg-white text-black h-14 px-12 uppercase tracking-[3px] text-sm hover:bg-transparent hover:text-white transition-all duration-300"
                            >
                                Submit Inquiry
                            </button>

                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}