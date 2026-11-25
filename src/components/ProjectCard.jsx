
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Category: {project.category}</p>
    </div>
  );
}

export default ProjectCard;
