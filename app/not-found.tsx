export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        fontFamily: "Inter, sans-serif",
        background: "#f7f9fb",
        color: "#1c3a5c",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "520px" }}>
        <p style={{ margin: 0, color: "#2d7a2d", fontWeight: 700, letterSpacing: "0.12em" }}>404</p>
        <h1 style={{ marginBottom: "12px" }}>Stránka sa nenašla</h1>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          Požadovaná stránka na webe Patros Roll s.r.o. momentálne neexistuje alebo bola presunutá.
        </p>
      </div>
    </main>
  )
}
