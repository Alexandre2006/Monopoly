<div class="flex-1 flex items-center justify-center p-4">
  <div class="card bg-base-100 w-96 shadow-sm">
    <!-- Title -->
    <div class="card-body">
      <h2 class="card-title">Welcome to Monopoly!</h2>

      <!-- Email / Password -->
      <form method="POST" action="?/login">
        <label class="input validator w-full mb-2">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            name="email"
            type="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div class="validator-hint hidden">Enter valid email address</div>
        <label class="input validator w-full">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
              ></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <p class="validator-hint hidden">
          Must be more than 8 characters, including
          <br />At least one number <br />At least one lowercase letter <br />At
          least one uppercase letter
        </p>

        <!-- Buttons -->
        <div class="card-actions mt-2 grid grid-cols-2 gap-2 w-full">
          <button class="btn btn-primary w-full">Login</button>
          <button class="btn btn-secondary w-full" formaction="?/signup"
            >Sign up</button
          >
        </div>
      </form>

      <!-- Divider -->
      <div class="divider">or</div>

      <!-- Social Login -->
      <div class="social-login">
        <form method="POST" action="?/google">
          <button
            class="inline-flex items-center justify-center w-full mb-2 px-4 py-2 border border-[#747775] rounded-md bg-white hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <svg
              class="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span
              class="font-['Roboto'] font-medium text-[14px] leading-[20px] text-[#1f1f1f]"
            >
              Sign in with Google
            </span></button
          >
        </form>
        <form method="POST" action="?/github">
          <button
            class="inline-flex items-center justify-center w-full px-4 py-2 border border-[#747775] rounded-md bg-[#24292F] hover:bg-[#24292F]/50 cursor-pointer transition-all"
          >
            <svg
              class="h-5 w-5 mr-2"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            <span
              class="font-['Roboto'] font-medium text-[14px] leading-[20px] text-white"
            >
              Sign in with GitHub
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
