function Project({ project }) {
    return (
      <div className="project">
        <img src={project.image} alt={project.title} className="project-image" />
        <h3>{project.title}</h3>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    );
  }
  
  export default Project;
  