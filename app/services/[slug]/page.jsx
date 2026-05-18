// app/services/[slug]/page.jsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "../../../data/projects";

export async function ServicePage({ params }) {

    const resolvedParams = await params;

    const service = services.find(
        (item) => item.slug === resolvedParams.slug
    );

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: service.title,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }) {

    const resolvedParams = await params;

    const service = services.find(
        (item) => item.slug === resolvedParams.slug
    );

    if (!service) {
        notFound();
    }

    return (
        <main className="relative overflow-hidden">

            {/* HERO */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center">

                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-3xl">

                        <span className="inline-block mb-5 px-4 py-2 rounded-full border border-white/20 text-sm text-white/70 backdrop-blur">
                            Our Service
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            {service.title}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            {service.description}
                        </p>

                    </div>
                </div>

            </section>

        </main>
    );
}