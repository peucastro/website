<script lang="ts">
  import type { Component } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";

  interface Props {
    href: string;
    icon: Component<SvelteHTMLElements["svg"]>;
    label: string;
  }

  let { href, icon: Icon, label }: Props = $props();
</script>

{#if href}
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    class="hover:text-primary hover:bg-bg-deep hover:border-border rounded border border-transparent p-2 transition-all"
  >
    <Icon width="16" />
  </a>
{/if}
