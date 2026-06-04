import Image from "next/image";
import ServicesBox from "../../components/ServicesBox";


export const metadata = {
    title: "Creative & Design Wing",

    description:
        "Cloud Minds Tech's Creative & Design Wing delivers innovative UI/UX design, branding, graphic design, website design, and creative digital experiences that help businesses stand out and grow.",

    keywords: [
        "Creative Design Services",
        "UI UX Design",
        "Graphic Design",
        "Brand Identity Design",
        "Website Design",
        "Creative Agency",
        "Digital Design Services",
        "Cloud Minds Tech",
        "Branding Services",
        "User Experience Design",
    ],

    openGraph: {
        title: "Creative & Design Wing | Cloud Minds Tech",
        description:
            "Discover creative design solutions including UI/UX, branding, graphic design, and digital experiences crafted by Cloud Minds Tech.",
        images: [
            {
                url: "/assets/service-2.webp",
                width: 1200,
                height: 630,
                alt: "Creative & Design Wing",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Creative & Design Wing | Cloud Minds Tech",
        description:
            "Innovative UI/UX design, branding, graphic design, and creative digital solutions for modern businesses.",
        images: ["/assets/service-2.webp"],
    },

    alternates: {
        canonical: "/creative-design",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function () {
    return (
        <>

            <section className="relative w-full md:min-h-150 min-h-100">
                <Image
                    src="/assets/service-2.webp"
                    alt="Portfolio Banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading text-white">
                            Creative & Design Wing
                        </p>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            Share your stories and news with everyone.
                        </p>

                    </div>
                </div>
            </section>

            <ServicesBox />

        </>
    );
}