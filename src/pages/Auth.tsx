import { useState } from 'react'
import { supabase } from '../utils/supabase'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const handleAuth = async (type: 'LOGIN' | 'SIGNUP') => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const { error: authError } = type === 'LOGIN' 
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password })

      if (authError) {
        setError(authError.message)
      } else {
        setMessage(type === 'LOGIN' ? 'Successfully signed in!' : 'Check your email for verification!')
        setEmail('')
        setPassword('')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGitHubLogin = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (authError) {
        setError(authError.message)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'GitHub login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      {error && (
        <div style={{ padding: '10px', backgroundColor: '#fee', borderRadius: '4px', color: '#c00' }}>
          {error}
        </div>
      )}
      {message && (
        <div style={{ padding: '10px', backgroundColor: '#efe', borderRadius: '4px', color: '#060' }}>
          {message}
        </div>
      )}
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      <button disabled={loading} onClick={() => handleAuth('LOGIN')}>
        {loading ? 'Loading...' : 'Sign In'}
      </button>
      <button disabled={loading} onClick={() => handleAuth('SIGNUP')}>
        {loading ? 'Loading...' : 'Sign Up'}
      </button>
      
      <hr />
      
      <button onClick={handleGitHubLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Continue with GitHub'}
      </button>
    </div>
  )
}
