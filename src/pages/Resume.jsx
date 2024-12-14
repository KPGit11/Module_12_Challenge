function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="../assets/resume.pdf" download className="download-btn">
        Download Resume
      </a>
      
      <div className="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML5 & CSS3</li>
          <li>Git</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
