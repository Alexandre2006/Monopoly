<script lang="ts">
    import { page } from "$app/state";
</script>

<div class="flex-1 flex items-center justify-center p-4">
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img src="/error.jpg" alt="Bankruptcy Chance Card" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {page.error?.message ?? "An error occurred"}
                <div class="badge badge-secondary">{page.status}</div>
            </h2>
            <p>
                It's time to <strong>head home</strong>, Monopoly man. Or, you
                could <strong>try again?</strong>
            </p>
            <p class="text-sm text-gray-500">
                If this error persists, please contact support or try again
                later.
            </p>
            <div class="card-actions justify-end">
                <a class="btn btn-primary" href="/">Head Home</a>
                <button
                    class="btn btn-tertiary"
                    onclick={() => location.reload()}>Refresh the Page</button
                >
            </div>
        </div>
    </div>
</div>
