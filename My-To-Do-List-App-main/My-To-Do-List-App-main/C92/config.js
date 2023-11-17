import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSvqBVw9GrZ4zl6OBMa2sW1ERzxH382P8",
    authDomain: "my-to-do-list-app-91dce.firebaseapp.com",
    databaseURL: "https://my-to-do-list-app-91dce-default-rtdb.firebaseio.com",
    projectId: "my-to-do-list-app-91dce",
    storageBucket: "my-to-do-list-app-91dce.appspot.com",
    messagingSenderId: "438947194626",
    appId: "1:438947194626:web:838705e1f7a056822d441b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase.database()