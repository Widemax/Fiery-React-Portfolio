import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Dynamic Calculator",
      image: "../src/assets/DynamicCalc.PNG",
      deployedLink: "https://bikramsingh1989.github.io/ResponsiveCalc/",
      githubLink: "https://github.com/BikramSingh1989/ResponsiveCalc",
    },
    {
      title: "Dynamic Vehicle Application",
      image: "../src/assets/DynamicVehicle.PNG",
      deployedLink: "https://youtu.be/snRLBaPvylo",
      githubLink: "https://github.com/Widemax/Dynamic-Vehicle-Application",
    },
    {
      title: "Dynamic Database",
      image: "../src/assets/DynamicDatabase.PNG",
      deployedLink: "https://www.youtube.com/watch?v=BU8XI_ZEZ74",
      githubLink: "https://github.com/Widemax/DynamicDatabase",
    },
    {
      title: "Vital Candidate Search",
      image: "../src/assets/VitalCandidateSearch.PNG",
      deployedLink: "https://youtu.be/snRLBaPvylo", // place holder for future project
      githubLink: "https://github.com/Widemax/Dynamic-Vehicle-Application", // place holder for future project
    },
    {
      title: "Go-Go Kanban Board",
      image: "../src/assets/KanbanBoard.PNG",
      deployedLink: "https://bikramsingh1989.github.io/ResponsiveCalc/", // place holder for future project
      githubLink: "https://github.com/BikramSingh1989/ResponsiveCalc", // place holder for future project
    },
    {
      title: "Fiery React",
      image: "../src/assets/FieryReact.PNG",
      deployedLink: "https://youtu.be/snRLBaPvylo", // place holder for future project
      githubLink: "https://github.com/Widemax/Dynamic-Vehicle-Application", // place holder for future project
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
