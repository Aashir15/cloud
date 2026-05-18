import Image from "next/image";
import ServicesBox from "../../components/ServicesBox";

export default function Services() {
    return (
        <>

            <section className="relative w-full md:min-h-150 min-h-100">
                <Image
                    src="/assets/portfolio.png"
                    alt="Portfolio Banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading">
                            Services
                        </p>

                        <p className="text">
                            Share your stories and news with everyone.
                        </p>

                    </div>
                </div>
            </section>

            <ServicesBox />

        </>
    );
}