function Hero() {
  return (
    <section className="vendor-hero" id="home">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <p className="hero-label">
          PARTNER WITH MECHONSITE
        </p>

        <h1>
          Grow Your
          <br />
          Equipment Service Business
        </h1>

        <p className="hero-description">
          Connect with projects, receive service opportunities,
          manage your jobs, and grow your business through the
          MechOnSite partner network.
        </p>

        <div className="hero-buttons">

          <button className="primary-button">
            Become a Partner
          </button>

          <button className="secondary-button">
            Vendor Login
          </button>

        </div>

        <div className="hero-trust">

          <div className="trust-item">
            <strong>500+</strong>
            <span>Service Partners</span>
          </div>

          <div className="trust-item">
            <strong>1000+</strong>
            <span>Jobs Connected</span>
          </div>

          <div className="trust-item">
            <strong>24/7</strong>
            <span>Business Support</span>
          </div>

        </div>

      </div>


      {/* RIGHT SIDE - DASHBOARD UI */}
      <div className="hero-dashboard">

        <div className="dashboard-window">

          {/* Dashboard Header */}
          <div className="dashboard-header">

            <div>
              <p className="dashboard-small">
                VENDOR DASHBOARD
              </p>

              <h3>
                Good Morning, Partner
              </h3>
            </div>

            <div className="dashboard-profile">
              P
            </div>

          </div>


          {/* Dashboard Stats */}
          <div className="dashboard-stats">

            <div className="stat-card">

              <span>Active Jobs</span>

              <strong>24</strong>

              <small>
                +12% this month
              </small>

            </div>


            <div className="stat-card">

              <span>Requests</span>

              <strong>08</strong>

              <small>
                3 new today
              </small>

            </div>


            <div className="stat-card">

              <span>Earnings</span>

              <strong>₹45K</strong>

              <small>
                This month
              </small>

            </div>

          </div>


          {/* Recent Requests */}
          <div className="dashboard-section">

            <div className="section-top">

              <h4>
                Recent Requests
              </h4>

              <span>
                View All
              </span>

            </div>


            <div className="request-item">

              <div className="request-icon">
                EX
              </div>

              <div className="request-info">

                <strong>
                  Excavator Repair
                </strong>

                <span>
                  Noida • Today
                </span>

              </div>

              <div className="request-status pending">
                New
              </div>

            </div>


            <div className="request-item">

              <div className="request-icon">
                CR
              </div>

              <div className="request-info">

                <strong>
                  Crane Inspection
                </strong>

                <span>
                  Delhi • Tomorrow
                </span>

              </div>

              <div className="request-status accepted">
                Accepted
              </div>

            </div>


            <div className="request-item">

              <div className="request-icon">
                MT
              </div>

              <div className="request-info">

                <strong>
                  Machine Service
                </strong>

                <span>
                  Gurgaon • 2 days
                </span>

              </div>

              <div className="request-status completed">
                Done
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;