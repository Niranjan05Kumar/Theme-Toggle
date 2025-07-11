# Theme Toggle Examples

This repository showcases different approaches to implementing a light/dark mode theme toggle in a modern React application. Each sub-directory contains a standalone project demonstrating a specific technology stack for theming.

## Projects

Explore the different implementations below:

--------------------------------------------
### 1. [React + Vite](./React/)

A straightforward implementation using React and Vite. Theming is managed through standard CSS custom properties (variables).

- **Technology:** React, Vite, CSS Variables
- **Focus:** Demonstrates a minimal, framework-agnostic setup for theme switching.
- **[Go to project &raquo;](./React/README.md)**

--------------------------------------------
### 2. [React + Tailwind CSS](./React_tailwind/)

A more advanced implementation leveraging the power of Tailwind CSS for utility-first styling and its built-in `dark` variant for theming.

- **Technology:** React, Vite, Tailwind CSS
- **Focus:** Illustrates best practices for theming with a popular CSS framework.
- **[Go to project &raquo;](./React_tailwind/README.md)**


## Customization

- **Theme Colors:** Edit `src/index.css` to adjust color variables for light and dark modes.
- **Components:** Extend or modify components in `src/components/` as needed.

## How to Run

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd React_tailwind
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
