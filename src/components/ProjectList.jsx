
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map(function(project) {
        return (
          <ProjectCard
            key={project.id}
            project={project}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
