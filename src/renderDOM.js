import { todoList, projectList, createTodo, setCurrentProject, getCurrentProject, addProjectToList, setCurrentTodo, getCurrentTodo, checkAndAddProj } from "./todoLogic";

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
    itemEditCont.appendChild(renderEditForm());

    todoItemCont.classList.add('todo-item-cont');
    todoItemCont.classList.add('todo-item-font');
    todoItemTopCont.setAttribute('id', 'todo-item-top-cont');
    itemEditCont.classList.add('item-edit-cont');
    itemEditCont.classList.add('hide-edit-cont');
    rightCont.setAttribute('id', 'right-cont');
    editBtn.classList.add('item-buttons');
    deleteBtn.classList.add('item-buttons');
    priorityCont.setAttribute('id', 'priority-cont');

    if(todoList[count].getPriority() === 'High') {
        priorityCont.classList.add('high-priority');
    } else if(todoList[count].getPriority() === 'Medium') {
        priorityCont.classList.add('medium-priority');
    } else if(todoList[count].getPriority() === 'Low') {
        priorityCont.classList.add('low-priority');
    }

    editBtn.addEventListener('click', () => {
        const editConts = document.getElementsByClassName('item-edit-cont');
        let showState = '';
        let counter = 0;
        if(itemEditCont.classList.contains('hide-edit-cont')) { showState = 'hidden'; }
        for(counter = 0; counter < editConts.length; counter++) {
            if(!editConts[counter].classList.contains('hide-edit-cont')) {
                editConts[counter].classList.add('hide-edit-cont');
            }
        }
        if(showState === 'hidden') {
            itemEditCont.classList.remove('hide-edit-cont');
        } else {
            itemEditCont.classList.add('hide-edit-cont');
        }
        setCurrentTodo(count);
    });

    deleteBtn.addEventListener('click', () => {
        document.getElementById('todo-cont').removeChild(todoItemCont);
        todoList.splice(count, 1);
    });

    titleCont.innerHTML = todoList[count].getTitle();
    dueDateCont.innerHTML = todoList[count].getDue();

    document.getElementById('todo-cont').appendChild(todoItemCont);
};

// Renders projects from projectList[].
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
        setCurrentProject(projectName);
        refreshList();
    });
};

// Renders the create new task button.
const renderCreateNewTask = () => {
    const createNewTaskCont = document.createElement('div');
    const createNewTaskBtn = document.createElement('button');
    const createNewTaskFieldCont = document.createElement('div');
    const newTitleField = document.createElement('input');
    const newDateField = document.createElement('input');
    const newPriorityField = document.createElement('select');
    const selectOption = document.createElement('option');
    const highOption = document.createElement('option');
    const mediumOption = document.createElement('option');
    const lowOption = document.createElement('option');
    const newProjectField = document.createElement('input');
    const submitBtn = document.createElement('button');

    createNewTaskBtn.innerHTML = '+ Add New Task';
    selectOption.innerHTML = 'Priority';
    highOption.innerHTML = 'High';
    mediumOption.innerHTML = 'Medium';
    lowOption.innerHTML = 'Low';
    submitBtn.innerHTML = 'Submit';

    createNewTaskCont.setAttribute('id', 'create-new-task-cont');
    createNewTaskBtn.setAttribute('id', 'create-new-task-btn');
    createNewTaskFieldCont.setAttribute('id', 'create-new-task-field-cont');
    createNewTaskFieldCont.classList.add('hide');
    newTitleField.setAttribute('id', 'new-title-field');
    newTitleField.setAttribute('placeholder', 'Enter title of new task');
    newDateField.setAttribute('type', 'date');
    newDateField.setAttribute('id', 'new-date-field');
    newPriorityField.setAttribute('id', 'new-priority-field');
    highOption.setAttribute('value', 'High');
    mediumOption.setAttribute('value', 'Medium');
    lowOption.setAttribute('value', 'Low');
    newProjectField.setAttribute('placeholder', 'Enter title of project');
    newProjectField.setAttribute('id', 'new-task-project-field');
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('id', 'new-task-submit-btn');

    createNewTaskCont.appendChild(createNewTaskBtn);
    createNewTaskCont.appendChild(createNewTaskFieldCont);
    createNewTaskFieldCont.appendChild(newTitleField);
    createNewTaskFieldCont.appendChild(newDateField);
    createNewTaskFieldCont.appendChild(newPriorityField);
    createNewTaskFieldCont.appendChild(newProjectField);
    createNewTaskFieldCont.appendChild(submitBtn);
    newPriorityField.appendChild(selectOption);
    newPriorityField.appendChild(highOption);
    newPriorityField.appendChild(mediumOption);
    newPriorityField.appendChild(lowOption);
    
    document.getElementById('todo-cont').appendChild(createNewTaskCont);

    createNewTaskBtn.addEventListener('click', () => {
        createNewTaskFieldCont.classList.toggle('hide');
    });

    submitBtn.addEventListener('click', () => {
        createTodo(newTitleField.value, newDateField.value, newPriorityField.value, newProjectField.value);
        refreshList();
        if(!projectList.includes(newProjectField.value)) {
            addProjectToList(newProjectField.value);
            renderProject(projectList.length - 1);
        }
    });
};

