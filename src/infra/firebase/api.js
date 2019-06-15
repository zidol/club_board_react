import firebase from 'firebase'


export function signinAPI(email, password) {
    // firebase.auth().signInWithEmail()
}

export function signinWithGoogleAPI(email, password) {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    return firebase.auth().signInWithPopup(provider);
    
}

export function signoutAPI(){
    return firebase.auth().signOut();
}
