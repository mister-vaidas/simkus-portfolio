export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: "https://simkus.co.uk/sitemap.xml"
  };
}
