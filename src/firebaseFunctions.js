import { copyDbToArray, setCurrentProject, todoList, clearTodoListArray, getCurrentTodo, createTodo } from './todoLogic';
import { refreshList } from './renderDOM';

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
    currentUserRef.child('todos').once('value', (snap) => {
        if(snap.exists()) {
            clearTodoListArray();
            let dbList = Object.values(snap.val());
            copyDbToArray(dbList);
            refreshList();
        } else {
            refreshList();
            console.log("snap error!");
        }
    });
};

const getCurrentUserRef = () => {
    return currentUserRef;
};

export { googleSignIn, googleSignOut, addTodoToDb, editTodoDB, getCurrentUserRef }