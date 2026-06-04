import Image from "next/image";
import Link from "next/link"
import ServicesBox from "../../components/ServicesBox";
import { studio } from "../../data/studio";


export const metadata = {
    title: "3d Studio",
    description:
        "Explore Cloud Minds Tech's 3D Studio services including 3D visualization, rendering, animation, product modeling, and architectural visualization for modern digital experiences.",

    keywords: [
        "Cloud Minds Tech",
        "3D Studio",
        "3D Visualization Services",
        "3D Rendering",
        "3D Animation",
        "Product Modeling",
        "Architectural Visualization",
        "CGI Services",
        "3D Design Studio",
        "Motion Graphics",
        "Digital Rendering Services",
    ],

    openGraph: {
        title: "3D Studio Services | Cloud Minds Tech",
        description:
            "Professional 3D studio services including modeling, animation, rendering, and visualization for businesses and creative projects.",
        url: "https://www.cloudmindstechllc.com/3d-studio",
        siteName: "Cloud Minds Tech",
        images: [
            {
                url: "/assets/service-4.avif",
                width: 1200,
                height: 630,
                alt: "3D Studio - Cloud Minds Tech",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "3D Studio Services | Cloud Minds Tech",
        description:
            "High-quality 3D visualization, animation, and rendering services for brands and businesses.",
        images: ["/assets/service-4.avif"],
    },

    alternates: {
        canonical: "https://www.cloudmindstechllc.com/3d-studio",
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
                    src="/assets/service-4.avif"
                    alt="Portfolio Banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading text-white">
                            3D Studio
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

                        {studio.map((service) => (

                            <Link
                                key={service.slug}
                                href={`/3d-studio/${service.slug}`}
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