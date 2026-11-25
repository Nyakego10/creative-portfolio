
function ProjectForm({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  addProject
}) {
  return (
    <form onSubmit={addProject}>
      <input
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Project description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Project category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
 