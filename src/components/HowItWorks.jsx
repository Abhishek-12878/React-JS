function HowItWorks() {

  const steps = [
    {
      number: "01",
      icon: "📝",
      title: "Register Your Business",
      description:
        "Create your vendor profile and provide your business, service, and equipment details."
    },

    {
      number: "02",
      icon: "✓",
      title: "Get Verified",
      description:
        "Submit the required business documents and complete the MechOnSite verification process."
    },

    {
      number: "03",
      icon: "🔧",
      title: "Receive & Complete Jobs",
      description:
        "Get relevant service opportunities, accept jobs, complete the work, and grow your business."
    }
  ];


  return (
    <section
      className="how-it-works"
      id="how-it-works"
    >

      {/* Heading */}

      <div className="section-heading">

        <p className="section-label">
          HOW IT WORKS
        </p>

        <h2>
          Start Growing With
          <br />
          MechOnSite
        </h2>

        <p className="section-description">
          Join our partner network in a few simple steps
          and start connecting with equipment service
          opportunities.
        </p>

      </div>


      {/* Steps */}

      <div className="steps-container">

        {steps.map((step, index) => (

          <div
            className="step-wrapper"
            key={step.number}
          >

            <div className="step-card">

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>


            {/* Connector */}

            {index < steps.length - 1 && (
              <div className="step-connector">
                →
              </div>
            )}

          </div>

        ))}

      </div>


      {/* CTA */}

      <div className="how-it-works-cta">

        <div>
          <h3>
            Ready to become a MechOnSite partner?
          </h3>

          <p>
            Register your business and start receiving
            opportunities.
          </p>
        </div>

        <button className="primary-button">
          Become a Partner
        </button>

      </div>

    </section>
  );
}

export default HowItWorks;