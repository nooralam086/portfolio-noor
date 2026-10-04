import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-content">

          <div className="footer-about">
            <h3>Noor Alam</h3>
            <p>
              BCA Student & MERN Stack Developer
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>

            <a
              href="https://github.com/wrnth092"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Noor Alam. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;