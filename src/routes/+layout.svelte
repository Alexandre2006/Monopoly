<script>
  import "../app.css";
  import { goto, invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  let { data, children } = $props();
  let { session, supabase } = $derived(data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => data.subscription.unsubscribe();
  });

  function handleSignOut() {
    supabase.auth.signOut().then(() => {
      goto("/");
    });
  }
</script>

<div class="min-h-screen flex flex-col">
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      {#if session}
        <!-- Menu Options Button (Mobile) -->
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <!-- Menu Options (Mobile) -->
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
                <li><a href="/games">My Games</a></li>
        <li><a href="/new">Create Games</a></li>
        </ul>
      {/if}
    </div>

    <!-- Logo -->
    <a href="/">
      <img src="/logo.svg" alt="Logo" class="h-8" />
    </a>
  </div>

  <!-- Menu Options (Desktop) -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#if session}
        <li><a href="/games">My Games</a></li>
        <li><a href="/new">Create Game</a></li>
      {:else}
        <li>It's just shit Monopoly...</li>
      {/if}
    </ul>
  </div>

  <!-- User Actions -->
  <div class="navbar-end">
    {#if session}
      <button class="btn" onclick={handleSignOut}>Sign Out</button>
    {:else}
      <a class="btn" href="/auth">Sign in / Register</a>
    {/if}
  </div>
</div>

  <div class="bg-base-300 flex-grow flex">
    {@render children()}
  </div>
</div>