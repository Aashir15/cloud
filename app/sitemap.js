export default function sitemap() {
    const baseUrl = "https://cloudmindstechllc.com";

    const routes = [
        "",
        "/about",

        "/creative-design",
        "/creative-design/ui-ux-design",
        "/creative-design/branding",
        "/creative-design/graphic-designing",
        "/creative-design/package-design",
        "/creative-design/video-editing",

        "/tech-development",
        "/tech-development/software-development",
        "/tech-development/ecommerce-solutions",
        "/tech-development/web-mobile-app-development",
        "/tech-development/wordpress-website-development",

        "/growth-marketing",
        "/growth-marketing/seo-services",
        "/growth-marketing/social-media-marketing",
        "/growth-marketing/social-media-ads",
        "/growth-marketing/website-ppc",

        "/3d-studio",
        "/3d-studio/3d-modeling",
        "/3d-studio/3d-animation",

        "/contact",

        "/blog",
        "/blog/why-every-business-needs-a-professional-website",
        "/blog/benefits-of-custom-web-development",
        "/blog/how-seo-helps-businesses-grow-online",

        "/privacy",
        "/term",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
    }));
}