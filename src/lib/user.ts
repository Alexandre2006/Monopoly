import type { Session, SupabaseClient } from '@supabase/supabase-js'


// Getters
export function getUsername(session: Session | null): string {
    if (!session?.user) return 'Unknown User'
    return session.user.user_metadata["full_name"] ?? session.user.email ?? 'Unknown User'
}

// Setters
export async function setUsername(supabase: SupabaseClient, newUsername: string): Promise<{ success: boolean; error?: string }> {
    const { data, error } = await supabase.auth.updateUser({
        data: {
            full_name: newUsername
        }
    });

    if (error) {
        console.error('Error updating username:', error)
        return { success: false, error: error.message }
    }
    if (!data) {
        console.error('No data returned when updating username')
        return { success: false, error: 'No data returned' }
    }
    
    console.log('Username updated successfully:', data.user?.user_metadata.full_name)
    return { success: true }
}

export async function deleteAccount(supabase: SupabaseClient): Promise<{ success: boolean; error?: string }> {
    const { error } = await supabase.rpc('delete_user');

    if (error) {
        console.error('Error deleting account:', error)
        return { success: false, error: error.message }
    }

    const { error: signoutError } = await supabase.auth.signOut();

    if (signoutError) {
        console.error('Error signing out:', signoutError)
        return { success: false, error: signoutError.message }
    }

    console.log('Account deleted successfully')
    return { success: true }
}