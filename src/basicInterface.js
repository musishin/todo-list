export default function createInterface() {
    const bodyCont = document.createElement('div');
    const titleBar = document.createElement('div');
    const title = document.createElement('div');
    const authCont = document.createElement('div');
    const sideTodoCont = document.createElement('div');
    const sideBar = document.createElement('div');
    const todoCont = document.createElement('div');
    const mainCatCont = document.createElement('div');
    const allCat = document.createElement('div');
    const todayCat = document.createElement('div');
    const tomCat = document.createElement('div');
    const weekCat = document.createElement('div');
    const monthCat = document.createElement('div');
    const projectCont = document.createElement('div');
    const projectTitle = document.createElement('div');

    bodyCont.appendChild(titleBar);
    bodyCont.appendChild(sideTodoCont);

    titleBar.appendChild(title);
    titleBar.appendChild(authCont);

    sideTodoCont.appendChild(sideBar);
    sideTodoCont.appendChild(todoCont);
    sideBar.appendChild(mainCatCont);
    sideBar.appendChild(projectCont);
    mainCatCont.appendChild(allCat);
    mainCatCont.appendChild(todayCat);
    mainCatCont.appendChild(tomCat);
    mainCatCont.appendChild(weekCat);
    mainCatCont.appendChild(monthCat);
    projectCont.appendChild(projectTitle);

    title.innerHTML = 'Things to Do';
    allCat.innerHTML = 'All Things';
    todayCat.innerHTML = 'Today';
    tomCat.innerHTML = 'Tomorrow';
    weekCat.innerHTML = 'This Week';
    monthCat.innerHTML = 'This Month';
    projectTitle.innerHTML = 'Projects';

    bodyCont.setAttribute('id', 'body-cont');
    titleBar.setAttribute('id', 'title-bar');
    title.setAttribute('id', 'title');
    authCont.setAttribute('id', 'auth-cont');
    sideTodoCont.setAttribute('id', 'side-todo-cont');
    sideBar.setAttribute('id', 'sidebar');
    todoCont.setAttribute('id', 'todo-cont');
    mainCatCont.setAttribute('id', 'main-cat-cont');
    projectCont.setAttribute('id', 'project-cont');
    allCat.classList.add('main-cats');
    allCat.setAttribute('id', 'all-cat');
    todayCat.classList.add('main-cats');
    todayCat.setAttribute('id', 'today-cat');
    tomCat.classList.add('main-cats');
    tomCat.setAttribute('id', 'tom-cat');
    weekCat.classList.add('main-cats');
    weekCat.setAttribute('id', 'week-cat');
    monthCat.classList.add('main-cats');
    monthCat.setAttribute('id', 'month-cat');
    projectTitle.setAttribute('id', 'project-title');

    return bodyCont;
}