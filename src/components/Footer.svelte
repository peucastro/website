<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="mt-20 border-t border-border py-8 bg-bg-deep">
  <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-mono">
    <p class="text-muted text-xs">
      &copy; {currentYear} Pedro Castro.
    </p>

    <div class="flex gap-4 text-muted">
      <a href="https://github.com" class="hover:text-primary transition-colors" aria-label="GitHub">github</a>
      <a href="https://linkedin.com" class="hover:text-secondary transition-colors" aria-label="LinkedIn">linkedin</a>
    </div>
  </div>
</footer>
