// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "6UeaAy7aJ-fsDoJMMd2OHopxe9lr0ew",
//   authDomain: "reactprojects-12bbe.firebaseapp.com",
//   projectId: "reactprojects-12bbe",
//   storageBucket: "reactprojects-12bbe.appspot.com",
//   messagingSenderId: "742066518833",
//   appId: "1:742066518833:web:e710f55d1e21fa3a9d4e10",
//   measurementId: "G-90J34QXW54",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;
/////////////////////////////////////////////////////////////////////
// new firebase connection code
// const admin = require("firebase-admin");
// const serviceAccount = require("../keys/my-disney-clone-e56f9-firebase-adminsdk-ee0ao-83fdfcd06b.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // Your Firestore database URL
//   // databaseURL: 'https://your-project-id.firebaseio.com',
// });

// const db = admin.firestore();

// module.exports = { db };

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
//   authDomain: "todo-app-e3cf0.firebaseapp.com",
//   projectId: "todo-app-e3cf0",
//   storageBucket: "todo-app-e3cf0.appspot.com",
//   messagingSenderId: "940016886081",
//   appId: "1:940016886081:web:91686613f16b1b1f8001c0",
//   measurementId: "G-JHPC7TP12K",
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export default db;

//*******************************************************************************************************

//correct code
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyC9SQOa1FpzoTqVHSpG_uvv2B826HLAOKc",
//   authDomain: "auth-ad086.firebaseapp.com",
//   projectId: "auth-ad086",
//   storageBucket: "auth-ad086.appspot.com",
//   messagingSenderId: "200227166657",
//   appId: "1:200227166657:web:1c0dd627b35dc3ab76f740",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// // const storage = firebase.storage();

// export { auth, provider };

// export default db;

//8888888888888888888888888888888888888888888888888888888888888888888888888

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "6UeaAy7aJ-fsDoJMMd2OHopxe9lr0ew",
//   authDomain: "reactprojects-12bbe.firebaseapp.com",
//   projectId: "reactprojects-12bbe",
//   storageBucket: "reactprojects-12bbe.appspot.com",
//   messagingSenderId: "742066518833",
//   appId: "1:742066518833:web:e710f55d1e21fa3a9d4e10",
//   measurementId: "G-90J34QXW54",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCF-8PHQEZKt-QPF-ASFOSYWbKsh1U2P4A",
  authDomain: "disney-clone-d20b8.firebaseapp.com",
  projectId: "disney-clone-d20b8",
  storageBucket: "disney-clone-d20b8.appspot.com",
  messagingSenderId: "1037339510955",
  appId: "1:1037339510955:web:caa9e8fea79831e4d40fee",
  measurementId: "G-SS3TK4G0Q2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
