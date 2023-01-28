import rss from "@astrojs/rss";

const glob = import.meta.glob("./blog/**/*.mdx", { eager: true });

//TODO: Update the metadata for this, and use content collections
export function get() {
  return rss({
    title: "Jamalam's Blog",
    description:
      "My blog, where I post random things that I feel like writing about.",
    site: import.meta.env.SITE,
    items: Object.values(glob).map((post) => {
      const { url, frontmatter } = post as any;

      return {
        link: url,
        title: frontmatter.title,
        description: frontmatter.description,
        pubDate: frontmatter.publishDate,
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
