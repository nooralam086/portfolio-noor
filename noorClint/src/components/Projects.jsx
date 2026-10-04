import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        <div className="projects-heading">
          <p>What I have built</p>
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Notes Gallery</h3>

            <p>
              A web-based notes management project where users can
              organize and access study notes easily.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="#" className="project-link">
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Grocery Management System</h3>

            <p>
              A grocery management project designed to manage products,
              users and shopping-related activities.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="#" className="project-link">
              View Project
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;