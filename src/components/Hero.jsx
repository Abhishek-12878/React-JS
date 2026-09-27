function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-subtitle">
          SMART BUSINESS SOLUTIONS
        </p>

        <h1>
          Build Your Business
          <br />
          Smarter & Faster
        </h1>

        <p className="hero-description">
          Powerful solutions designed to help businesses
          manage their operations, improve productivity,
          and grow efficiently.
        </p>

        <div className="hero-buttons">

          <button className="primary-button">
            Get Started
          </button>

          <button className="secondary-button">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Business team"
        />

      </div>

    </section>
  );
}

export default Hero;