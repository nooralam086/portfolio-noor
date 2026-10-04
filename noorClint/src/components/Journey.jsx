import "./Journey.css";

function Journey() {
  return (
    <section id="journey" className="journey">

      <div className="journey-container">

        <div className="journey-heading">
          <p>My learning path</p>
          <h2>My Journey</h2>
        </div>

        <div className="journey-timeline">

          <div className="journey-item">

            <div className="journey-dot"></div>

            <div className="journey-card">
              <span>2023 - Present</span>

              <h3>BCA — SHEAT College of Engineering</h3>

              <p>
                Currently pursuing Bachelor of Computer Applications
                and building my foundation in programming and web development.
              </p>
            </div>

          </div>

          <div className="journey-item">

            <div className="journey-dot"></div>

            <div className="journey-card">
              <span>Learning Phase</span>

              <h3>Web Development</h3>

              <p>
                Learned HTML, CSS and JavaScript and started building
                practical web projects.
              </p>
            </div>

          </div>

          <div className="journey-item">

            <div className="journey-dot"></div>

            <div className="journey-card">
              <span>Current Focus</span>

              <h3>MERN Stack Development</h3>

              <p>
                Working with React, Node.js, Express.js and MongoDB
                while building real-world projects.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Journey;