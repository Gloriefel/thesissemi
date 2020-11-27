const adminItems = document.querySelectorAll('.admin');
firebase.auth().onAuthStateChanged(function(user){
    if(user){
      user.getIdTokenResult().then(idTokenResult => {
        user.admin = idTokenResult.claims.admin;
        adminsetup(user);  
      })
    }
  })

  const adminsetup = (user) => {
  if (user){
    if(user.admin){
        adminItems.forEach(item => item.style.display = 'block');
      }        
     
  } else{
      adminItems.forEach(item => item.style.display = 'none');
  }
}