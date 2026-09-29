function VendorFeatures() {

  const features = [
    {
      icon: "🔧",
      title: "Service Jobs",
      description:
        "Receive and manage equipment repair and field service opportunities."
    },

    {
      icon: "📋",
      title: "Job Requests",
      description:
        "View new service requests, respond to opportunities, and track job status."
    },

    {
      icon: "🚜",
      title: "Equipment",
      description:
        "Manage your equipment, machinery details, availability, and service capabilities."
    },

    {
      icon: "👨‍🔧",
      title: "Mechanic Management",
      description:
        "Manage technicians, skills, assignments, and availability from one place."
    },

    {
      icon: "📅",
      title: "Availability",
      description:
        "Control your service availability and keep your schedule organized."
    },

    {
      icon: "📊",
      title: "Business Analytics",
      description:
        "Track jobs, earnings, performance, and business activity."
    }
  ];


  return (
    <section className="vendor-features" id="benefits">

      {/* Section Heading */}

      <div className="section-heading">

        <p className="section-label">
          POWERFUL VENDOR TOOLS
        </p>

        <h2>
          Everything You Need to
          <br />
          Manage Your Business
        </h2>

        <p className="section-description">
          Manage service opportunities, equipment, mechanics,
          availability, and business performance from one
          powerful platform.
        </p>

      </div>


      {/* Feature Cards */}

      <div className="features-grid">

        {features.map((feature) => (

          <article
            className="feature-card"
            key={feature.title}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.description}
            </p>

            <a href="#how-it-works">
              Learn More →
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}


export default VendorFeatures;