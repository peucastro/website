import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('RSS feed requires a "site" property in astro.config.ts');
  }

  const blog = await getCollection("blog");
  const projects = await getCollection("projects");

  const SITE_AUTHOR_EMAIL = "falecompedroac@gmail.com";

  const entries = [
    ...blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.updatedDate || post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: SITE_AUTHOR_EMAIL,
      categories: post.data.tags || [],
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/projects/${project.slug}/`,
      author: SITE_AUTHOR_EMAIL,
      categories: project.data.tags || [],
    })),
  ];

  entries.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "Pedro Castro",
    description: "Informatics and computing engineering student portfolio",
    site: context.site,
    items: entries,
    customData: `<language>en-us</language>`,
  });
}
