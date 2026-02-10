<script lang="ts">
  interface Props {
    title: string;
  }
  const { title }: Props = $props();
</script>

<div class="mb-8 flex items-center gap-4">
  <h2 class="text-secondary font-mono text-sm tracking-widest uppercase">
    {title}
  </h2>
  <div class="bg-border/50 h-px flex-1"></div>
</div>
