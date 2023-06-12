 firebaseConfig = {
      apiKey: "AIzaSyBWEf0LBtir0RrE0LVtP_HFVqYap4A35L0",
      authDomain: "kwitter-bd3d5.firebaseapp.com",
      databaseURL: "https://kwitter-bd3d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-bd3d5",
      storageBucket: "kwitter-bd3d5.appspot.com",
      messagingSenderId: "95423663862",
      appId: "1:95423663862:web:bb9dcda80bac1d3987e6d7"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
   
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value = "";

}
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}