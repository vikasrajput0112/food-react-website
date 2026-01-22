export default function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Welcome to Our Food Industry Website
        </h1>
        <p style={styles.subtitle}>
          Fresh • Hygienic • Delicious • Delivered with Love
        </p>

        <div style={styles.buttonGroup}>
          <a href="/menu" style={styles.primaryBtn}>View Menu</a>
          <a href="/order" style={styles.secondaryBtn}>Order Online</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>🍽 Quality Food</h3>
          <p>We use fresh ingredients and maintain top hygiene standards.</p>
        </div>

        <div style={styles.card}>
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and reliable delivery at your doorstep.</p>
        </div>

        <div style={styles.card}>
          <h3>⭐ Trusted Service</h3>
          <p>Loved by hundreds of happy customers.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Hungry? Order Now!</h2>
        <p>Explore our menu and enjoy delicious food today.</p>
        <a href="/order" style={styles.primaryBtn}>Place Order</a>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif"
  },
  hero: {
    background: "#d32f2f",
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center"
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  primaryBtn: {
    background: "#fff",
    color: "#d32f2f",
    padding: "12px 22px",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px"
  },
  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    padding: "12px 22px",
    textDecoration: "none",
    border: "2px solid #fff",
    borderRadius: "5px"
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "50px 20px",
    maxWidth: "1100px",
    margin: "auto"
  },
  card: {
    border: "1px solid #ddd",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    background: "#fff"
  },
  cta: {
    background: "#f4f4f4",
    padding: "60px 20px",
    textAlign: "center"
  }
};
