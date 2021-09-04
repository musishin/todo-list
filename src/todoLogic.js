import { addTodoToDb } from './firebaseFunctions';

let todoList = [];
let projectList = [];
let currentProjCatSelected = 'all-cat';
let currentTodoSelected;

// Factory function for creating todo items.
const Todo = (title, dueDate, priority, project, complete) => {
    const getTitle = () => title;
    const getDue = () => dueDate;
    const getPriority = () => priority;
    const getProject = () => project;
    const isComplete = () => complete;

    const setTitle = (newTitle) => title = newTitle;
    const setDue = (newDue) => dueDate = newDue;
    const setPriority = (newPriority) => priority = newPriority;
    const setProject = (newProject) => project = newProject;
    const setComplete = (status) => complete = status;

    return { getTitle, getDue, getPriority, getProject, isComplete, setTitle, setDue, setPriority, setProject, setComplete }
};

// Creates todo item and pushes it into todoList array.
const createTodo = (title, dueDate, priority, project) => {
    let newTodo = Todo(title, dueDate, priority, project, false);
    addTodoToDb(newTodo.getTitle(), newTodo.getDue(), newTodo.getPriority(), newTodo.getProject(), newTodo.isComplete());
    todoList.push(newTodo);
};

// Takes given project name and pushes it into projectList array.
const addProjectToList = (name) => {
    projectList.push(name);
};

const setCurrentProject = (name) => {
    currentProjCatSelected = name;
};

const getCurrentProject = () => {
    return currentProjCatSelected;
}

const setCurrentTodo = (count) => {
    currentTodoSelected = count;
};

const getCurrentTodo = () => {
    return currentTodoSelected;
}

const checkAndAddProj = (value) => {
    if(!projectList.includes(value)) {
        addProjectToList(value);
        return 'no';
    } else {
        return 'yes';
    }
};

const copyDbToArray = (dbList) => {
    for(let arrayIndex = 0; arrayIndex < dbList.length; arrayIndex++) {
        let newTodo = Todo(dbList[arrayIndex].title, dbList[arrayIndex].dueDate, dbList[arrayIndex].priority, dbList[arrayIndex].project, dbList[arrayIndex].complete);
        todoList.push(newTodo);
    }
};

export { todoList, projectList, createTodo, addProjectToList, setCurrentProject, getCurrentProject, setCurrentTodo, getCurrentTodo, checkAndAddProj, copyDbToArray };