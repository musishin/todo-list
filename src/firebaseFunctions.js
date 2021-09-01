let currentUser;
let currentUserID;
let currentUserRef;

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



// Firebase Realtime Database Application
firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        currentUser = user;
        currentUserID = user.uid;
        currentUserRef = database.ref().child(currentUserID);
        let imgUrl = user.photoURL;
        document.getElementById('user-img').src = imgUrl;
    }
    else {
        //document.getElementById('user-img').src = '';
        //signBtn.classList.toggle('display-none');
        currentUser = user;
    }
});

export { googleSignIn, googleSignOut }