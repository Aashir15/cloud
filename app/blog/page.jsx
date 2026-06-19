import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../data/blog";

export const metadata = {
    title: "Blog | Cloud Minds Tech",
    description:
        "Read the latest insights, tips, and news from Cloud Minds Tech.",
};

export default function BlogPage() {
    return (
        <>
            <section className="relative w-full md:min-h-150 min-h-100">
                <Image
                    src="/assets/blog-cloud-minds-tech.webp"
                    alt="Blog Banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">
                        <p className="heading text-white">Blog</p>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            Share your stories and news with everyone.
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group">
                                <div className="relative overflow-hidden rounded-xl mb-4 bg-white/5">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={1200}
                                        height={800}
                                        className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 mb-2">{blog.date}</p>

                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>

                                    <p className="text max-w-2xl mt-4 line-clamp-2">
                                        {blog.description}
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