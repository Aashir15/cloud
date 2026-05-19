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

            <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-170 object-contain pointer-events-none opacity-100 mix-blend-color"
                src="assets/z.png"
                alt=""
            />

   
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

                        <p className="mt-4  max-w-xl">
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
        </section>
    );
}