<script lang="ts">
  import IconLink from "@components/IconLink.svelte";
  import TagBadge from "@components/TagBadge.svelte";
  import { formatDate, type Project, projectStatusMap } from "$lib/utils";
  import IconExternal from "~icons/lucide/external-link";
  import IconGithub from "~icons/simple-icons/github";

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<article
  class="group border-border bg-bg-soft hover:border-primary/80 hover:bg-surface/50 border p-6 transition-all"
>
  <header class="mb-4 flex items-start justify-between gap-4">
    <div>
      <h3
        class="text-fg-strong group-hover:text-primary mb-2 text-lg font-bold transition-colors"
      >
        {project.data.title}
      </h3>
      <div class="text-muted flex items-center gap-3 font-mono text-xs">
        <time datetime={project.data.pubDate.toISOString()}
          >{formatDate(project.data.pubDate)}</time
        >
        <span class="bg-border h-1 w-1 rounded-full"></span>
        <span
          class="rounded border px-2 py-0.5 {projectStatusMap[
            project.data.status
          ]} capitalize"
        >
          {project.data.status}
        </span>
      </div>
    </div>

    <div class="text-muted flex gap-1">
      <IconLink
        href={project.data.repositoryUrl}
        icon={IconGithub}
        label="Source Code"
      />
      <IconLink
        href={project.data.liveUrl}
        icon={IconExternal}
        label="Live Demo"
      />
    </div>
  </header>

  <p class="text-fg-muted mb-5 text-sm leading-relaxed">
    {project.data.description}
  </p>

  <footer class="flex flex-col gap-3">
    <div class="flex flex-wrap gap-2">
      {#each project.data.tags as tag (tag)}
        <TagBadge {tag} />
      {/each}

      {#each project.data.technologies as tech (tech)}
        <span
          class="bg-bg-deep text-secondary border-border/50 group-hover:border-secondary/30 border px-2 py-0.5 font-mono text-xs uppercase transition-colors"
        >
          {tech}
        </span>
      {/each}
    </div>
  </footer>
</article>
