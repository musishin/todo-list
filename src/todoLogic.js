let todoList = [];

// Factory function for creating todo items.
const Todo = (title, description, dueDate, priority) => {
    let complete = false;

    const getTitle = () => title;
    const getDesc = () => description;
    const getDue = () => dueDate;
    const getPriority = () => priority;
    const isComplete = () => complete;

    // add setters as well.

    return { getTitle, getDesc, getDue, getPriority, isComplete }
};

// Creates todo item and pushes it into todoList array.
const createTodo = (title, description, dueDate, priority) => {
    let newTodo = Todo(title, description, dueDate, priority);

    todoList.push(newTodo);
    console.log(todoList);
    console.log(todoList[0].getTitle());
};

export { todoList, Todo, createTodo };