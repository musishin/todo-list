let todoList = [];

// Factory function for creating todo items.
const Todo = (title, description, dueDate, priority, project) => {
    let complete = false;
    const getTitle = () => title;
    const getDesc = () => description;
    const getDue = () => dueDate;
    const getPriority = () => priority;
    const getProject = () => project;
    const isComplete = () => complete;

    // add setters as well.

    return { getTitle, getDesc, getDue, getPriority, getProject, isComplete }
};

// Creates todo item and pushes it into todoList array.
const createTodo = (title, description, dueDate, priority, project) => {
    let newTodo = Todo(title, description, dueDate, priority, project);
    todoList.push(newTodo);
};

export { todoList, createTodo };