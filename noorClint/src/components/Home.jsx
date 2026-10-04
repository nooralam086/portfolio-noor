import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-inner">

        {/* LEFT SIDE */}
        <div className="home-content">

          <p className="intro">
            Hello, I'm
          </p>

          <h1>
            Noor Alam
          </h1>

          <h2>
            BCA Student & MERN Stack Developer
          </h2>

          <p className="home-description">
            I enjoy turning ideas into functional and user-friendly web
            experiences. I love learning new technologies and building
            real-world projects.
          </p>

          <div className="home-buttons">

            <a href="#projects">
              View Projects
            </a>

            <a href="#contact">
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE PHOTO */}
        <div className="home-photo">

          <img
            src="/alamnoor.jpeg"
            alt="Noor Alam"
          />

        </div>

      </div>

    </section>
  );
}

export default Home;