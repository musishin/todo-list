import './style.css';
import createInterface from './basicInterface';
import { todoList, projectList, createTodo, addProjectToList } from './todoLogic';
import { changeCatDOM, renderTodoItem, renderProject, toggleNewProjForm, renderCreateNewTask, renderListHeader, refreshList } from './renderDOM';
import { googleSignIn, googleSignOut } from './firebaseFunctions';

document.getElementById('main-cont').appendChild(createInterface());

// Adds listeners to elements on page load.
const setListeners = (() => {
    let count = 0;

    // Listeners for categories.
    document.getElementById('all-cat').addEventListener('click', () => {
        changeCatDOM('all-cat');
        refreshList();
    });
    document.getElementById('today-cat').addEventListener('click', () => {
        changeCatDOM('today-cat');
        refreshList();
    });
    document.getElementById('tom-cat').addEventListener('click', () => {
        changeCatDOM('tom-cat');
        refreshList();
    });
    document.getElementById('week-cat').addEventListener('click', () => {
        changeCatDOM('week-cat');
        refreshList();
    });
    document.getElementById('month-cat').addEventListener('click', () => {
        changeCatDOM('month-cat');
        refreshList();
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

    // Listener for sign in/out buttons
    document.getElementById('sign-in-btn').addEventListener('click', googleSignIn);
    document.getElementById('sign-out-btn').addEventListener('click', googleSignOut);
})();

// Initial render of all todo items and projects when first loading page.
const initialTodoItemRender = (() => {
    let count = 0;
    renderListHeader();
    //createTodo('Hello', '2021-08-18', 'Low', 'Everyday');
    for(count = 0; count < todoList.length; count++) {
        renderTodoItem(count);
    }
    renderCreateNewTask();
    document.getElementById('all-cat').classList.add('selected');
    for(count = 0; count < projectList.length; count++) {
        renderProject(count);
    }
})();