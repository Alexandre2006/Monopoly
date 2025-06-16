<script lang="ts">
  let { data } = $props();
  let { supabase } = $derived(data);  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import LineMdLoadingLoop from '~icons/line-md/loading-loop';

    onMount(async () => {
    // Get error details from URL if present
    const params = new URLSearchParams(window.location.hash.substring(1));
    const error = params.get('error_description');
    const provider = params.get('provider');

    if (error) {
      // Redirect to error page with error details
      goto(`/auth/error?message=${encodeURIComponent(error)}&code=400&name=${encodeURIComponent(`${provider || 'OAuth'} Error`)}`);
      return;
    }

    // Handle successful authentication
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      goto(`/auth/error?message=${encodeURIComponent(sessionError.message)}&code=${sessionError.status || 500}&name=${encodeURIComponent(sessionError.name || 'Session Error')}`);
      return;
    }

    if (session) {
      goto('/games');
    } else {
      goto('/auth');
    }
  });
</script>

<div class="flex-1 flex items-center justify-center p-4">
    <div class="card bg-base-100 w-96 shadow-sm">
        <div class="card-body">
            <h1 class="card-title text-2xl font-bold justify-center text-center">
                Signing you in...
            </h1>
            <div class="flex items-center justify-center">
            <LineMdLoadingLoop class="w-12 h-12 text-primary" />
            </div>
        </div>
    </div>
</div>