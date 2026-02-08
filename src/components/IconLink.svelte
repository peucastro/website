<script lang="ts">
  let { href, icon: Icon, label } = $props();
</script>

{#if href}
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    class="p-2 hover:text-primary hover:bg-bg-deep border border-transparent hover:border-border transition-all rounded"
  >
    <Icon width="16" />
  </a>
{/if}
