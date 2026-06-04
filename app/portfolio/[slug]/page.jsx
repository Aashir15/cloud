import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";


export async function generateMetadata({ params }) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,

        openGraph: {
            title: `${project.title} | Cloud Minds Tech`,
            description: project.description,
            images: [
                {
                    url: project.image,
                    alt: project.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Cloud Minds Tech`,
            description: project.description,
            images: [project.image],
        },

        alternates: {
            canonical: `/portfolio/${slug}`,
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function ProjectDetails({ params }) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <main className="mt-20">

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">

                        <div>
                            <h2 className="text-3xl lg:text-6xl font-black leading-tight mb-4">
                                {project.title}
                            </h2>

                            <p className="text">
                                {project.description}
                            </p>
                        </div>

                        <div className="space-y-8">

                            <div className="border-b border-gray-600 pb-6">
                                <p className="text-xl font-semibold mb-3">
                                    Task
                                </p>

                                <p className="text">
                                    {project.task}
                                </p>
                            </div>

                            <div className="border-b border-gray-600 pb-6">
                                <p className="text-xl font-semibold mb-3">
                                    Clint
                                </p>

                                <p className="text">
                                    {project.clint}
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            <div className="max-w-7xl mx-auto px-6 pb-6">
                <Image
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                />
            </div>


        </main>
    );
}