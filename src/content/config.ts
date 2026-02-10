import { defineCollection, z } from "astro:content";

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
  liveUrl: z.string().url().optional(),
  repositoryUrl: z.string().url().optional(),
  status: z.enum(["active", "completed", "archived"]).default("completed"),
  technologies: uniqueStringArray,
});

export const collections = {
  blog: defineCollection({ type: "content", schema: blogSchema }),
  projects: defineCollection({ type: "content", schema: projectSchema }),
};
