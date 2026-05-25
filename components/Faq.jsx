"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-6">
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="border-b border-white/10 pb-3"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-start gap-4 px-2 py-2 text-left"
                            >
                                <ChevronDown
                                    className={`w-5 h-5 mt-1 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                        }`}
                                />

                                <h3 className="text-lg font-semibold">
                                    {faq.question}
                                </h3>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="pl-11 pb-4 text">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}