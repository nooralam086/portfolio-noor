import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <div className="skills-heading">
          <p>What I work with</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>C</h3>
            <p>Programming Fundamentals</p>
          </div>

          <div className="skill-card">
            <h3>C++</h3>
            <p>Programming & OOP</p>
          </div>

          <div className="skill-card">
            <h3>HTML</h3>
            <p>Web Structure & Semantic HTML</p>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>Responsive & Modern Design</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Interactive Web Development</p>
          </div>

          <div className="skill-card">
            <h3>React.js</h3>
            <p>Component-Based UI Development</p>
          </div>

          <div className="skill-card">
            <h3>Node.js</h3>
            <p>Server-Side JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Express.js</h3>
            <p>Backend & REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>MongoDB</h3>
            <p>NoSQL Database</p>
          </div>

          {/* Git */}
          <div className="skill-card">
            <h3>Git</h3>
            <p>Version Control</p>
          </div>

          {/* GitHub */}
          <div className="skill-card">
            <h3>GitHub</h3>
            <p>Code Hosting & Collaboration</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;