import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const collection = await getCollection("blog");

  return rss({
    title: "Jamalam's Blog",
    description: "All about whatever I want :)",
    site: import.meta.env.SITE,
    items: Object.values(collection).map((post) => {
      const { slug, data } = post;

      return {
        link: `${import.meta.env.BASE_URL}/blog/${slug}`,
        title: data.title,
        description: data.description,
        pubDate: data.publishDate,
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
