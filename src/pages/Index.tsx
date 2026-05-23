export default function Index() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(180deg, #fdfbff 0%, #fafafa 100%)",
      minHeight: "100vh",
      padding: "2rem",
      color: "#333"
    }}>

      {/* HERO */}
      <section style={{
        background: "white",
        padding: "3rem",
        borderRadius: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        textAlign: "center",
        marginBottom: "3rem"
      }}>
        <h1 style={{ fontSize: "3rem", margin: 0 }}>🎮 Deht</h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#666",
          marginTop: "0.8rem",
          maxWidth: "600px",
          marginInline: "auto"
        }}>
          A friendly game library with safe, fun games from around the world.
        </p>

        <button style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          borderRadius: "14px",
          border: "none",
          background: "#4f46e5",
          color: "white",
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(79,70,229,0.3)",
          transition: "0.2s"
        }}>
          Start Exploring
        </button>
      </section>

      {/* CATEGORIES */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Categories</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.2rem"
        }}>
          {["Action", "Obbies", "Fighting Games", "Life Simulators"].map(cat => (
            <div key={cat} style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "18px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              textAlign: "center",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.2s"
            }}>
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Spotlight</h2>

        <div style={{
          background: "white",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <h3 style={{ margin: 0 }}>🌟 Game of the Week</h3>
          <p style={{ color: "#777" }}>No spotlight yet — add a game to feature it!</p>
        </div>
      </section>

      {/* WHY DEHT */}
      <section style={{
        background: "white",
        padding: "2.5rem",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        marginBottom: "3rem"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Why Deht?</h2>

        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <li style={whyItem}>✨ Safe, friendly game library</li>
          <li style={whyItem}>🌍 Games from all around the world</li>
          <li style={whyItem}>🧸 Only light‑violence content allowed</li>
          <li style={whyItem}>🎨 Clean, cozy, Lovable‑style design</li>
        </ul>
      </section>

      {/* FEATURED */}
      <section>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Featured Games</h2>

        <div style={{
          background: "white",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          textAlign: "center"
        }}>
          <p style={{ color: "#777" }}>No games yet — add one to get started!</p>
        </div>
      </section>
    </div>
  );
}

const whyItem = {
  background: "#f7f7ff",
  padding: "1rem",
  borderRadius: "14px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
  fontSize: "1.1rem"
};
