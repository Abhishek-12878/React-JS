function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        MECH<span>ONSITE</span>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <a href="#why-partner">Why Partner</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#benefits">Benefits</a>
        <a href="#faq">FAQ</a>
      </div>

      {/* Actions */}
      <div className="nav-actions">
        <a href="#login" className="login-link">
          Login
        </a>

        <button className="nav-button">
          Become a Partner
        </button>
      </div>

    </nav>
  );
}

export default Navbar;