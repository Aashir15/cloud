import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "../../../data/blog";

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const blog = blogs.find((item) => item.slug === slug);

    return {
        title: blog
            ? `${blog.title} | Cloud Minds Tech`
            : "Blog Not Found | Cloud Minds Tech",
        description: blog?.description || "Blog not found",
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;

    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <>
            <section className="relative w-full md:min-h-150 min-h-100">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">
                        <p className="text-sm text-gray-200 mb-4">{blog.date}</p>

                        <h1 className="heading text-white max-w-4xl">{blog.title}</h1>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            {blog.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <Link href="/blog" className="inline-block mb-8 text-blue-600">
                        Back to Blog
                    </Link>

                    <div className="space-y-6">
                        {blog.content.map((paragraph, index) => (
                            <p key={index} className="text leading-8">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}