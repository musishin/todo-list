import './style.css';
import createInterface from './basicInterface';
import { todoList, createTodo } from './todoLogic';
import { changeCatDOM, renderTodoItem } from './renderDOM';

document.getElementById('main-cont').appendChild(createInterface());
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'medium');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'medium');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'medium');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'medium');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'medium');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'low');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'high');
createTodo('Wash the car', 'description!!!', 'March 4, 2022', 'medium');

// Adds listeners to the main category selectors to display corresponding todo items.
const setListenersForCats = (() => {
    let count = 0;
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
})();

// Initial render of all todo items when first loading webapp.
const initialTodoItemRender = (() => {
    let count = 0;
    for(count = 0; count < todoList.length; count++) {
        renderTodoItem(count);
    }
    document.getElementById('all-cat').classList.add('main-cat-selected');
})();