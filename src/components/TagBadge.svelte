<script lang="ts">
  interface Props {
    tag: string;
  }

  let { tag }: Props = $props();
</script>

<span class="text-xs text-muted border border-border/50 px-1.5 rounded">#{tag}</span>
