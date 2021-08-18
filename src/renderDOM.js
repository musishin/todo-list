import { todoList, projectList } from "./todoLogic";

// Renders a todo item with the info of the todo and appends it to the todo item container.
const renderTodoItem = (count) => {
    const todoItemCont = document.createElement('div');
    const todoItemTopCont = document.createElement('div');
    const itemEditCont = document.createElement('div');
    const titleCont = document.createElement('div');
    const rightCont = document.createElement('div');
    const dueDateCont = document.createElement('div');
    const editBtn = document.createElement('div');
    const deleteBtn = document.createElement('div');
    const priorityCont = document.createElement('div');

    todoItemCont.appendChild(todoItemTopCont);
    todoItemCont.appendChild(itemEditCont);
    todoItemTopCont.appendChild(titleCont);
    todoItemTopCont.appendChild(rightCont);
    rightCont.appendChild(dueDateCont);
    rightCont.appendChild(editBtn);
    rightCont.appendChild(deleteBtn);
    todoItemTopCont.appendChild(priorityCont);

    todoItemCont.classList.add('todo-item-cont');
    todoItemCont.classList.add('todo-item-font');
    todoItemTopCont.setAttribute('id', 'todo-item-top-cont');
    itemEditCont.setAttribute('id', 'item-edit-cont');
    itemEditCont.classList.add('hide-edit-cont');
    rightCont.setAttribute('id', 'right-cont');
    editBtn.classList.add('item-buttons');
    deleteBtn.classList.add('item-buttons');
    priorityCont.setAttribute('id', 'priority-cont');

    if(todoList[count].getPriority() === 'high') {
        priorityCont.classList.add('high-priority');
    } else if(todoList[count].getPriority() === 'medium') {
        priorityCont.classList.add('medium-priority');
    } else if(todoList[count].getPriority() === 'low') {
        priorityCont.classList.add('low-priority');
    }

    editBtn.addEventListener('click', () => {
        itemEditCont.classList.toggle('hide-edit-cont');
    });
    deleteBtn.addEventListener('click', () => {
        document.getElementById('todo-cont').removeChild(todoItemCont);
        todoList.splice(count, 1);
    });

    titleCont.innerHTML = todoList[count].getTitle();
    dueDateCont.innerHTML = todoList[count].getDue();

    document.getElementById('todo-cont').appendChild(todoItemCont);
};

//Renders projects from projectList[].
const renderProject = (projCount) => {
    const newProjDiv = document.createElement('div');
    const projectName = projectList[projCount];

    newProjDiv.innerHTML = projectName;
    document.getElementById('project-cont').appendChild(newProjDiv);
    newProjDiv.setAttribute('id', 'new-proj-div');
    newProjDiv.classList.add('new-proj-ID');

    newProjDiv.addEventListener('click', () => {
        let count = 0;
        unselectProjs();
        unselectCats();
        newProjDiv.classList.add('selected');
        clearList();
        for(count = 0; count < todoList.length; count++) {
            if(todoList[count].getProject() === projectName) {
                renderTodoItem(count);
            }
        }
    });
};

// Makes all necessary DOM changes when a category or project is selected.
const changeCatDOM = (category) => {
    unselectCats();
    unselectProjs();
    document.getElementById(category).classList.add('selected');
    clearList();
};

const unselectCats = () => {
    document.getElementById('all-cat').classList.remove('selected');
    document.getElementById('today-cat').classList.remove('selected');
    document.getElementById('tom-cat').classList.remove('selected');
    document.getElementById('week-cat').classList.remove('selected');
    document.getElementById('month-cat').classList.remove('selected');
};

const unselectProjs = () => {
    const projects = document.querySelectorAll('div.new-proj-ID');
    let count;
    for(count = 0; count < projects.length; count++) {
        projects[count].classList.remove('selected');
    }
};

const clearList = () => {
    while(document.getElementById('todo-cont').firstChild) {
        document.getElementById('todo-cont').removeChild(document.getElementById('todo-cont').firstChild);
    }
};

export { changeCatDOM, renderTodoItem, renderProject };