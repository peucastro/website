import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const uniqueStringArray = z
  .array(z.string())
  .refine((items: string[]) => new Set(items).size === items.length, {
    message: "must be unique",
  })
  .default([]);

export const blogSchema = z.object({
  title: z.string().min(5, "Title is too short").max(60, "Title is too long"),
  description: z
    .string()
    .min(20, "Description is too short")
    .max(160, "Description is too long"),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z
    .string()
    .min(2, "Category is too short")
    .max(32, "Category is too long"),
  tags: uniqueStringArray,
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string().max(200, "Description is too long"),
  pubDate: z.coerce.date(),
  tags: uniqueStringArray,
  image: z.string(),
  liveUrl: z.url().optional(),
  repositoryUrl: z.url().optional(),
  status: z.enum(["active", "completed", "archived"]).default("completed"),
  technologies: uniqueStringArray,
});

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
    schema: blogSchema,
  }),
  projects: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/projects",
    }),
    schema: projectSchema,
  }),
};
