import Image from "next/image";
import { notFound } from "next/navigation";

import { growthMarket } from "../../../data/growthMarket";
import FAQSection from "../../../components/Faq";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const service = growthMarket.find((item) => item.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found | Cloud Minds Tech",
            description: "The requested service page could not be found.",
        };
    }

    return {
        title: `${service.hero.title} | Cloud Minds Tech`,
        description: service.hero.description,

        keywords: [
            service.hero.title,
            "Cloud Minds Tech",
            "Growth Marketing Services",
            "Digital Marketing",
            "SEO Services",
            "Social Media Marketing",
            "PPC Advertising",
            "Online Marketing",
            "Lead Generation",
            "Performance Marketing",
            "Business Growth Solutions",
        ],

        openGraph: {
            title: `${service.hero.title} | Cloud Minds Tech`,
            description: service.hero.description,
            url: `https://yourdomain.com/growth-and-marketing/${slug}`,
            siteName: "Cloud Minds Tech",
            images: [
                {
                    url: service.hero.image,
                    width: 1200,
                    height: 630,
                    alt: service.hero.title,
                },
            ],
            locale: "en_US",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `${service.hero.title} | Cloud Minds Tech`,
            description: service.hero.description,
            images: [service.hero.image],
        },

        alternates: {
            canonical: `https://yourdomain.com/growth-and-marketing/${slug}`,
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function ServiceDetailPage({ params }) {

    const { slug } = await params;

    const service = growthMarket.find(
        (item) => item.slug === slug
    );

    if (!service) {
        notFound();
    }
    return (
        <>
            <section className="relative w-full md:min-h-150 min-h-100">

                <Image
                    src={service.hero.image}
                    alt={service.hero.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading text-white">
                            {service.hero.title}
                        </p>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            {service.hero.description}
                        </p>

                    </div>
                </div>

            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <Image
                            src={service.section1.image}
                            alt={service.section1.title}
                            width={1200}
                            height={800}
                            className="w-full rounded-2xl h-auto object-cover"
                        />
                    </div>

                    <div>
                        <p className="badge mb-4">
                            {service.section1.badge}
                        </p>

                        <h2 className="heading">
                            {service.section1.title}
                            <span className="text-primary">
                                {" "}
                                {service.section1.highlight}
                            </span>
                        </h2>

                        {service.section1.paragraphs.map((text, i) => (
                            <p key={i} className="text mt-4">
                                {text}
                            </p>
                        ))}
                    </div>

                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

                    <div>
                        <h2 className="heading mb-6">FAQ</h2>
                        <FAQSection faqs={service.faq} />
                    </div>

                    <div>
                        <h2 className="heading">
                            {service.section2.title}
                        </h2>

                        <p className="text mt-4">
                            {service.section2.content}
                        </p>
                    </div>

                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <Image
                            src={service.section3.image}
                            alt={service.section3.title}
                            width={1200}
                            height={800}
                            className="w-full rounded-2xl h-auto object-cover"
                        />
                    </div>

                    <div>
                        <p className="badge mb-4">
                            {service.section3.badge}
                        </p>

                        <h2 className="heading">
                            {service.section3.title}
                        </h2>

                        <p className="text mt-4">
                            {service.section3.content}
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}