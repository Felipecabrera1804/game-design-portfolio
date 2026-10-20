import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files starting with "_" (like _template.mdx) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.number(),
    role: z.string(),
    team: z.string().optional(),
    duration: z.string(),
    tools: z.array(z.string()).default([]),
    status: z.enum(['jam', 'prototype', 'student', 'released', 'in-progress']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    cover: z.object({ src: z.string(), alt: z.string() }),
    designQuestion: z.string(),
    mechanicMap: z
      .array(z.object({ mechanic: z.string(), meaning: z.string(), feeling: z.string() }))
      .min(1),
    playUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    docsUrl: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['analysis', 'experiment', 'jam', 'essay']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, notes };
