import Image from "next/image";
import FAQSection from "../../components/Faq";
import { services } from "../../data/creative&design";

export const metadata = {
    title: "Cloud Minds Tech | About Us",
};

const partners = [
    {
        name: "WordPress",
        image: "/assets/CloudMindsTeach-Wordpress-Partners.png",
    },
    {
        name: "RedRhinoz",
        image: "/assets/CloudMindsTeach-RedRhinoz-Partners.png",
    },
    {
        name: "Shopify",
        image: "/assets/CloudMindsTeach-Shopify-Partners.png",
    },
    {
        name: "Xiom",
        image: "/assets/CloudMindsTeach-Xiom-Software-Company-Partners.png",
    },
    {
        name: "OpenAI",
        image: "/assets/CloudMindsTeach-OpenAiPartners.png",
    },
    {
        name: "Toptal",
        image: "/assets/toptal.png",
    },
];

const ratings = [
    {
        name: "Trustpilot",
        logo: "/assets/Trustpilot.png",
        rating: "4.8 Rating on Trustpilot",
    },
    {
        name: "Google",
        logo: "/assets/google.png",
        rating: "4.6 Rating on Google",
    },
    {
        name: "Fiverr",
        logo: "/assets/fiver.png",
        rating: "4.9 Rating on Fiverr",
    },
    {
        name: "Bark",
        logo: "/assets/bark.png",
        rating: "4.8 Rating on Bark",
    },
    {
        name: "Upwork",
        logo: "/assets/upwork.png",
        rating: "4.9 Rating on Upwork",
    },
    {
        name: "Toptal",
        logo: "/assets/toptal.png",
        rating: "4.6 Rating on Toptal",
    },
];

export default function page() {
    return (
        <>
            <section className="relative w-full md:min-h-150 min-h-100">

                <Image
                    src="/assets/about.png"
                    alt="Portfolio Banner"
                    fill
                    priority
                    className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60" />

                {/* CONTENT */}
                <div className="absolute inset-0 z-10 flex items-end">

                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading text-white">
                            About Us
                        </p>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            At Cloud Minds Tech, our mission is to lead the industry by delivering excellence in technology solutions.
                        </p>

                    </div>

                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="badge mb-4">
                            Redefining Digital Aesthetics
                        </p>

                        <h2 className="heading mb-4">
                            Modern Design Meets Cutting
                            <span className="text-primary"> Edge Technology</span>
                        </h2>
                        <div className="w-80 h-3 mb-6 bg-[repeating-linear-gradient(-45deg,#7AFFED_0,#7AFFED_4px,transparent_4px,transparent_8px)]" />

                        <FAQSection faqs={services[0]?.faq || []} />
                    </div>

                    <div className="">
                        <Image
                            src="/assets/h-1.webp"
                            alt="DotClick team working"
                            width={1200}
                            height={1200}
                            className="w-full max-w-130 h-auto rounded-2xl object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

                    <div>
                        <p className="badge mb-4">
                            Our Commitment To Excellence Verified
                        </p>

                        <h2 className="heading mb-4">
                            Industry Recognition <br />
                            and Customer
                            Satisfaction
                        </h2>

                        <div className="w-80 h-3 mb-6 bg-[repeating-linear-gradient(-45deg,#7AFFED_0,#7AFFED_4px,transparent_4px,transparent_8px)]" />

                        <p className="text">
                            DotClick isn’t just about delivering exceptional tech
                            solutions; it’s about earning your trust and setting
                            industry benchmarks. Our numerous awards and
                            consistently high ratings on platforms like Trustpilot
                            and Google Reviews affirm our commitment to quality and
                            customer satisfaction.
                        </p>
                    </div>

                    <div>
                        <p className="text mb-6">
                            Recognized for industry-leading excellence through
                            prestigious awards, and further validated by outstanding
                            customer ratings on Trustpilot and Google Reviews.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">

                            {ratings.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center"
                                >
                                    {/* LOGO */}
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        width={400}
                                        height={250}
                                        className="w-40 h-auto object-contain"
                                    />

                                    {/* STARS */}
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="text-yellow-400 text-lg"
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    {/* RATING */}
                                    <p className="text-sm">
                                        {item.rating}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
