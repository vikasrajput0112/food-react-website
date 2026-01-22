export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.subText}>
        We’d love to hear from you! Reach out to us using the details below.
      </p>

      <div style={styles.card}>
        <div style={styles.section}>
          <h3>📍 Address</h3>
          <p>
            Food React Restaurant<br />
            Sector 62, Noida<br />
            Uttar Pradesh, India
          </p>
        </div>

        <div style={styles.section}>
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div style={styles.section}>
          <h3>📧 Email</h3>
          <p>support@foodreact.com</p>
        </div>
      </div>

      <form style={styles.form}>
        <h2>Send Us a Message</h2>

        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" rows="4" style={styles.textarea}></textarea>

        <button style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
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
  card: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  },
  section: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fafafa"
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
  textarea: {
    padding: "10px",
    fontSize: "16px"
  },
  button: {
    padding: "12px",
    background: "#d32f2f",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }
};
