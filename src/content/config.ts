import { z, defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      series: z.optional(z.object({
        slug: z.string(),
        part: z.number()
      })),
      description: z.string(),
      image: z.object({
        source: z.string(),
        alt: z.string(),
      }),
      publishDate: z.coerce.date(),
      draft: z.boolean(),
    }),
  }),
};
