export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/"],
        },
        sitemap: "https://cloudmindstechllc.com/sitemap.xml",
        host: "https://cloudmindstechllc.com",
    };
}