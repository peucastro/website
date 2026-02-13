<script lang="ts">
  import { type Post } from "$lib/types";
  import { formatDate } from "$lib/utils";
  import TagBadge from "@components/ui/TagBadge.svelte";

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();
</script>

<article
  class="group hover:bg-bg-soft/50 relative -mx-4 my-3 flex flex-col rounded-md px-4 py-6 transition-all"
>
  <header class="mb-3">
    <h3
      class="text-fg-strong group-hover:text-primary mb-2 text-lg font-bold transition-colors"
    >
      <a href={`/blog/${post.slug}/`} class="focus-visible:outline-primary">
        <span class="absolute inset-0 z-0" aria-hidden="true"></span>
        {post.title}
      </a>
    </h3>

    <div class="text-muted flex items-center gap-3 font-mono text-xs">
      <time datetime={post.pubDate.toISOString()}>
        {formatDate(post.pubDate, true)}
      </time>

      <span class="bg-border h-1 w-1 rounded-full"></span>
      <span class="text-secondary uppercase">
        {post.category}
      </span>
    </div>
  </header>

  <p class="text-fg-muted mb-4 text-sm leading-relaxed">
    {post.description}
  </p>

  <footer class="flex flex-wrap gap-2">
    {#each post.tags as tag (tag)}
      <TagBadge {tag} />
    {/each}
  </footer>
</article>
