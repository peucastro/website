<script lang="ts">
  const targetEmail: string = "falecompedroac@gmail.com";
  const actionUrl = `https://formsubmit.io/send/${targetEmail}`;
</script>

<form action={actionUrl} method="POST" class="space-y-6">
  <input type="text" name="_gotcha" style="display:none" />
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
    class="bg-primary text-bg-deep hover:bg-secondary focus:ring-secondary w-full px-8 py-3 font-mono text-sm font-bold tracking-tighter uppercase transition focus:ring-2 focus:outline-none md:w-auto"
  >
    Send Message
  </button>
</form>
