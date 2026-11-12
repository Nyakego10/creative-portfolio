
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Creative Portfolio App", () => {
  it("shows the landing page and sample projects", () => {
    render(<App />);

    expect(screen.getByText("My Creative Portfolio")).toBeInTheDocument();
    expect(screen.getByText("My First Website")).toBeInTheDocument();
    expect(screen.getByText("Weather App")).toBeInTheDocument();
    expect(screen.getByText("Dictionary App")).toBeInTheDocument();
  });

  it("filters projects when a user searches", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText("Search projects...");

    fireEvent.change(searchInput, {
      target: { value: "Weather" }
    });

    expect(screen.getByText("Weather App")).toBeInTheDocument();
    expect(screen.queryByText("My First Website")).not.toBeInTheDocument();
  });

  it("adds a new project when the form is submitted", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Project title"), {
      target: { value: "Student Portfolio" }
    });

    fireEvent.change(screen.getByPlaceholderText("Project description"), {
      target: { value: "My first React portfolio" }
    });

    fireEvent.change(screen.getByPlaceholderText("Project category"), {
      target: { value: "React" }
    });

    fireEvent.click(screen.getByText("Add Project"));

    expect(screen.getByText("Student Portfolio")).toBeInTheDocument();
  });
});
