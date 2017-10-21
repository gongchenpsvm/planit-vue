import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDbzljOC2mS_abrr2IifphgxjURjn_Lmu8",
    authDomain: "planit-vue.firebaseapp.com",
    databaseURL: "https://planit-vue.firebaseio.com",
    projectId: "planit-vue",
    storageBucket: "planit-vue.appspot.com",
    messagingSenderId: "220762772939"
  };

  export const firebaseApp = firebase.initializeApp(config)
  
