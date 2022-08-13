import firbase from "firebase/app"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGekeS31qFUO4ZaZD8woDTha7PHxunOas",
    authDomain: "yt-akshay.firebaseapp.com",
    projectId: "yt-akshay",
    storageBucket: "yt-akshay.appspot.com",
    messagingSenderId: "449219989621",
    appId: "1:449219989621:web:dd9cf3bd8e9435ad10683c"
  };

  firbase.initializeApp(firebaseConfig)

  export default firbase.auth()