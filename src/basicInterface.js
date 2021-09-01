import logo from './images/to-do-list_white.png';

export default function createInterface() {
    const bodyCont = document.createElement('div');
    const titleBar = document.createElement('div');
    const title = document.createElement('div');
    const titleTxt = document.createElement('div');
    const appLogo = document.createElement('img');
    const authCont = document.createElement('div');
    const userImg = document.createElement('img');
    const signInBtn = document.createElement('button');
    const signOutBtn = document.createElement('button');
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
    const projectTitleBtnCont = document.createElement('div');
    const addProjectBtn = document.createElement('div');
    const newProjectInput = document.createElement('input');
    const newProjBtn = document.createElement('button');

    titleTxt.innerHTML = 'Things to Do';
    allCat.innerHTML = 'All Things';
    todayCat.innerHTML = 'Today';
    tomCat.innerHTML = 'Tomorrow';
    weekCat.innerHTML = 'This Week';
    monthCat.innerHTML = 'This Month';
    projectTitleBtnCont.innerHTML = 'Projects';
    addProjectBtn.innerHTML = '+';
    newProjBtn.innerHTML = 'Create';
    signInBtn.innerHTML = 'Sign In';
    signOutBtn.innerHTML = 'Sign Out';

    bodyCont.appendChild(titleBar);
    bodyCont.appendChild(sideTodoCont);

    titleBar.appendChild(title);
    titleBar.appendChild(authCont);

    authCont.appendChild(userImg);
    authCont.appendChild(signInBtn);
    authCont.appendChild(signOutBtn);

    title.appendChild(appLogo);
    title.appendChild(titleTxt);

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

    projectTitle.appendChild(projectTitleBtnCont);
    projectTitle.appendChild(newProjectInput);
    projectTitle.appendChild(newProjBtn);

    projectTitleBtnCont.appendChild(addProjectBtn);

    bodyCont.setAttribute('id', 'body-cont');
    titleBar.setAttribute('id', 'title-bar');
    title.setAttribute('id', 'title');
    appLogo.setAttribute('id', 'app-logo');
    appLogo.src = logo;
    authCont.setAttribute('id', 'auth-cont');
    userImg.setAttribute('id', 'user-img');
    signInBtn.classList.add('sign-btns');
    signInBtn.setAttribute('id', 'sign-in-btn');
    signOutBtn.classList.add('sign-btns');
    signOutBtn.setAttribute('id', 'sign-out-btn');
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
    projectTitleBtnCont.setAttribute('id', 'project-title-btn-cont');
    addProjectBtn.setAttribute('id', 'add-proj-btn');
    newProjectInput.setAttribute('id', 'new-project-input');
    newProjectInput.setAttribute('placeholder', 'Enter new project name');
    newProjectInput.setAttribute('type', 'text');
    newProjectInput.classList.add('hide');
    newProjBtn.setAttribute('type', 'button');
    newProjBtn.setAttribute('id', 'new-proj-btn');
    newProjBtn.classList.add('hide');

    return bodyCont;
}