import './style.css';
import createInterface from './basicInterface';
import { todoList, projectList, createTodo, addProjectToList } from './todoLogic';
import { changeCatDOM, renderTodoItem, renderProject, toggleNewProjForm, renderCreateNewTask, renderListHeader } from './renderDOM';

document.getElementById('main-cont').appendChild(createInterface());

// Adds listeners to elements on page load.
const setListeners = (() => {
    let count = 0;

    // Listeners for categories.
    document.getElementById('all-cat').addEventListener('click', () => {
        changeCatDOM('all-cat');
        renderListHeader();
        for(count = 0; count < todoList.length; count++) {
            renderTodoItem(count);
        }
        renderCreateNewTask();
    });
    document.getElementById('today-cat').addEventListener('click', () => {
        changeCatDOM('today-cat');
        renderListHeader();
        renderCreateNewTask();
    });
    document.getElementById('tom-cat').addEventListener('click', () => {
        changeCatDOM('tom-cat');
        renderListHeader();
        renderCreateNewTask();
    });
    document.getElementById('week-cat').addEventListener('click', () => {
        changeCatDOM('week-cat');
        renderListHeader();
        renderCreateNewTask();
    });
    document.getElementById('month-cat').addEventListener('click', () => {
        changeCatDOM('month-cat');
        renderListHeader();
        renderCreateNewTask();
    });

    // Listener for add new project button.
    document.getElementById('add-proj-btn').addEventListener('click', () => {
        toggleNewProjForm();
    });

    // Listener for create project button
    document.getElementById('new-proj-btn').addEventListener('click', () => {
        if(document.getElementById('new-project-input').value !== '') {
            addProjectToList(document.getElementById('new-project-input').value);
            renderProject(projectList.length - 1);
            toggleNewProjForm();
        }
    });
})();

// Initial render of all todo items and projects when first loading page.
const initialTodoItemRender = (() => {
    let count = 0;
    renderListHeader();
    for(count = 0; count < todoList.length; count++) {
        renderTodoItem(count);
    }
    renderCreateNewTask();
    document.getElementById('all-cat').classList.add('selected');
    for(count = 0; count < projectList.length; count++) {
        renderProject(count);
    }
})();