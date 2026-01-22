export default function Menu() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Menu</h1>
      <p style={styles.subText}>
        Delicious food prepared with love and fresh ingredients.
      </p>

      <div style={styles.menuGrid}>
        <div style={styles.card}>
          <h3>🍕 Margherita Pizza</h3>
          <p>Classic cheese pizza with fresh tomatoes</p>
          <p style={styles.price}>₹299</p>
        </div>

        <div style={styles.card}>
          <h3>🍔 Veg Burger</h3>
          <p>Crunchy veggie patty with fresh lettuce</p>
          <p style={styles.price}>₹149</p>
        </div>

        <div style={styles.card}>
          <h3>🍝 White Sauce Pasta</h3>
          <p>Creamy pasta with herbs and cheese</p>
          <p style={styles.price}>₹249</p>
        </div>

        <div style={styles.card}>
          <h3>🌮 Tacos</h3>
          <p>Mexican-style tacos with spicy filling</p>
          <p style={styles.price}>₹199</p>
        </div>

        <div style={styles.card}>
          <h3>🥗 Caesar Salad</h3>
          <p>Fresh salad with dressing and croutons</p>
          <p style={styles.price}>₹179</p>
        </div>

        <div style={styles.card}>
          <h3>🍨 Ice Cream Sundae</h3>
          <p>Vanilla ice cream with chocolate sauce</p>
          <p style={styles.price}>₹129</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "1100px",
    margin: "auto"
  },
  heading: {
    textAlign: "center",
    color: "#d32f2f"
  },
  subText: {
    textAlign: "center",
    marginBottom: "30px"
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fff",
    textAlign: "center"
  },
  price: {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#2e7d32"
  }
};
