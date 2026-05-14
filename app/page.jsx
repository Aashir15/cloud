import Hero from "../components/Hero";


const partners = [
  {
    name: "WordPress",
    image: "/assets/CloudMindsTeach-Wordpress-Partners.png",
  },
  {
    name: "RedRhinoz",
    image: "/assets/CloudMindsTeach-RedRhinoz-Partners.png",
  },
  {
    name: "Shopify",
    image: "/assets/CloudMindsTeach-Shopify-Partners.png",
  },
  {
    name: "Xiom",
    image: "/assets/CloudMindsTeach-Xiom-Software-Company-Partners.png",
  },
  {
    name: "OpenAI",
    image: "/assets/CloudMindsTeach-OpenAiPartners.png",
  },
];

export default function Home() {
  return (
    <>

      <Hero />

      <section className="md:py-20 py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <span className="badge mb-4">
              Valuable Partners
            </span>

            <h2 className="heading">
              <span className="text-primary">Cloud Minds Tech's </span>
               Expanding Global Network
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="md:py-20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div className="">
              <img
                src="/assets/h-1.webp"
                alt="DotClick team working"
                className="w-130 rounded-2xl h-auto object-cover"
              />
            </div>

          <div>
            <p className="badge mb-4">
              Discover DotClick
            </p>

            <h2 className="heading">
              Unveiling Our <br />
              Journey to Innovate, <br />
              <span className="text-primary"> Transform, and Lead</span>
            </h2>

            <p className="text mt-4">
              We’re more than just a global software solutions provider we’re
              your strategic partner in digital transformation. Our journey,
              fueled by innovation and industry leadership, aims to revolutionize
              technology solutions and create lasting impact worldwide.
            </p>
          </div>

        </div>
      </section>

    </>
  );
}