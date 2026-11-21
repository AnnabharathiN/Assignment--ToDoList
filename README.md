Assignment 1 — ToDo List (TODO-list)

A React ToDo List application built with modular components, state and effect hooks, controlled inputs, props callbacks, and a separate CSS stylesheet.

Project Files

Root & Entry Files

.gitignore

Lists files and folders Git ignores—such as node_modules/, build/, and .env files—so only source and project files are tracked.

package.json

Stores project metadata, installed packages (react, react-dom, and build scripts), and project configuration.

public/index.html

The base HTML page that provides the <div id="root"></div> element where the React application mounts.

src/index.js

The entry point that imports App and mounts it into <div id="root"></div> via ReactDOM.createRoot.

Styling & Main Component

src/App.css

Contains all styles for the application—including layout, cards, form controls, filter buttons, action buttons, and the .strikethrough (text-decoration: line-through) class for completed tasks.

src/App.jsx

The central state container that:

Loads and saves the todos list in localStorage.

Defines event handlers for adding (handleAddTask), toggling completion (handleToggleTask), deleting (handleDeleteTask), and clearing (handleClearAll) tasks.

Passes state and callbacks down to child components via props.

Components (src/components/)

src/components/ToDoForm.jsx

Renders the form with a required Task Name input (with validation if left empty), an optional Description input, and an Add Task submit button that passes new tasks to App.jsx.

src/components/ToDoStats.jsx

Displays counts for Total, Active, and Completed tasks based on props from App.jsx, plus a Clear All button when tasks are present.

src/components/ToDoList.jsx

Manages filter state (all, active, completed), shows the task count, and renders a ToDoItem for each matching task.

src/components/ToDoItem.jsx

Renders an individual task with strikethrough text when completed, a Done / Redo toggle button, and a Delete button.

