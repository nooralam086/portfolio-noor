import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <p>Let's connect</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-info">

            <h3>Let's work together</h3>

            <p>
              If you have a project, opportunity, or just want to
              connect, feel free to reach out to me.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <span>📧</span>

                <div>
                  <h4>Email</h4>
                  <a href="mailto:your-email@gmail.com">
                    nooralamv814@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>📱</span>

                <div>
                  <h4>Phone</h4>
                  <a href="tel:+91XXXXXXXXXX">
                    +91 7394994080
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>📍</span>

                <div>
                  <h4>Location</h4>
                  <p>Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>

            </div>

            {/* Social Links */}

            <div className="social-links">

              <a
                href="https://github.com/nooralam086"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/noor-alam-304359430/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Right Side - Contact Form */}

          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;