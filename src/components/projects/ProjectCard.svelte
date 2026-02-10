<script lang="ts">
  import Card from "@components/ui/Card.svelte";
  import IconLink from "@components/ui/IconLink.svelte";
  import TagBadge from "@components/ui/TagBadge.svelte";
  import { formatDate, type Project, projectStatusMap } from "$lib/utils";
  import IconExternal from "~icons/lucide/external-link";
  import IconGithub from "~icons/simple-icons/github";

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<Card>
  {#snippet header()}
    <h3
      class="text-fg-strong group-hover:text-secondary mb-2 text-lg font-bold transition-colors"
    >
      {project.data.title}
    </h3>
    <div class="text-muted flex items-center gap-3 font-mono text-xs">
      <time datetime={project.data.pubDate.toISOString()}>
        {formatDate(project.data.pubDate)}
      </time>
      <span class="bg-border h-1 w-1 rounded-full"></span>
      <span
        class="rounded border px-2 py-0.5 {projectStatusMap[
          project.data.status
        ]} capitalize"
      >
        {project.data.status}
      </span>
    </div>
  {/snippet}

  {#snippet actions()}
    {#if project.data.repositoryUrl}
      <IconLink
        href={project.data.repositoryUrl}
        icon={IconGithub}
        label="Source Code"
      />
    {/if}
    {#if project.data.liveUrl}
      <IconLink
        href={project.data.liveUrl}
        icon={IconExternal}
        label="Live Demo"
      />
    {/if}
  {/snippet}

  <p class="text-fg-muted text-sm leading-relaxed">
    {project.data.description}
  </p>

  {#snippet footer()}
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
  {/snippet}
</Card>
