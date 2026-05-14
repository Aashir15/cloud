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
                    src="https://dotclickllc.com/wp-content/uploads/2023/10/Dot-Click-GloballyLeading-Software-Compnay.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Gradient */}
            {/* <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" /> */}

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    <div className="max-w-2xl text-white">

                        <span className="badge mb-4">
                            Global Software Solutions
                        </span>

                        <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                            <span className="text-primary">#1 Global </span>
                            Leading
                            <br />
                            Software Company
                        </h1>

                        <p className="mt-4 text max-w-xl">
                            We create world-class websites, mobile apps,
                            UI/UX experiences, branding, and scalable
                            digital products for modern businesses.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-4">
                            <Button text="Get Started" />
                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-34 bg-linear-to-t from-black to-transparent" />

        </section>
    );
}