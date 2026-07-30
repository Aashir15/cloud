export default function sitemap() {
    const baseUrl = "https://cloudmindstechllc.com";

    const routes = [
        "",

        "/about",

        // Creative Design
        "/creative-design",
        "/creative-design/ui-ux-design",
        "/creative-design/branding",
        "/creative-design/graphic-designing",
        "/creative-design/package-design",
        "/creative-design/video-editing",

        // Tech Development
        "/tech-development",
        "/tech-development/software-development",
        "/tech-development/ecommerce-solutions",
        "/tech-development/web-mobile-app-development",
        "/tech-development/wordpress-website-development",

        // Growth Marketing
        "/growth-marketing",
        "/growth-marketing/seo-services",
        "/growth-marketing/social-media-marketing",
        "/growth-marketing/social-media-ads",
        "/growth-marketing/website-ppc",

        // 3D Studio
        "/3d-studio",
        "/3d-studio/3d-modeling",
        "/3d-studio/3d-animation",

        // Contact
        "/contact",

        // Blog
        "/blog",
        "/blog/why-every-business-needs-a-professional-website",
        "/blog/benefits-of-custom-web-development",
        "/blog/how-seo-helps-businesses-grow-online",

        // Legal
        "/privacy",
        "/term",
    ];

    return routes.map((route) => {
        const isHomepage = route === "";
        const isMainPage =
            route === "/about" ||
            route === "/creative-design" ||
            route === "/tech-development" ||
            route === "/growth-marketing" ||
            route === "/3d-studio" ||
            route === "/contact" ||
            route === "/blog";

        return {
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: isHomepage ? "weekly" : "monthly",
            priority: isHomepage ? 1 : isMainPage ? 0.9 : 0.7,
        };
    });
}