import { getCollection } from "astro:content";
import type { Post, Project } from "./types";

type CollectionMap = {
  blog: Post;
  projects: Project;
};

async function getSortedCollection<T extends keyof CollectionMap>(
  collection: T,
  limit?: number,
): Promise<CollectionMap[T][]> {
  const entries = await getCollection(collection);

  const sorted = entries
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((entry) => ({
      ...entry.data,
      slug: entry.slug,
    })) as CollectionMap[T][];

  return limit !== undefined ? sorted.slice(0, limit) : sorted;
}

export const getPosts = (limit?: number) => getSortedCollection("blog", limit);

export const getProjects = (limit?: number) =>
  getSortedCollection("projects", limit);
