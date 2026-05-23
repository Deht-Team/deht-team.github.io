export default function Index() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      background: "#fafafa",
      minHeight: "100vh",
      padding: "2rem"
    }}>
      
      {/* Hero Section */}
      <div style={{
        background: "white",
        padding: "2.5rem",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        textAlign: "center",
        marginBottom: "3rem"
      }}>
        <h1 style={{ fontSize: "3rem", margin: 0 }}>🎮 Deht</h1>
        <p style={{ fontSize: "1.2rem", color: "#666", marginTop: "0.5rem" }}>
          A friendly game library with safe, fun games from around the world.
        </p>
        <button style={{
          marginTop: "1.5rem",
          padding: "0.8rem 1.6rem",
          borderRadius: "12px",
          border: "none",
          background: "#4f46e5",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "0.2s"
        }}>
          Browse Games
        </button>
      </div>

      {/* Categories */}
      <h2 style={{ marginBottom: "1rem" }}>Categories</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "1rem"
      }}>
        {["Action", "Obbies", "Fighting Games", "Life Simulators"].map(cat => (
          <div key={cat} style={{
            background: "white",
            padding: "1.2rem",
            borderRadius: "16px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            textAlign: "center",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.2s"
          }}>
            {cat}
          </div>
        ))}
      </div>

      {/* Featured */}
      <h2 style={{ marginTop: "3rem" }}>Featured Games</h2>
      <p style={{ color: "#777" }}>No games yet — add one to get started!</p>
    </div>
  );
}
