import { copyDbToArray, copyDbToProjects, setCurrentProject, todoList, clearTodoListArray, getCurrentTodo, createTodo, projectList } from './todoLogic';
import { refreshList, renderProject } from './renderDOM';

let currentUser;
let currentUserID;
let currentUserRef;
let database = firebase.database();

// Google Authentication

const googleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
        firebase.auth().signInWithRedirect(provider);
    });
};

const googleSignOut = () => {
    firebase.auth().signOut().then(() => {
        console.log("Sign-out successful.");
        document.getElementById('user-img').src = '';
    }).catch((error) => {
    console.log(error);
    });
};

// Firebase Authentication Listener
firebase.auth().onAuthStateChanged(function(user) {

    if(user) {
        currentUser = user;
        currentUserID = user.uid;
        currentUserRef = database.ref().child(currentUserID);
        let imgUrl = user.photoURL;
        document.getElementById('user-img').src = imgUrl;

        // Render existing todos for the user.
        document.getElementById('all-cat').classList.add('selected');
        setCurrentProject('all-cat');
        currentUserRef.child('todos').once('value', (snap) => {
            if(snap.exists()) {
                let dbList = Object.values(snap.val());
                copyDbToArray(dbList);
                refreshList();
            }
            else {
                refreshList();
            }
        });

        // Render existing projects.
        currentUserRef.child('projects').once('value', (snap) => {
            if(snap.exists()) {
                let dbList = Object.values(snap.val());
                copyDbToProjects(dbList);
                for(let index = 0; index < projectList.length; index++) {
                    renderProject(index);
                }
            }
            else {
                refreshList();
            }
        });
    }
    else {
        todoList.length = 0;
        currentUser = user;
        refreshList();
    }
});

// Adds new todos to database.
const addTodoToDb = (title, dueDate, priority, project, complete) => {

    if(currentUser) {
        currentUserRef.child('todos').child(title + '@' + dueDate).set({
            title: title,
            dueDate: dueDate,
            priority: priority,
            project: project,
            complete: complete
        });
    } else {
        console.log("No user!");
    }
};

// Makes todo edit changes to database.
const editTodoDB = (title, dueDate, priority, project) => {
    let newTitle = title;
    let newDue = dueDate;
    let newPriority = priority;
    let newProject = project;
    // Check if user input anything in the edit fields. If edit field are blank, get data from todoList array.
    if(newTitle === "") {
        newTitle = todoList[getCurrentTodo()].getTitle();
    }
    if(newDue === "") {
        newDue = todoList[getCurrentTodo()].getDue();
    }
    if(newPriority === "" || newPriority === "Priority") {
        newPriority = todoList[getCurrentTodo()].getPriority();
    }
    if(newProject === "") {
        newProject = todoList[getCurrentTodo()].getProject();
    }
    currentUserRef.child('todos').child(todoList[getCurrentTodo()].getTitle() + '@' + todoList[getCurrentTodo()].getDue()).remove();
    createTodo(newTitle, newDue, newPriority, newProject);
};

const deleteTodoDB = (index) => {
    currentUserRef.child('todos').child(todoList[index].getTitle() + '@' + todoList[index].getDue()).remove();
};

const resetList = () => {
    // Refill the todoList array with the updated data and refresh the displayed list.
    currentUserRef.child('todos').once('value', (snap) => {
        if(snap.exists()) {
            clearTodoListArray();
            let dbList = Object.values(snap.val());
            copyDbToArray(dbList);
            refreshList();
        } else {
            clearTodoListArray();
            refreshList();
        }
    });
};

const getCurrentUserRef = () => {
    return currentUserRef;
};

const addProjectToDB = (project) => {
    if(currentUser) {
        currentUserRef.child('projects').child(project).set({
            title: project
        });
    } else {
        console.log("No user!");
    }
};

export { googleSignIn, googleSignOut, addTodoToDb, editTodoDB, getCurrentUserRef, deleteTodoDB, resetList, addProjectToDB }