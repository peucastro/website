<script lang="ts">
  import { onMount } from "svelte";
  import IconSun from "~icons/lucide/sun";
  import IconMoon from "~icons/lucide/moon";

  let isDark = $state(false);

  onMount(() => {
    isDark = document.documentElement.classList.contains("dark");
  });

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
</script>

<button
  onclick={toggleTheme}
  class="text-muted hover:text-primary transition-colors"
  aria-label="Toggle theme"
>
  {#if isDark}
    <IconSun />
  {:else}
    <IconMoon />
  {/if}
</button>
