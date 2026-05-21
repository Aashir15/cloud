import Image from "next/image";
import { notFound } from "next/navigation";

import { studio } from "../../../data/studio";
import FAQSection from "../../../components/Faq";

export async function generateMetadata({ params }) {

    const { slug } = await params;

    const service = studio.find(
        (item) => item.slug === slug
    );

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `Cloud Minds Teach | ${service.hero.title}`,
        description: service.hero.description,
    };
}

export default async function ServiceDetailPage({ params }) {

    const { slug } = await params;

    const service = studio.find(
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
                        <img
                            src={service.section1.image}
                            alt={service.section1.title}
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
                        <img
                            src={service.section3.image}
                            alt={service.section3.title}
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