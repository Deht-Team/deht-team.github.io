import { useState } from "react"
import { supabase } from "../utils/supabase"

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const handleAuth = async (type: "LOGIN" | "SIGNUP") => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const { error: authError } =
        type === "LOGIN"
          ? await supabase.auth.signInWithPassword({ email, password })
          : await supabase.auth.signUp({ email, password })

      if (authError) {
        setError(authError.message)
      } else {
        setMessage(
          type === "LOGIN"
            ? "Successfully signed in!"
            : "Check your email for verification!"
        )
        setEmail("")
        setPassword("")
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      )
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
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (authError) setError(authError.message)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "GitHub login failed"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        maxWidth: "380px",
        margin: "3rem auto",
        background: "white",
        padding: "2.5rem",
        borderRadius: "22px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ margin: 0, textAlign: "center", fontSize: "1.8rem" }}>
        Welcome to Deht
      </h2>
      <p style={{ textAlign: "center", color: "#666", marginTop: "-0.5rem" }}>
        Sign in or create an account
      </p>

      {error && (
        <div
          style={{
            padding: "0.8rem",
            backgroundColor: "#fee",
            borderRadius: "10px",
            color: "#c00",
            fontSize: "0.9rem",
          }}
        >
          {error}
        </div>
      )}

      {message && (
        <div
          style={{
            padding: "0.8rem",
            backgroundColor: "#efe",
            borderRadius: "10px",
            color: "#060",
            fontSize: "0.9rem",
          }}
        >
          {message}
        </div>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "0.9rem",
          borderRadius: "14px",
          border: "1px solid #ddd",
          fontSize: "1rem",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "0.9rem",
          borderRadius: "14px",
          border: "1px solid #ddd",
          fontSize: "1rem",
        }}
      />

      <button
        disabled={loading}
        onClick={() => handleAuth("LOGIN")}
        style={{
          padding: "0.9rem",
          borderRadius: "14px",
          border: "none",
          background: "#4f46e5",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(79,70,229,0.3)",
        }}
      >
        {loading ? "Loading..." : "Sign In"}
      </button>

      <button
        disabled={loading}
        onClick={() => handleAuth("SIGNUP")}
        style={{
          padding: "0.9rem",
          borderRadius: "14px",
          border: "1px solid #ddd",
          background: "white",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>

      <hr style={{ margin: "1rem 0" }} />

      <button
        disabled={loading}
        onClick={handleGitHubLogin}
        style={{
          padding: "0.9rem",
          borderRadius: "14px",
          border: "none",
          background: "#333",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        {loading ? "Loading..." : "Continue with GitHub"}
      </button>
    </div>
  )
}
