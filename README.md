# Todo List App

A simple React + Vite todo list application styled with the provided `src/index.css`.

## What it does

- Add a new task using the input field and `Add Task` button
- Mark tasks complete using the checkbox
- Delete tasks with the trash button
- Show an empty state message when no tasks exist

## Project structure

- `src/App.jsx` - main app state and logic for adding, deleting, and toggling todos
- `src/Components/TodoInput.jsx` - text input and add button UI
- `src/Components/Todolist.jsx` - renders the list of todo cards
- `src/Components/Todocard.jsx` - individual todo item UI and actions
- `src/index.css` - shared styling used by the app layout and cards

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - build the production bundle
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint over the project

## How to use

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal to use the todo list app.

## Styling

The app uses the existing `src/index.css` file for:

- a light blue background and centered layout
- rounded input and button styles
- white todo cards with padding and spacing
- hover states for buttons

## Notes

- The todo items are stored in React state and are not persisted across refreshes.
- Pressing `Enter` in the input field also adds the task.
