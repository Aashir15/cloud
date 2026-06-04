import Image from "next/image";
import Hero from "../components/Hero";
// import Portfolio from "../components/Portfolio";
import FAQSection from "../components/Faq";
import { services } from "../data/creative&design";


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

const ratings = [
  {
    name: "Trustpilot",
    logo: "/assets/Trustpilot.png",
    rating: "4.8 Rating on Trustpilot",
  },
  {
    name: "Google",
    logo: "/assets/google.png",
    rating: "4.6 Rating on Google",
  },
  {
    name: "Fiverr",
    logo: "/assets/fiver.png",
    rating: "4.9 Rating on Fiverr",
  },
  {
    name: "Bark",
    logo: "/assets/bark.png",
    rating: "4.8 Rating on Bark",
  },
  {
    name: "Upwork",
    logo: "/assets/upwork.png",
    rating: "4.9 Rating on Upwork",
  },
  {
    name: "Toptal",
    logo: "/assets/toptal.png",
    rating: "4.6 Rating on Toptal",
  },
];


export const metadata = {

  metadataBase: new URL("https://www.cloudmindstechllc.com/"),
  title: "Cloud Minds Tech | Software Development, AI & Digital Solutions",
  description:
    "Cloud Minds Tech delivers innovative software development, AI-powered solutions, web development, mobile applications, UI/UX design, and digital transformation services for businesses worldwide.",

  keywords: [
    "Cloud Minds Tech",
    "Software Development Company",
    "AI Solutions",
    "Web Development",
    "Mobile App Development",
    "UI UX Design",
    "Digital Transformation",
    "Custom Software Development",
    "Shopify Development",
    "WordPress Development",
    "Technology Solutions",
  ],

  openGraph: {
    title: "Cloud Minds Tech | Software Development, AI & Digital Solutions",
    description:
      "Empowering businesses through innovative software, AI solutions, web development, and digital transformation services.",
    url: "https://www.cloudmindstechllc.com/",
    siteName: "Cloud Minds Tech",
    images: [
      {
        url: "/assets/cloud-mind-tech.png",
        width: 1200,
        height: 630,
        alt: "Cloud Minds Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloud Minds Tech | Software Development, AI & Digital Solutions",
    description:
      "Innovative software development, AI solutions, web applications, mobile apps, and digital transformation services.",
    images: ["/assets/cloud-mind-tech.png"],
  },

  alternates: {
    canonical: "https://www.cloudmindstechllc.com/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

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
                className="flex items-center justify-center"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={500}
                  height={250}
                  className="w-55 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="md:py-20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <Image
            src="/assets/h-1.webp"
            alt="Cloud Minds Tech team working"
            width={1200}
            height={1200}
            className="w-full max-w-130 h-auto rounded-2xl object-cover"
          />

          <div>
            <p className="badge mb-4">
              Discover Cloud Minds Tech
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

      <section className="md:py-20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="badge mb-4">
              Redefining Digital Aesthetics
            </p>

            <h2 className="heading mb-4">
              Modern Design Meets Cutting
              <span className="text-primary"> Edge Technology</span>
            </h2>
            <div className="w-80 h-3 mb-6 bg-[repeating-linear-gradient(-45deg,#7AFFED_0,#7AFFED_4px,transparent_4px,transparent_8px)]" />

            <FAQSection faqs={services[0]?.faq || []} />
          </div>

          <div className="">
            <Image
              src="/assets/cloud-minds-tech-home-1.webp"
              alt="Cloud Minds Tech team working"
              width={1200}
              height={1200}
              className="w-full max-w-160 h-auto rounded-2xl object-cover"
            />
          </div>

        </div>
      </section>

      <section className="md:py-20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

          <div>
            <p className="badge mb-4">
              Our Commitment To Excellence Verified
            </p>

            <h2 className="heading mb-4">
              Industry Recognition <br />
              and Customer
              Satisfaction
            </h2>

            <div className="w-80 h-3 mb-6 bg-[repeating-linear-gradient(-45deg,#7AFFED_0,#7AFFED_4px,transparent_4px,transparent_8px)]" />

            <p className="text">
              Cloud Minds Tech isn’t just about delivering exceptional tech
              solutions; it’s about earning your trust and setting
              industry benchmarks. Our numerous awards and
              consistently high ratings on platforms like Trustpilot
              and Google Reviews affirm our commitment to quality and
              customer satisfaction.
            </p>
          </div>

          <div>
            <p className="text mb-6">
              Recognized for industry-leading excellence through
              prestigious awards, and further validated by outstanding
              customer ratings on Trustpilot and Google Reviews.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">

              {ratings.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* LOGO */}
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={400}
                    height={250}
                    className="w-40 h-auto object-contain"
                  />

                  {/* STARS */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-lg"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* RATING */}
                  <p className="text-sm">
                    {item.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Portfolio /> */}

    </>
  );
}