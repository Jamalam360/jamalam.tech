import { z, defineCollection } from 'astro:content';

export const collections = {
    "blog": defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
            alt: z.string(),
            tags: z.array(z.string()),
            publishDate: z.coerce.date(),
            draft: z.boolean(),
        }),
     }),
    "projects": defineCollection({ 
        schema: z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
            alt: z.string(),
            category: z.string(),
        })
     }),
};