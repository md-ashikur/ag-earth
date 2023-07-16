
const firebaseConfig = {
    apiKey: "AIzaSyCiYtCABDL7g66NB4mdTH2OS1wOQ99AqkY",
    authDomain: "agearth-testing.firebaseapp.com",
    projectId: "agearth-testing",
    storageBucket: "agearth-testing.appspot.com",
    messagingSenderId: "1014396222091",
    appId: "1:1014396222091:web:72356ee8f8cd5c4625728e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign out user
function signOut() {
    firebase.auth().signOut()
      .then(function() {
        console.log("User signed out successfully");
        // Redirect the user to the sign-in page or any other desired page
        window.location.href = "signin.html";
      })
      .catch(function(error) {
        console.error("Error signing out:", error);
        // Handle any errors that occur during sign out
      });
  }
  
  // Attach the signOut function to the sign out button or link
  var signOutButton = document.getElementById("signOutButton");
  signOutButton.addEventListener("click", signOut);
  