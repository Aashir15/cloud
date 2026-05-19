// app/services/[slug]/page.jsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "../../../data/projects";
import FAQSection from "../../../components/Faq";

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
        <>
            <section className="relative w-full md:min-h-150 min-h-100">

                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading">
                            {service.title}
                        </p>

                        <p className="text">
                            {service.description}
                        </p>

                    </div>
                </div>

            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div className="">
                        <img
                            src="/assets/s-1.png"
                            alt="DotClick team working"
                            className="w-230 rounded-2xl h-150 object-cover"
                        />
                    </div>

                    <div>
                        <p className="badge mb-4">
                            Web Dev Services
                        </p>

                        <h2 className="heading">
                            Web Application
                            <span className="text-primary"> Development</span>
                        </h2>

                        <p className="text mt-4">
                            Web application development is the key to unlocking the potential of your digital ideas and turning them into a reality. Whether you are just starting new business, expanding an existing one, or looking to enhance your online presence, our team of experts is here to help. With our innovative and tailored web application development services, we aim to meet your specific needs and exceed your expectations.
                        </p>
                        <p className="text mt-4">
                            In today’s digital age, having a strong online presence is crucial for businesses of all sizes and industries. Web applications play a vital role in providing users with interactive and engaging experiences, allowing them to access your products or services through the power of the internet. Investing in web application development can give your business a competitive edge by offering seamless functionality, easy navigation, and enhanced user experience.
                        </p>
                    </div>

                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="heading mb-4">
                            FAQ
                        </h2>
                        

                        <FAQSection />
                    </div>

                    <div>
                        <h2 className="heading">
                            App Maintenance and Support
                        </h2>

                        <p className="text mt-4">
                            One of the main reasons why app maintenance is important is to improve the performance of the app. Over time, users may encounter bugs or performance issues that need to be addressed. Through regular maintenance, developers can identify and fix these bugs, optimizing the app for a better user experience. This ensures that the app continues to function flawlessly and minimizes the risk of crashes or errors.
                        </p>
                    </div>

                </div>
            </section>

            <section className="md:py-20 py-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div className="">
                        <img
                            src="/assets/s-2.png"
                            alt="DotClick team working"
                            className="w-130 rounded-2xl h-auto object-cover"
                        />
                    </div>

                    <div>
                        <p className="badge mb-4">
                            What We Offer
                        </p>

                        <h2 className="heading">
                            Full-Service Mobile App Development Solutions
                        </h2>

                        <p className="text mt-4">
                            At Dot Click llc, we understand the significance of mobile applications in today’s digital age. With more and more people relying on smartphones for various activities, the demand for innovative and user-friendly mobile apps is on the rise. That’s why we take pride in offering comprehensive mobile application development services, aimed at turning your ideas into reality. In this article, we will explore the key factors that set our full-service mobile app development solutions apart from the rest.
                        </p>
                    </div>

                </div>
            </section>

        </>
    );
}