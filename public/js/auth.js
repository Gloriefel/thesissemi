 
  var firebaseConfig = {
    apiKey: "AIzaSyD__F-N2U7KViRAxUEaNDz3P_Fp63MrPzk",
    authDomain: "sisascb.firebaseapp.com",
    databaseURL: "https://sisascb.firebaseio.com",
    projectId: "sisascb",
    storageBucket: "sisascb.appspot.com",
    messagingSenderId: "616128933101",
    appId: "1:616128933101:web:82691722438e08c7d070e4",
    measurementId: "G-56W55HQ6QK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  const functions = firebase.functions();
    const db = firebase.database(); 
       


// login
$("#login").click(function(){

    var email = $("#login-email").val();
    var password = $("#login-password").val();

    if(email != "" & password != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            
            window.alert("Message: " + errorMessage);
        });
       
    }
    else{
        window.alert("Please fill out all fields.")
    }

});


//forget pass
$("#forgetbtn").click(function(){
    var auth = firebase.auth();
    var email = $("#forgetpassemail").val();


    if(email != ""){
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("Email sent, Please check and verify.");

        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            
            window.alert("Message: " + errorMessage);
        });
    }
    else{
        window.alert("Please enter your email first.")
    }
});



// logout
$("#logout").click(function(){
    firebase.auth().signOut(); 
});










