
import { useState } from "react";
import "./App.css";
import ProjectForm from "./components/ProjectForm";
import ProjectSearch from "./components/ProjectSearch";
import ProjectList from "./components/ProjectList";


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
      category: "JavaScript"
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

        <ProjectSearch
          search={search}
          setSearch={setSearch}
        />

        <ProjectList projects={filteredProjects} />

        <h2>Add a New Project</h2>

        <ProjectForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          category={category}
          setCategory={setCategory}
          addProject={addProject}
        />
      </main>
    </div>
  );
}

export default App;
