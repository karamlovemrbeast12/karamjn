
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
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
 username=localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML="Welcome "   + username + "!";
function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"    
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


