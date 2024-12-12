import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "/project1.jpg",
      deployedLink: "https://project1.com",
      githubLink: "https://github.com/username/project1"
    },
    // Add 5 more projects
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
