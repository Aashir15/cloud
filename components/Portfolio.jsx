export default function Portfolio() {

    const projects = [
        {
            title: "Luxury Brand Website",
            category: "UI/UX Design, Development",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            description:
                "A modern high-converting website crafted for a premium brand with immersive visuals and smooth interactions.",
        },
        {
            title: "Creative Agency Platform",
            category: "Branding, Strategy",
            image:
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
            description:
                "Designed and developed a bold digital experience focused on storytelling, engagement, and conversions.",
        },
        {
            title: "Photography Portfolio",
            category: "Creative Direction",
            image:
                "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
            description:
                "A cinematic portfolio website with elegant layouts, subtle animations, and a luxury visual identity.",
        },
    ];

    return (
        <section className="md:py-20 py-12">
            <div className="max-w-7xl mx-auto px-6">

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

                    <button className="border border-white/20 hover:border-primary hover:bg-primary transition-all duration-300 px-7 py-3 rounded-full text-sm font-medium w-fit">
                        Show All Works
                    </button>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group">

                            <div className="relative overflow-hidden rounded-xl mb-3 bg-white/5 ">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"/>

                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}