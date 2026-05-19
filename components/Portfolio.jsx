import Link from "next/link";
import { projects } from "../data/projects";

export default function Portfolio() {
    return (
        <section className="md:py-20 py-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

                    <div>
                        <p className="badge mb-4">
                            Showcasing Our Expertise
                        </p>

                        <h2 className="heading">
                            Exciting Solutions,
                            <br />
                            Real Impact
                            <br />
                            Explore Our Projects
                        </h2>
                    </div>

                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/portfolio/${project.slug}`}
                            className="group"
                        >

                            {/* IMAGE */}
                            <div className="relative overflow-hidden rounded-xl mb-3 bg-white/5">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* TEXT */}
                            <div>
                                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-md line-clamp-2">
                                    {project.description}
                                </p>
                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}