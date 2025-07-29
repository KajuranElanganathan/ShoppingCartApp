function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Welcome to ShopEase </h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Your one-stop shop for the best products online.
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        alt="Shopping Cart"
        width="120"
        style={{ margin: "2rem 0" }}
      />
      <div>
        <a
          href="/shop"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            padding: "0.8em 2em",
            background: "#ffb347",
            color: "#23272f",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "background 0.2s"
          }}
        >
          Start Shopping
        </a>
      </div>
    </div>
  );

}

export default Home;