"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is your return policy?",
        answer:
            "We offer a 30-day return policy for all unused products in original packaging.",
    },
    {
        question: "How long does shipping take?",
        answer:
            "Orders are typically delivered within 3–7 business days depending on location.",
    },
    {
        question: "Do you offer international shipping?",
        answer:
            "Yes, we ship worldwide with tracking included on all international orders.",
    },
    {
        question: "Can I change my order after placing it?",
        answer:
            "Yes, you can modify your order within 12 hours of purchase by contacting support.",
    },
];

export default function FAQSection() {
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
                        <div key={index} >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-start gap-4 px-2 py-2 text-left"
                            >
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
                                    <p className="pl-12 pb-6 text">
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