const renderListHeader = () => {
    const headerCont = document.createElement('div');
    headerCont.innerHTML = 'Your To-do\'s';
    headerCont.setAttribute('id', 'header-cont');
    document.getElementById('todo-cont').appendChild(headerCont);
};

const renderEditForm = () => {
    const editCont = document.createElement('div');
    const editTitleField = document.createElement('input');
    const editDateField = document.createElement('input');
    const editPriorityField = document.createElement('select');
    const selectOption = document.createElement('option');
    const highOption = document.createElement('option');
    const mediumOption = document.createElement('option');
    const lowOption = document.createElement('option');
    const editProjectField = document.createElement('input');
    const submitBtn = document.createElement('button');

    submitBtn.innerHTML = 'Edit';
    selectOption.innerHTML = 'Priority';
    highOption.innerHTML = 'High';
    mediumOption.innerHTML = 'Medium';
    lowOption.innerHTML = 'Low';

    editTitleField.setAttribute('id', 'edit-title-field');
    editTitleField.setAttribute('placeholder', 'Edit todo title');
    editDateField.setAttribute('id', 'edit-date-field');
    editDateField.setAttribute('type', 'date');
    editPriorityField.setAttribute('id', 'edit-priority-field');
    editProjectField.setAttribute('id', 'edit-task-project-field');
    editProjectField.setAttribute('placeholder', 'Edit todo project');
    submitBtn.setAttribute('id', 'edit-task-submit-btn');
    highOption.setAttribute('value', 'High');
    mediumOption.setAttribute('value', 'Medium');
    lowOption.setAttribute('value', 'Low');
    editCont.setAttribute('id', 'edit-cont');

    editCont.appendChild(editTitleField);
    editCont.appendChild(editDateField);
    editCont.appendChild(editPriorityField);
    editCont.appendChild(editProjectField);
    editCont.appendChild(submitBtn);
    editPriorityField.appendChild(selectOption);
    editPriorityField.appendChild(highOption);
    editPriorityField.appendChild(mediumOption);
    editPriorityField.appendChild(lowOption);

    submitBtn.addEventListener('click', () => {
        let todo = todoList[getCurrentTodo()];
        todo.setTitle(editTitleField.value);
        todo.setDue(editDateField.value);
        todo.setPriority(editPriorityField.value);
        todo.setProject(editProjectField.value);
        console.log(todo.getPriority());
        console.log(todo.getProject());

        if(checkAndAddProj(editProjectField.value) === 'no') {
            renderProject(projectList.length - 1);
        }
        refreshList();
    });

    return editCont;
};

// changeCatDOM(), unselectCats(), and unselectProjs() all make necessary DOM changes when a category or project is selected.

const changeCatDOM = (category) => {
    unselectCats();
    unselectProjs();
    document.getElementById(category).classList.add('selected');
    setCurrentProject(category);
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

const refreshList = () => {
    let count = 0;
    clearList();
    renderListHeader();
    for(count = 0; count < todoList.length; count++) {
        if(getCurrentProject() === 'all-cat') {
            renderTodoItem(count);
        }
        else if(todoList[count].getProject() === getCurrentProject()) {
            renderTodoItem(count);
        }
    }
    renderCreateNewTask();
};

// Toggle appropriate classes for new project input field and buttons.
const toggleNewProjForm = () => {
    document.getElementById('new-project-input').value = '';
    document.getElementById('new-project-input').classList.toggle('hide');
    document.getElementById('new-proj-btn').classList.toggle('hide');
    document.getElementById('add-proj-btn').classList.toggle('rotated');
}

export { changeCatDOM, renderTodoItem, renderProject, toggleNewProjForm, renderCreateNewTask, renderListHeader };