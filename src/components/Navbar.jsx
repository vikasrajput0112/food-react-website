import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/services">Services</Link>
      <Link to="/order">Order</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
