import { Link } from "react-router-dom";
import { Project } from "../../interfaces/project";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-center bg-secondary-color rounded-xl overflow-hidden drop-shadow-none hover:drop-shadow-[0_8px_8px_rgba(255,229,96,0.25)] transition-all">
      <Link
        to={`/project/${project.id}`}
        className="w-full h-[30vh] overflow-hidden"
      >
        <img
          src={project.images.smallImage}
          alt="Project"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="m-4 flex flex-col gap-4">
        <div>
          <h3>{project.title}</h3>
          <p className="text-clamp">{project.description}</p>
        </div>
        <div>
          <h4>Technologies</h4>
          <p>{project.skills}</p>
        </div>
        <div className="flex gap-4">
          {project.gitHubLink && (
            <Link
              to={project.gitHubLink}
              target="blank"
              className="secondary-button"
            >
              github
            </Link>
          )}
          {project.demoLink && (
            <Link
              to={project.demoLink}
              target="blank"
              className="secondary-button"
            >
              demo
            </Link>
          )}
          {project.videoLink && (
            <Link
              to={project.videoLink}
              target="blank"
              className="secondary-button"
            >
              video preview
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
