<script>
  import "../app.css";
  import { goto, invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import { deleteAccount, getUsername } from "$lib/user";
  import MaterialSymbolsArrowDownwardRounded from 'virtual:icons/material-symbols/arrow-downward-rounded';
  import MaterialSymbolsAdd2Rounded from 'virtual:icons/material-symbols/add-2-rounded';
  import MaterialSymbolsFormatListBulletedRounded from 'virtual:icons/material-symbols/format-list-bulleted-rounded';
  import MaterialSymbolsSettings from 'virtual:icons/material-symbols/settings';
  import MaterialSymbolsLogoutRounded from 'virtual:icons/material-symbols/logout-rounded';

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
      goto("/auth");
    });
  }
</script>

<div class="min-h-screen flex flex-col">
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <!-- Logo -->
       {#if session}
      <a href="/games" class="btn btn-ghost">
        <img src="/logo.svg" alt="Logo" class="h-8" />
      </a>
      {:else}
      <a href="/">
        <img src="/logo.svg" alt="Logo" class="h-8" />
      </a>
      {/if}
    </div>

    <!-- User Actions -->
    <div class="navbar-end">
      {#if session}
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1">
            {#if session.user.user_metadata["avatar_url"]}
            <div class="avatar">
              <div class="w-8 rounded-full">
                <img src={session.user.user_metadata["avatar_url"]} alt="User Avatar" />
              </div>
            </div>
            {:else}
            <div class="avatar avatar-placeholder">
              <div class="bg-neutral text-neutral-content w-8 rounded-full">
                <span class="text-l">{getUsername(session).substring(0,2).toUpperCase()}</span>
              </div>
            </div>
            {/if}
            <span>{getUsername(session)}</span>
            <MaterialSymbolsArrowDownwardRounded class="w-5 h-5 ml-2" />
          </div>
          <ul
            tabindex="-1"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li><a href="/games">
              <MaterialSymbolsFormatListBulletedRounded class="w-5 h-5" />
              My Games
            </a></li>
            <li><a href="/new">
              <MaterialSymbolsAdd2Rounded class="w-5 h-5" />
              Create a Game
            </a></li>
            <li><a href="/settings">
              <MaterialSymbolsSettings class="w-5 h-5" />
              Settings
            </a></li>
            <li><button type="button" onclick={handleSignOut} class="text-red-400">
              <MaterialSymbolsLogoutRounded class="w-5 h-5 rotate-180" />
              Sign Out
            </button></li>
          </ul>
        </div>
      {:else}
        <a class="btn" href="/auth">Sign in / Register</a>
      {/if}
    </div>
  </div>

  <div class="bg-base-300 flex-grow flex">
    {@render children()}
  </div>
</div>
