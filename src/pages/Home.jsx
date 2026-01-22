export default function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Welcome to Food React Website
        </h1>
        <p style={styles.heroSubtitle}>
          Fresh • Delicious • Delivered to Your Doorstep
        </p>

        <div style={styles.heroButtons}>
          <a href="/menu" style={styles.primaryButton}>View Menu</a>
          <a href="/order" style={styles.secondaryButton}>Order Now</a>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.features}>
        <div style={styles.card}>
          <h3>🍽 Fresh Food</h3>
          <p>Prepared daily using fresh and quality ingredients.</p>
        </div>

        <div style={styles.card}>
          <h3>🚀 Fast Delivery</h3>
          <p>Hot and tasty food delivered quickly to your home.</p>
        </div>

        <div style={styles.card}>
          <h3>⭐ Best Quality</h3>
          <p>Trusted by hundreds of happy customers every day.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div style={styles.cta}>
        <h2>Hungry? Let’s Get Started!</h2>
        <p>Order your favorite food now and enjoy delicious meals.</p>
        <a href="/order" style={styles.primaryButton}>Place Your Order</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif"
  },
  hero: {
    background: "#d32f2f",
    color: "white",
    padding: "80px 20px",
    textAlign: "center"
  },
  heroTitle: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  heroSubtitle: {
    fontSize: "18px",
    marginBottom: "30px"
  },
  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  primaryButton: {
    background: "white",
    color: "#d32f2f",
    padding: "12px 20px",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px"
  },
  secondaryButton: {
    background: "transparent",
    color: "white",
    padding: "12px 20px",
    textDecoration: "none",
    border: "2px solid white",
    borderRadius: "5px"
  },
  features: {
    padding: "50px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "auto"
  },
  card: {
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    background: "#fff"
  },
  cta: {
    background: "#f5f5f5",
    padding: "60px 20px",
    textAlign: "center",
    marginTop: "40px"
  }
};
