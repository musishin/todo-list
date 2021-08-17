import { todoList } from "./todoLogic";

// Renders a todo item with the info of the todo and appends it to the todo item container.
const renderTodoItem = (count) => {
    const todoItemCont = document.createElement('div');
    const titleCont = document.createElement('div');
    const rightCont = document.createElement('div');
    const dueDateCont = document.createElement('div');
    const editBtn = document.createElement('div');
    const deleteBtn = document.createElement('div');
    const priorityCont = document.createElement('div');

    todoItemCont.appendChild(titleCont);
    todoItemCont.appendChild(rightCont);
    rightCont.appendChild(dueDateCont);
    rightCont.appendChild(editBtn);
    rightCont.appendChild(deleteBtn);
    todoItemCont.appendChild(priorityCont);

    todoItemCont.classList.add('todo-item-cont');
    todoItemCont.classList.add('todo-item-font');
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

    titleCont.innerHTML = todoList[count].getTitle();
    dueDateCont.innerHTML = todoList[count].getDue();

    document.getElementById('todo-cont').appendChild(todoItemCont);
};

// Makes all necessary DOM changes when a category is selected.
const changeCatDOM = (category) => {
    unselectCats();
    document.getElementById(category).classList.add('main-cat-selected');
    clearList();
};

const unselectCats = () => {
    document.getElementById('all-cat').classList.remove('main-cat-selected');
    document.getElementById('today-cat').classList.remove('main-cat-selected');
    document.getElementById('tom-cat').classList.remove('main-cat-selected');
    document.getElementById('week-cat').classList.remove('main-cat-selected');
    document.getElementById('month-cat').classList.remove('main-cat-selected');
};

const clearList = () => {
    while(document.getElementById('todo-cont').firstChild) {
        document.getElementById('todo-cont').removeChild(document.getElementById('todo-cont').firstChild);
    }
};

export { changeCatDOM, renderTodoItem };