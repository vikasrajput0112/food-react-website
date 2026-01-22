export default function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Food Services</h1>
      <p style={styles.subText}>
        We provide a wide range of food services to meet your needs.
      </p>

      <div style={styles.servicesGrid}>
        <div style={styles.card}>
          <h3>🍽 Dine-In</h3>
          <p>
            Enjoy freshly prepared meals in a clean and comfortable environment.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🚚 Home Delivery</h3>
          <p>
            Fast and reliable delivery straight to your doorstep.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🎉 Catering Services</h3>
          <p>
            Perfect catering solutions for parties, events, and gatherings.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🏢 Corporate Orders</h3>
          <p>
            Customized food packages for offices and corporate meetings.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🥡 Takeaway</h3>
          <p>
            Order your favorite food and pick it up at your convenience.
          </p>
        </div>

        <div style={styles.card}>
          <h3>👨‍🍳 Custom Meals</h3>
          <p>
            Specially prepared meals based on your taste and preferences.
          </p>
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
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },
  card: {
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fff",
    textAlign: "center"
  }
};
