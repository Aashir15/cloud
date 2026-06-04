import Image from "next/image";
import Link from "next/link"
import ServicesBox from "../../components/ServicesBox";
import { growthMarket } from "../../data/growthMarket";


export const metadata = {
    title: "Growth & Marketing Services ",
    description:
        "Explore Cloud Minds Tech's Growth & Marketing services including digital marketing, SEO, social media marketing, branding, and lead generation strategies to grow your business online.",

    keywords: [
        "Cloud Minds Tech",
        "Growth Marketing",
        "Digital Marketing Services",
        "SEO Services",
        "Social Media Marketing",
        "Branding Services",
        "Lead Generation",
        "Online Marketing",
        "Performance Marketing",
        "Content Marketing",
        "Marketing Strategy",
        "Business Growth Solutions",
    ],

    openGraph: {
        title: "Growth & Marketing Services | Cloud Minds Tech",
        description:
            "We help businesses grow with powerful marketing strategies including SEO, social media, branding, and digital campaigns.",
        url: "https://www.cloudmindstechllc.com/growth-and-marketing",
        siteName: "Cloud Minds Tech",
        images: [
            {
                url: "/assets/service-3.jpg",
                width: 1200,
                height: 630,
                alt: "Growth & Marketing - Cloud Minds Tech",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Growth & Marketing Services | Cloud Minds Tech",
        description:
            "SEO, branding, social media, and digital marketing services to grow your business online.",
        images: ["/assets/service-3.jpg"],
    },

    alternates: {
        canonical: "https://www.cloudmindstechllc.com/growth-and-marketing",
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
                    src="/assets/service-3.jpg"
                    alt="Portfolio Banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading text-white">
                            Growth & Marketing Wing
                        </p>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            Share your stories and news with everyone.
                        </p>

                    </div>
                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {growthMarket.map((service) => (

                            <Link
                                key={service.slug}
                                href={`/growth-marketing/${service.slug}`}
                                className="group"
                            >

                                {/* IMAGE */}
                                <div className="relative overflow-hidden rounded-xl mb-4 bg-white/5">
                                    <Image
                                        src={service.hero.image}
                                        alt={service.hero.title}
                                        width={1200}
                                        height={800}
                                        className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                </div>

                                {/* TEXT */}
                                <div>

                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.hero.title}
                                    </h3>

                                    <p className="text max-w-2xl mt-4 line-clamp-2">
                                        {service.hero.description}
                                    </p>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>
            </section>

        </>
    );
}