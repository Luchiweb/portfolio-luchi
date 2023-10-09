import { projects } from "../../helpers/projects";
import ProjectCard from "./ProjectCard";
import "./ProjectCard.css";
function Projects() {
  const firstThreeProjects = projects.slice(0, 3);
  return (
    <div className="container my-8 flex-col gap-10">
      <h2>Projects</h2>
      <div className="grid grid-cols-3 gap-6">
        {firstThreeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <button className="yellow-button">see more</button>
    </div>
  );
}

export default Projects;
