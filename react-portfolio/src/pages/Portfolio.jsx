import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: "Project 1: Finance Tracker",
      image: "../images/project1.png",
      deployedLink: "https://0xnulllight.github.io/Project_1-Coding_BC/",
      githubLink: "https://github.com/0xNullLight/Project_1-Coding_BC"
    },
    {
      title: "Project 2: Ramen-Reel",
      image: "/images/project2.png",
      deployedLink: "https://github.com/Alek901/Ramen-Reel",
      githubLink: "https://github.com/Alek901/Ramen-Reel"
    },
    {
      title: "Project 3: Crave Wave",
      image: "/images/project3.png",
      deployedLink: "https://github.com/Alek901/Crave-Wave",
      githubLink: "https://github.com/Alek901/Crave-Wave"
    },
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
