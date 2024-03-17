import { z, defineCollection, getCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    summary: z.string(),
  }),
});

export const collections = {
  blog,
};

export async function getBlogPosts() {
  return await getCollection("blog").then((c) => c.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()));
}
