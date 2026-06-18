import Script from "next/script";
import { Raleway } from "next/font/google";
import "./globals.css";


import Header from "../components/Header";
import Footer from "../components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.cloudmindstechllc.com/"),

  title: {
    default: "Cloud Minds Tech",
    template: "%s | Cloud Minds Tech",
  },

  description:
    "Cloud Minds Tech provides software development, AI solutions, web development, mobile app development, UI/UX design, and digital transformation services for businesses worldwide.",

  keywords: [
    "Cloud Minds Tech",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "UI UX Design",
    "Shopify Development",
    "WordPress Development",
    "Digital Transformation",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cloud Minds Tech",
    title: "Cloud Minds Tech",
    description:
      "Innovative software development, AI solutions, web applications, mobile apps, and digital transformation services.",
    images: [
      {
        url: "/assets/cloud-mind-tech.png",
        width: 1200,
        height: 630,
        alt: "Cloud Minds Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloud Minds Tech",
    description:
      "Innovative software development, AI solutions, web applications, mobile apps, and digital transformation services.",
    images: ["/assets/cloud-mind-tech.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={raleway.variable}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />

        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-4BWBEWJ22Z`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-4BWBEWJ22Z');
  `}
        </Script>

        <Footer />

      </body>
    </html>
  );
}



