import Image from "next/image";
import Portfolio from "../../components/Portfolio";

export default function PortfolioPage() {
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

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60" />

                {/* CONTENT */}
                <div className="absolute inset-0 z-10 flex items-end">

                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">

                        <p className="heading text-white">
                            Portfolio
                        </p>

                        <p className="text text-gray-200! max-w-2xl mt-4">
                            We bring creative solutions to life, driving results that matter.
                        </p>

                    </div>

                </div>
            </section>

            <Portfolio />

        </>
    );
}