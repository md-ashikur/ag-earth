
  // Import the functions you need from the SDKs you need
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCiYtCABDL7g66NB4mdTH2OS1wOQ99AqkY",
    authDomain: "agearth-testing.firebaseapp.com",
    projectId: "agearth-testing",
    storageBucket: "agearth-testing.appspot.com",
    messagingSenderId: "1014396222091",
    appId: "1:1014396222091:web:72356ee8f8cd5c4625728e"
  };

  firebase.initializeApp(firebaseConfig);

  // Get references to the form and input fields
  var registerForm = document.getElementById("registerForm");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var errorContainer = document.getElementById("errorContainer");
  // Register user with email and password
  function register(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Update the user's display name
        userCredential.user.updateProfile({
          displayName: name
        })
        .then(function() {
          console.log("User registered successfully:", userCredential.user);
          // Redirect the user to another page after successful registration
          window.location.href = "signin.html";
        })
        .catch(function(error) {
          console.error("Error updating user profile:", error);
        });
      })
      .catch(function(error) {
        console.error("Error registering user:", error);
        // Handle any errors that occur during registration
      });
  }
  
  // Attach the register function to the form submission event
  registerForm.addEventListener("submit", register);





  







