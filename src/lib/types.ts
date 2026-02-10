import type { z } from "astro:content";
import type { blogSchema, projectSchema } from "@content/config";

type WithSlug<T> = T & { slug: string };

export type Post = WithSlug<z.infer<typeof blogSchema>>;
export type Project = WithSlug<z.infer<typeof projectSchema>>;
