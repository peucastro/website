<script lang="ts">
  interface Props {
    tag: string;
  }

  let { tag }: Props = $props();
</script>

<span class="text-muted border-border/50 rounded border px-1.5 text-xs"
  >#{tag}</span
>
