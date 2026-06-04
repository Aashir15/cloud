import Image from "next/image";
import Portfolio from "../../components/Portfolio";


export const metadata = {
    title: "Portfolio",
    description:
        "Explore Cloud Minds Tech's portfolio showcasing successful web development, mobile applications, AI solutions, UI/UX design projects, and digital transformation success stories.",

    keywords: [
        "Cloud Minds Tech Portfolio",
        "Web Development Portfolio",
        "Mobile App Projects",
        "AI Development Projects",
        "UI UX Design Portfolio",
        "Software Development Case Studies",
        "Digital Transformation Projects",
    ],

    openGraph: {
        title: "Portfolio | Cloud Minds Tech",
        description:
            "Discover our portfolio of innovative software, web, mobile, AI, and design projects delivered for clients worldwide.",
        images: [
            {
                url: "/assets/portfolio.png",
                width: 1200,
                height: 630,
                alt: "Cloud Minds Tech Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Cloud Minds Tech",
        description:
            "Explore our portfolio of web, mobile, AI, and software development projects.",
        images: ["/assets/portfolio.png"],
    },

    alternates: {
        canonical: "/portfolio",
    },
};

export default function PortfolioPage() {
    return (
        <>

            <section className="relative w-full md:min-h-150 min-h-100">

                <Image
                    src="/assets/portfolio.png"
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
                            Portfolio
                        </p>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            We bring creative solutions to life, driving results that matter.
                        </p>

                    </div>

                </div>
            </section>

            <Portfolio />

        </>
    );
}