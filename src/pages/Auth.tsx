import { useState } from 'react'
import { supabase } from '../utils/supabase'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = async (type: 'LOGIN' | 'SIGNUP') => {
    setLoading(true)
    const { error } = type === 'LOGIN' 
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password })

    if (error) alert(error.message)
    else alert(type === 'LOGIN' ? 'Success!' : 'Check email!')
    setLoading(false)
  }

  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) alert(error.message)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading} onClick={() => handleAuth('LOGIN')}>
        Sign In
      </button>
      <button disabled={loading} onClick={() => handleAuth('SIGNUP')}>
        Sign Up
      </button>
      
      <hr />
      
      <button onClick={handleGitHubLogin}>
        Continue with GitHub
      </button>
    </div>
  )
}
