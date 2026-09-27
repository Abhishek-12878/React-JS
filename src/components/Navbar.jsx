function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        MyCompany
      </div>

      <div className="nav-links">

        <a href="#home">Home</a>

        <a href="#services">Services</a>

        <a href="#about">About</a>

        <a href="#contact">Contact</a>

      </div>

      <button className="nav-button">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;