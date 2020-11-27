 
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
  firebase.initializeApp(firebaseConfig);  
//create firebase references
const Storage = firebase.storage();
const allImagesRef = Storage.ref().child('TesdaTwsp_applicants Requirements')
const dbRef = firebase.database();
const userImagesRef = dbRef.ref('Tesda/Twsp_applicants/');
const Auth = firebase.auth();
let user = null;
let userData = null;   
const body = document.body;  
   
Auth.onAuthStateChanged(updateUserStatus);

document.addEventListener("DOMContentLoaded", function(event) {
  
  const preview = document.querySelector('#form-image-preview')
 

  const fileCollection = []; 
 
  document.querySelector('#pictures').addEventListener('change', (e) => {
    const formData = extractFormData('#statusForm');
    while (fileCollection.length) {
      fileCollection.pop();
    }
    [].slice.call(formData.pictures).map(f => fileCollection.push(f));

    renderCollection(fileCollection, preview);
  });

  document.forms.statusForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // const formData = extractFormData('#statusForm');
    // const text = formData.status;
    // formData.status = '';
    sendData(fileCollection)
    setTimeout(() => {
      while (fileCollection.length) {
        fileCollection.pop();
      }
      document.forms.statusForm.reset()
    }, 100);

  });
   

    const renderCollection = (collection, container) => {
    removeAllChildren(container);
    Promise
      .all(collection.map(generatePreviewData))
      .then(imgs => imgs.map((img, i) => {
        img.setAttribute('index', i);
        img.addEventListener('click', e => {
          collection.splice(i, 1);
          renderCollection(collection, container);
        })
        container.appendChild(img);
      }))
  }
  const sendData = ( files) => Promise
    .all(files.map(file =>
      saveImage(file, +(new Date) + '_' + Math.random(), allImagesRef, progress)
    )).then((values) => userImagesRef.child(user.uid).update({
       
      pictures: values,
      timestamp: +(new Date()),
    }));
});
