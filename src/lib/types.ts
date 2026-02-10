import type { z } from "astro:content";
import type { blogSchema, projectSchema } from "@content/config";

export type Post = z.infer<typeof blogSchema>;
export type Project = z.infer<typeof projectSchema>;
