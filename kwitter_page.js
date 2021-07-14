//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}