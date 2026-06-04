import Link from "next/link";

export const metadata = {
    title: "Terms & Conditions",
    description:
        "Read the Terms & Conditions of Cloud Minds Tech to understand the rules, responsibilities, and conditions governing the use of our website and services.",
    keywords: [
        "Cloud Minds Tech",
        "Terms and Conditions",
        "Website Terms",
        "Terms of Service",
        "User Agreement",
        "Legal Terms",
        "Technology Services",
        "Software Development Terms",
        "Website Usage Policy"
    ],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Terms & Conditions",
        description:
            "Review the terms governing the use of Cloud Minds Tech's website and services.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions",
        description:
            "Read the Terms & Conditions for using Cloud Minds Tech services and website.",
    },
};

export default function TermsCondition() {
    return (
        <main className="mt-20 text-gray-700 dark:text-gray-300">
            <div className="max-w-4xl mx-auto px-6 py-20">

                {/* HEADER */}
                <h1 className="text-4xl font-bold text-black dark:text-white">
                    Terms & Conditions
                </h1>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                {/* INTRO */}
                <section className="mt-10 space-y-4 text-sm leading-7">
                    <p>
                        By accessing and using this website, you agree to be bound by these
                        Terms & Conditions. If you do not agree, please do not use our services.
                    </p>
                </section>

                {/* USE OF WEBSITE */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        1. Use of Website
                    </h2>

                    <p className="mt-3 text-sm leading-7">
                        You agree to use this website only for lawful purposes. You must not
                        use it in any way that may cause harm, damage, or restrict access to
                        other users.
                    </p>
                </section>

                {/* PRODUCTS / SERVICES */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        2. Products & Services
                    </h2>

                    <p className="mt-3 text-sm leading-7">
                        We reserve the right to modify, update, or discontinue any product or
                        service at any time without prior notice.
                    </p>
                </section>

                {/* ORDERS */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        3. Orders & Payments
                    </h2>

                    <p className="mt-3 text-sm leading-7">
                        All orders are subject to acceptance and availability. Prices may be
                        changed without notice. Payment must be completed before order
                        processing.
                    </p>
                </section>

                {/* LIMITATION */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        4. Limitation of Liability
                    </h2>

                    <p className="mt-3 text-sm leading-7">
                        We are not responsible for any direct, indirect, or incidental damages
                        arising from the use of our website or services.
                    </p>
                </section>

                {/* CHANGES */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        5. Changes to Terms
                    </h2>

                    <p className="mt-3 text-sm leading-7">
                        We may update these Terms & Conditions at any time. Continued use of
                        the website means you accept the updated terms.
                    </p>
                </section>

                {/* CONTACT */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        6. Contact Us
                    </h2>

                    <p className="mt-3 text-sm leading-7">
                        If you have any questions regarding these terms, please contact us.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Go to Contact Page →
                    </Link>
                </section>

            </div>
        </main>
    );
}