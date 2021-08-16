import './style.css';
import createInterface from './basicInterface';
import { todoList, Todo, createTodo } from './todoLogic';

document.getElementById('main-cont').appendChild(createInterface());
createTodo('hello', 'description!!!', 'march 4, 2022', 'high');