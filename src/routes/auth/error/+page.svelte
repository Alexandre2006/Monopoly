<script lang="ts">
    import { page } from "$app/state";

    // Get name, status, and error message from search params
    const name = decodeURIComponent(page.url.searchParams.get("name") || "Unknown Auth Error");
    const status = decodeURIComponent(page.url.searchParams.get("code") || "500");
    const errorMessage = decodeURIComponent(page.url.searchParams.get("message") || "An unexpected error occurred during authentication.");
</script>

<div class="flex-1 flex items-center justify-center p-4">
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img src="/error.jpg" alt="Bankruptcy Chance Card" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {name}
                <div class="badge badge-secondary">{status}</div>
            </h2>
            <p>
                {errorMessage}
            </p>
            <p class="text-sm text-gray-500">
                If this error persists, please contact support or try again
                later.
            </p>
            <div class="card-actions justify-end">
                <a class="btn btn-primary" href="/">Head Home</a>
                <a
                    class="btn btn-tertiary"
                    href="/auth">Back to Login</a
                >
            </div>
        </div>
    </div>
</div>
