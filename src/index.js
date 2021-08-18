import './style.css';
import createInterface from './basicInterface';
import { todoList, projectList, createTodo, addProjectToList } from './todoLogic';
import { changeCatDOM, renderTodoItem, renderProject } from './renderDOM';

document.getElementById('main-cont').appendChild(createInterface());

createTodo('Wash the car 1', 'description!!!', 'March 4, 2022', 'high', 'Music');
createTodo('Wash the car 2', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car 3', 'description!!!', 'March 4, 2022', 'medium', 'School');
createTodo('Wash the car 4', 'description!!!', 'March 4, 2022', 'high', 'School');
createTodo('Wash the car 5', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car 6', 'description!!!', 'March 4, 2022', 'medium', 'Music');
createTodo('Wash the car 7', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car 8', 'description!!!', 'March 4, 2022', 'low', 'School');
createTodo('Wash the car 9', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car 10', 'description!!!', 'March 4, 2022', 'medium', 'Music');
createTodo('Wash the car 11', 'description!!!', 'March 4, 2022', 'high', 'School');
createTodo('Wash the car 12', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car 13', 'description!!!', 'March 4, 2022', 'medium', 'Music');
createTodo('Wash the car 14', 'description!!!', 'March 4, 2022', 'high', 'School');
createTodo('Wash the car 15', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car 16', 'description!!!', 'March 4, 2022', 'medium', 'Music');
createTodo('Wash the car 17', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car 18', 'description!!!', 'March 4, 2022', 'low', 'School');
createTodo('Wash the car 19', 'description!!!', 'March 4, 2022', 'high', 'Music');
createTodo('Wash the car 20', 'description!!!', 'March 4, 2022', 'medium');

// Adds listeners to elements on page load.
const setListeners = (() => {
    let count = 0;

    // Listeners for categories.
    document.getElementById('all-cat').addEventListener('click', () => {
        changeCatDOM('all-cat');
        for(count = 0; count < todoList.length; count++) {
            renderTodoItem(count);
        }
    });
    document.getElementById('today-cat').addEventListener('click', () => {
        changeCatDOM('today-cat');
    });
    document.getElementById('tom-cat').addEventListener('click', () => {
        changeCatDOM('tom-cat');
    });
    document.getElementById('week-cat').addEventListener('click', () => {
        changeCatDOM('week-cat');
    });
    document.getElementById('month-cat').addEventListener('click', () => {
        changeCatDOM('month-cat');
    });

    // Listener for add new project button.
    document.getElementById('add-proj-btn').addEventListener('click', () => {
        document.getElementById('new-project-input').classList.toggle('hide');
        document.getElementById('new-proj-btn').classList.toggle('hide');
        document.getElementById('add-proj-btn').classList.toggle('rotated');
    });

    // Listener for create project button
    document.getElementById('new-proj-btn').addEventListener('click', () => {
        if(document.getElementById('new-project-input').value !== '') {
            addProjectToList(document.getElementById('new-project-input').value);
            renderProject(projectList.length - 1);
            document.getElementById('new-project-input').value = '';
            document.getElementById('new-project-input').classList.add('hide');
            document.getElementById('new-proj-btn').classList.add('hide');
        }
    });
})();

// Initial render of all todo items and projects when first loading page.
const initialTodoItemRender = (() => {
    let count = 0;
    for(count = 0; count < todoList.length; count++) {
        renderTodoItem(count);
    }
    document.getElementById('all-cat').classList.add('selected');
    for(count = 0; count < projectList.length; count++) {
        renderProject(count);
    }
})();