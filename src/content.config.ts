import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    
    role: z.string().optional(),
    duration: z.string().optional(),
    teamSize: z.string().optional(),
    status: z.enum(['completed', 'in-progress', 'maintained']).default('completed'),
    
    technologies: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    videoUrl: z.string().optional(),
    
    github: z.string().optional(),
    demo: z.string().optional(),
    article: z.string().optional(),
    
    featured: z.boolean().default(false),
    order: z.number().default(0),
    category: z.enum(['web', 'mobile', 'ai', 'tool', 'other']).default('web'),
  }),
});

export const collections = { blog, portfolio };
