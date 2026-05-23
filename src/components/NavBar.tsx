export default function NavBar() {
  return (
    <nav
      style={{
        background: "white",
        padding: "1.2rem 2rem",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem"
      }}
    >
      <h1 style={{ fontSize: "1.6rem", margin: 0 }}>🎮 Deht</h1>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button style={navBtn}>Home</button>
        <button style={navBtn}>Games</button>
        <button style={navBtn}>Library</button>
        <button style={navBtnPrimary}>Sign In</button>
      </div>
    </nav>
  );
}

const navBtn = {
  padding: "0.6rem 1rem",
  borderRadius: "12px",
  border: "1px solid #eee",
  background: "white",
  cursor: "pointer",
  transition: "0.2s"
};

const navBtnPrimary = {
  padding: "0.6rem 1rem",
  borderRadius: "12px",
  border: "none",
  background: "#4f46e5",
  color: "white",
  cursor: "pointer",
  transition: "0.2s"
};