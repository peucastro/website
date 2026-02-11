import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const projects = await getCollection("projects");

  const entries = [
    ...blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: "falecompedroac@gmail.com",
      categories: post.data.tags || [],
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.updatedDate || project.data.pubDate,
      description: project.data.description,
      link: `/projects/${project.slug}/`,
      author: "falecompedroac@gmail.com",
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
