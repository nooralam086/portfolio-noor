import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-heading">
          <p>Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h3>
              I'm Noor Alam, a BCA student and web developer.
            </h3>

            <p>
              -: I am currently pursuing my BCA from SHEAT College of
              Engineering, Varanasi. I enjoy turning ideas into
              functional and user-friendly websites.
            </p>

            <p>
              Over the past year, I have worked with technologies
              from the MERN stack and built different projects to
              improve my development skills.
            </p>

            <p>
            I am interested in both frontend and backend development,
            and I enjoy building complete, responsive and interactive
            web applications.
            </p>

          </div>


          <div className="about-info">

            <div className="info-card">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>BCA — Final Year</p>
              </div>
            </div>

            <div className="info-card">
            <span>💻</span>
            <div>
            <h4>Focus</h4>
            <p>Full-Stack Development</p>
            </div>
            </div>

            <div className="info-card">
              <span>🚀</span>
              <div>
                <h4>Experience</h4>
                <p>MERN Stack Projects</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;