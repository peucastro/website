<script lang="ts">
  const actionUrl = "https://api.web3forms.com/submit";
  const accessKey = "dd5dbe41-c942-4f57-88b9-4e6c1fbf1655";

  let status = $state("");
  let loading = $state(false);
  let isSuccess = $state(false);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    status = "Sending...";
    loading = true;
    isSuccess = false;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        isSuccess = true;
        status = "Success! Your message has been sent.";
        form.reset();
      } else {
        isSuccess = false;
        status = "Something went wrong. Please try again.";
      }
    } catch {
      status = "Network error. Please check your connection.";
    } finally {
      loading = false;
    }
  }
</script>

<form onsubmit={handleSubmit} class="space-y-6">
  <input type="hidden" name="access_key" value={accessKey} />
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <label for="name" class="form-label">Name</label>
      <input type="text" id="name" name="name" required class="form-input" />
    </div>

    <div>
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" name="email" required class="form-input" />
    </div>
  </div>

  <div>
    <label for="message" class="form-label">Message</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      required
      class="form-input resize-none"
    ></textarea>
  </div>

  <button
    type="submit"
    disabled={loading}
    class="bg-primary text-bg-deep hover:bg-secondary focus:ring-secondary w-full px-8 py-3 font-mono text-sm font-bold uppercase transition focus:ring-2 focus:outline-none disabled:opacity-50 md:w-auto"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>

  {#if status}
    <p
      class="mt-4 font-mono text-sm"
      class:text-success={isSuccess}
      class:text-danger={!isSuccess}
      aria-live="polite"
    >
      {status}
    </p>
  {/if}
</form>
