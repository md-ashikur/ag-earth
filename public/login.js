// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiYtCABDL7g66NB4mdTH2OS1wOQ99AqkY",
  authDomain: "agearth-testing.firebaseapp.com",
  projectId: "agearth-testing",
  storageBucket: "agearth-testing.appspot.com",
  messagingSenderId: "1014396222091",
  appId: "1:1014396222091:web:72356ee8f8cd5c4625728e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to the form and input fields
var loginForm = document.getElementById("loginForm");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var errorContainer = document.getElementById("errorContainer");

// Login user with email and password
function login(event) {
  event.preventDefault(); // Prevent the form from submitting

  var email = emailInput.value;
  var password = passwordInput.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      console.log("User logged in successfully:", userCredential.user);
      // Redirect the user to another page after successful login
      window.location.href = "index.html";
    })
    .catch(function (error) {
      console.error("Error logging in:", error);
      // Show error message
      errorContainer.innerText = error.message;
    });
}

// Attach the login function to the form submission event
loginForm.addEventListener("submit", login);
