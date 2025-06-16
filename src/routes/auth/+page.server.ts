import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

// import { COOLIFY_URL } from '$env/static/public'

const getURL = () => {
  let url =
    // COOLIFY_URL ??
    'http://localhost:5173/';

  url = url.startsWith('http') ? url : `https://${url}`;
  url = url.endsWith('/') ? url : `${url}/`;
  url += 'auth/callback';

  return url;
};

export const actions: Actions = {
  signup: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: getURL() } })
    if (error) {
      console.error(error)
      redirect(303, `/auth/error?message=${encodeURIComponent(error.message)}&code=${encodeURIComponent(error.status || '500')}&name=${encodeURIComponent(error.name || 'Unknown Auth Error')}`)
    } else {
      redirect(303, '/auth/confirm')
    }
  },
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error)
      redirect(303, `/auth/error?message=${encodeURIComponent(error.message)}&code=${encodeURIComponent(error.status || '500')}&name=${encodeURIComponent(error.name || 'Unknown Auth Error')}`)
    } else {
      redirect(303, '/private')
    }
  },
  google: async ({ locals: { supabase } }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getURL()
      }
    })
    if (error) {
      console.error(error)
      redirect(303, `/auth/error?message=${encodeURIComponent(error.message)}&code=${encodeURIComponent(error.status || '500')}&name=${encodeURIComponent(error.name || 'Unknown Auth Error')}`)
    }

    if (data.url) redirect(303, data.url)

  },
  github: async ({ locals: { supabase } }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: getURL()
      }
    })
    if (error) {
      console.error(error)
      redirect(303, `/auth/error?message=${encodeURIComponent(error.message)}&code=${encodeURIComponent(error.status || '500')}&name=${encodeURIComponent(error.name || 'Unknown Auth Error')}`)
    }

    if (data.url) redirect(303, data.url)
  }
}