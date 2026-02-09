<script lang="ts">
  let { href, icon: Icon, label } = $props();
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
