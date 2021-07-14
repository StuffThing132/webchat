
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBJ5nuCEpmCO5e3HhRPP04QGFREvU9Nq_g",
      authDomain: "twitter-k-4c517.firebaseapp.com",
      databaseURL: "https://twitter-k-4c517-default-rtdb.firebaseio.com",
      projectId: "twitter-k-4c517",
      storageBucket: "twitter-k-4c517.appspot.com",
      messagingSenderId: "242947776783",
      appId: "1:242947776783:web:416efd65d2c404555fde7a",
      measurementId: "G-KXYS3G5FG3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
