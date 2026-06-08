"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Button from "../../components/PrimaryBtn"
import { Eye, EyeOff } from "lucide-react";


export default function Contact() {
    const [status, setStatus] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.message.trim()
        ) {
            setStatus("error");

            setTimeout(() => {
                setStatus("");
            }, 4000);

            return;
        }

        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {

                setStatus("success");

                setForm({
                    name: "",
                    email: "",
                    website: "",
                    message: "",
                });

            } else {
                setStatus("error");
            }

        } catch (error) {
            console.log(error);
            setStatus("error");
        }

        setTimeout(() => {
            setStatus("");
        }, 4000);
    };

    const isFormValid =
        form.name.trim() !== "" &&
        form.email.trim() !== "" &&
        form.message.trim() !== "";

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
                        <p className="text text-gray-200! max-w-2xl mt-4">
                            Let’s talk about your next project.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto md:py-20 py-12">

                <div className="px-6">

                    <div className="max-w-3xl mx-auto text-center">
                        <p className="badge mb-5 inline-block">
                            Booking Inquiry
                        </p>

                        <h2 className="heading">
                            Let’s Build Something Great Together
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto mt-12">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <FloatingInput
                                    label="Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />

                                <FloatingInput
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>



                            <FloatingInput
                                label="Website"
                                name="website"
                                value={form.website}
                                onChange={handleChange}
                            />

                            <FloatingInput
                                label="Message"
                                name="message"
                                textarea
                                rows={7}
                                value={form.message}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                text={status === "sending" ? "Sending..." : "Submit Inquiry"}
                                disabled={status === "sending" || !isFormValid}
                                className={
                                    status === "sending" || !isFormValid
                                        ? "opacity-50 pointer-events-none"
                                        : ""
                                }
                            />

                            {status === "sending" && (
                                <p className="text-sm text-gray-500">
                                    Sending message...
                                </p>
                            )}

                            {status === "success" && (
                                <p className="text-sm text-green-600">
                                    Your message has been sent successfully.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-sm text-red-500">
                                    Something went wrong while sending the message.
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}

// components/ui/InputField.jsx

function FloatingInput({
    label,
    type = "text",
    value,
    onChange,
    name,
    textarea = false,
    rows = 6,
    ...rest
}) {
    const [show, setShow] = useState(false);

    const isPassword = type === "password";

    const inputStyles = `
        w-full rounded-2xl
        border border-white/10
        
        bg-white/[0.03]

        text-white
       placeholder:text-white/40

        outline-none
        transition-all duration-300

        focus:border-green-900
        focus:bg-white/[0.05]
    `;

    return (
        <div className="relative">

            {textarea ? (
                <textarea
                    rows={rows}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={label}
                    {...rest}
                    className={`${inputStyles} px-5 py-4 resize-none`}
                />
            ) : (
                <input
                    type={isPassword ? (show ? "text" : "password") : type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={label}
                    {...rest}
                    className={`${inputStyles} h-14 px-5`}
                />
            )}

            {/* PASSWORD TOGGLE */}
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="
                        absolute right-4 top-1/2 -translate-y-1/2
                        text-white/40
                       hover:text-white
                        transition-colors"
                >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}

        </div>
    );
}