<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  let { project }: { project: CollectionEntry<"projects"> } = $props();
</script>

<h1>Title: {project.data.title}</h1>
{#each project.data.tags as tag}
  <p>{tag}</p>
{/each}
