<script>
  let { data } = $props();
  let { session, supabase } = $derived(data);
</script>

<div class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="">
      <img src="/logo.svg" alt="Logo" class="mb-5 h-32 max-w-full w-auto object-contain" />
      <h1 class="mb-5 text-xl font-bold text-gray-200">
        Hosted on thinkalex.dev
      </h1>
      
      {#if session}
      <a class="btn btn-primary" href="/games">My Games</a>
      {:else}
      <a class="btn btn-primary" href="/auth">Sign in</a>
      {/if}
    </div>
  </div>
</div>