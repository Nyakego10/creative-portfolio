
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "My First Website",
      description: "A simple website built using HTML and CSS.",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Weather App",
      description: "An application that displays weather information.",
      category: "JavaScript"
    },
    {
      id: 3,
      title: "Dictionary App",
      description: "An app that allows users to search for word meanings.",
      category: "Javascript~/dev/mod3/creative-portfolioclea"
    }
  ]);

  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function addProject(event) {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
      category: category
    };

    setProjects([...projects, newProject]);

    setTitle("");
    setDescription("");
    setCategory("");
  }

  const filteredProjects = projects.filter(function(project) {
    return project.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <header>
        <h1>My Creative Portfolio</h1>
        <p>Welcome to my portfolio. Here are some of my projects.</p>
      </header>

      <main>
        <h2>My Projects</h2>

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div>
          {filteredProjects.map(function(project) {
            return (
              <div key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Category: {project.category}</p>
              </div>
            );
          })}
        </div>

        <h2>Add a New Project</h2>

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
      </main>
    </div>
  );
}

export default App;
