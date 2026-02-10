<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    header?: Snippet;
    footer?: Snippet;
    actions?: Snippet;
    class?: string;
  }

  let {
    children,
    header,
    footer,
    actions,
    class: className = "",
  }: Props = $props();
</script>

<article
  class="group bg-bg-soft hover:border-primary/50 hover:bg-surface/50 rounded-sm border p-6 transition-all {className}"
>
  <header class="mb-4 flex items-start justify-between gap-4">
    <div>
      {@render header?.()}
    </div>

    {#if actions}
      <div class="text-muted flex gap-1">
        {@render actions()}
      </div>
    {/if}
  </header>

  <div class="mb-5">
    {@render children?.()}
  </div>

  {#if footer}
    <footer>
      {@render footer()}
    </footer>
  {/if}
</article>
