# Creative Portfolio

A responsive single-page portfolio application built with React. It allows visitors to view projects, search through projects, and add new projects using a form.

## Features

- Landing page with sample projects.
- Project cards with title, category, description and image.
- Search by project title, description or category.
- Form for adding new projects without refreshing the page.
- Responsive layout for desktop, tablet and mobile screens.
- Unit tests using Vitest and React Testing Library.

## Requirements

- Node.js and npm
- A code editor such as Visual Studio Code
- A web browser

## Setup

1. Download or clone this repository.
2. Open the project folder in your terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address printed in the terminal, usually `http://localhost:5173`.

## Running the tests

Run the tests once:

```bash
npm run test:run
```

Run the tests in watch mode:

```bash
npm test
```

## How to use the application

- Scroll to the projects section to view the sample projects.
- Enter a word in the search box to filter the projects.
- Scroll to the Add a project section.
- Enter a project title, category and description.
- Optionally add an image URL.
- Select Add project. The new project appears in the project list.

## Project structure

```text
src/
  App.jsx          Main application and React components
  App.css          Portfolio layout and component styling
  index.css        Global styles
  main.jsx         React entry point
  App.test.jsx     Component and interaction tests
  test/
    setup.js       Testing Library setup
```

## State management

The application uses React's `useState` hook.

- `projects` stores the project list.
- `searchTerm` stores the search text.
- `formData` stores the values entered into the new-project form.

The project list is stored in React state, so a newly added project appears immediately. This beginner version does not save projects permanently: refreshing the browser returns the list to its original sample projects.

## Known limitations

- Projects are stored in browser memory only; there is no database or permanent storage.
- Images must be supplied using a publicly accessible image URL.
- The sample project images require an internet connection.

## Technologies

- React
- JavaScript
- CSS
- Vite
- Vitest
- React Testing Library
