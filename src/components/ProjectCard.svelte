<script lang="ts">
  import IconLink from "@components/IconLink.svelte";
  import { formatDate, type Project, projectStatusMap } from "$lib/utils";
  import IconExternal from "~icons/lucide/external-link";
  import IconGithub from "~icons/simple-icons/github";

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<article class="group border border-border bg-bg-soft p-6 transition-all hover:border-primary/80 hover:bg-surface/50">
  <header class="flex justify-between items-start gap-4 mb-4">
    <div>
      <h3 class="font-bold text-lg text-fg-strong group-hover:text-primary transition-colors mb-2">
        {project.data.title}
      </h3>
      <div class="flex items-center gap-3 text-xs font-mono text-muted">
        <time datetime={project.data.pubDate.toISOString()}>{formatDate(project.data.pubDate)}</time>
        <span class="w-1 h-1 rounded-full bg-border"></span>
        <span class="px-2 py-0.5 rounded border {projectStatusMap[project.data.status]} capitalize">
          {project.data.status}
        </span>
      </div>
    </div>

    <div class="flex gap-1 text-muted">
      <IconLink href={project.data.repositoryUrl} icon={IconGithub} label="Source Code" />
      <IconLink href={project.data.liveUrl} icon={IconExternal} label="Live Demo" />
    </div>
  </header>

  <p class="text-sm text-fg-muted leading-relaxed mb-5">
    {project.data.description}
  </p>

  <footer class="flex flex-col gap-3">
    <div class="flex flex-wrap gap-2">
      {#each project.data.tags as tag}
        <span class="text-xs text-muted border border-border/50 px-1.5 rounded">#{tag}</span>
      {/each}

      {#each project.data.technologies as tech}
        <span class="text-xs font-mono uppercase bg-bg-deep text-secondary border border-border/50 px-2 py-0.5 group-hover:border-secondary/30 transition-colors">
          {tech}
        </span>
      {/each}
    </div>
  </footer>
</article>
