var wrapper = document.getElementById("signature-pad");
var clearButton = wrapper.querySelector("[data-action=clear]");
var changeColorButton = wrapper.querySelector("[data-action=change-color]"); 
var savePNGButton = wrapper.querySelector("[data-action=save-png]"); 
var canvas = wrapper.querySelector("canvas");
var signaturePad = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: 'rgb(255, 255, 255)'
});

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);

  // This part causes the canvas to be cleared
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  // This library does not listen for canvas changes, so after the canvas is automatically
  // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
  // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
  // that the state of this library is consistent with visual state of the canvas, you
  // have to clear it manually.
  signaturePad.clear();
}

// On mobile devices it might make more sense to listen to orientation change,
// rather than window resize events.
window.onresize = resizeCanvas;
resizeCanvas();

function download(dataURL, filename) {
  if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1) {
    window.open(dataURL);
  } else {
    var blob = dataURLToBlob(dataURL);
    var url = window.URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
  }
}

// One could simply use Canvas#toBlob method instead, but it's just to show
// that it can be done using result of SignaturePad#toDataURL.
function dataURLToBlob(dataURL) {
  // Code taken from https://github.com/ebidel/filer.js
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

clearButton.addEventListener("click", function (event) {
  signaturePad.clear();
});
  

savePNGButton.addEventListener("click", function (event) {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = signaturePad.toDataURL();
    download(dataURL, "signature.png");
  }
});
 















// <script>

    
// var firebaseConfig = {
//   apiKey: "AIzaSyD__F-N2U7KViRAxUEaNDz3P_Fp63MrPzk",
//   authDomain: "sisascb.firebaseapp.com",
//   databaseURL: "https://sisascb.firebaseio.com",
//   projectId: "sisascb",
//   storageBucket: "sisascb.appspot.com",
//   messagingSenderId: "616128933101",
//   appId: "1:616128933101:web:82691722438e08c7d070e4",
//   measurementId: "G-56W55HQ6QK"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig); 


//   var fileButton = document.getElementById('fileButton');

//   fileButton.addEventListener("change",function(e){
//     var file= e.target.files[0];
//     //create storage ref to the firebase storage
//     var storageRef = firebase.storage().ref('Ched_applicants signature').child(file.name);
//     var task = storageRef.put(file);
//     task.on("state_changed",function(snapshot){
//         var percentage= (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
//         if(percentage==100){
//             storageRef.getDownloadURL().then(function (url) {
//               // You will get the Url here.
//               var firebaseRef = firebase.database().ref("Ched/Ched Signature");
//               firebaseRef.push(url).then(function(){
//                 alert("Image Uploaded and also updated to the database");
//             });
//             });
//         }
//     });
//   });
// </script>