function Services() {
  const services = [
    {
      icon: "⚙️",
      title: "Equipment Management",
      description:
        "Manage your equipment and machinery efficiently from one centralized platform.",
    },
    {
      icon: "🔧",
      title: "Inspection & Repair",
      description:
        "Keep your equipment running efficiently with inspection and repair services.",
    },
    {
      icon: "👷",
      title: "Hire Mechanics",
      description:
        "Find skilled mechanics and technical professionals for your projects.",
    },
    {
      icon: "📊",
      title: "Business Analytics",
      description:
        "Monitor performance and get useful insights to make better business decisions.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="section-heading">

        <p className="section-label">
          OUR SERVICES
        </p>

        <h2>
          Everything You Need
          <br />
          To Manage Your Business
        </h2>

        <p className="section-description">
          Powerful solutions designed to make your
          business operations simpler and more efficient.
        </p>

      </div>

      <div className="services-container">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

            <a href="#contact">
              Learn More →
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;