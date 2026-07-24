import { createMiddleware } from '@tanstack/react-start'

// Supabase auth removed — no-op middleware
export const requireSupabaseAuth = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {
    return next()
  },
)
