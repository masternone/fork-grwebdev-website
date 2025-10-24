import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const board = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "src/content/Board" }),
	schema: z.object({
		title: z.string().optional(),
		name: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		shortDescription: z.string(),
		slug: z.string(),
		joinDate: z.date(),
	}),
});

export const collections = { board };
