import Image from "next/image";
import Button from "./PrimaryBtn";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="/assets/cloud-minds-tech.mp4"
                    type="video/mp4"
                />
            </video>
            
            <div className="absolute inset-0 z-1">
                <div className="absolute inset-0 bg-[#7AFFED]/10" />
                <div className="absolute inset-0 bg-linear-to-t from-[#00110F]/80 via-transparent to-[#00110F]/60" />
            </div>
   
            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    <div className="max-w-2xl text-white">

                        <span className="badge mb-4">
                            Global Software Solutions
                        </span>

                        <h1 className="text-4xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
                            <span className="text-primary">#01 Global </span>
                            Leading
                            <br />
                            Software Company
                        </h1>

                        <p className="mt-4  max-w-xl">
                            We create world-class websites, mobile apps,
                            UI/UX experiences, branding, and scalable
                            digital products for modern businesses.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-4">
                            <Button href="/contact" text="Get Quote" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}