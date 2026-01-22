export default function Order() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Order Online</h1>
      <p style={styles.subText}>
        Choose your favorite food and place an order easily.
      </p>

      <div style={styles.menuGrid}>
        <div style={styles.card}>
          <h3>🍕 Margherita Pizza</h3>
          <p>Classic cheese pizza with fresh tomatoes</p>
          <p style={styles.price}>₹299</p>
          <button style={styles.button}>Order Now</button>
        </div>

        <div style={styles.card}>
          <h3>🍔 Veg Burger</h3>
          <p>Loaded veggie burger with crispy patty</p>
          <p style={styles.price}>₹149</p>
          <button style={styles.button}>Order Now</button>
        </div>

        <div style={styles.card}>
          <h3>🍝 White Sauce Pasta</h3>
          <p>Creamy pasta with herbs and cheese</p>
          <p style={styles.price}>₹249</p>
          <button style={styles.button}>Order Now</button>
        </div>
      </div>

      <form style={styles.form}>
        <h2>Customer Details</h2>

        <input type="text" placeholder="Full Name" style={styles.input} />
        <input type="text" placeholder="Mobile Number" style={styles.input} />
        <input type="text" placeholder="Delivery Address" style={styles.input} />

        <button style={styles.submitButton}>Place Order</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "1000px",
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
    gap: "20px",
    marginBottom: "40px"
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
    margin: "10px 0"
  },
  button: {
    background: "#d32f2f",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    fontSize: "16px"
  },
  submitButton: {
    background: "green",
    color: "white",
    border: "none",
    padding: "12px",
    cursor: "pointer",
    fontSize: "16px"
  }
};
