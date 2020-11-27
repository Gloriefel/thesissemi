(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;


	/************** Toggle Menu *********************/
	$('a.toggle-menu').click(function(){
        $(".menu").slideToggle(400);
		return false;
    });




    /************** Open Different Pages *********************/
	$(".menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		return false;
	});

	$(".menu a.homebutton").click(function(){
		$(".menu").slideUp();
	});


	$(window).resize(function(){
		if ($(window).width() <= 769){	
			$(".menu a").click(function(){
				$(".menu").hide();
				return false;
			});
		}	
	});

	/*
	var dt = window.atob('IC0gPGEgcmVsPSJub2ZvbGxvdyIgaHJlZj0iaHR0cDovL3d3dy50ZW1wbGF0ZW1vLmNvbS9wcmV2aWV3L3RlbXBsYXRlbW9fNDEwX2NpcmNsZSI+Q2lyY2xlPC9hPiBieSA8YSByZWw9Im5vZm9sbG93IiBocmVmPSJodHRwOi8vd3d3LnRlbXBsYXRlbW8uY29tIj5GcmVlIFRlbXBsYXRlczwvYT4='); 
	var y = document.getElementById('footer-text');
	y.innerHTML += dt;
	*/

	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


})(window, jQuery);


const response = document.querySelector('.response');

const socket = io();
socket.on('smsStatus', function(data){
	response.innerHTML = 'Text message sent to '+ data.number 
})
  
function tdsendsms(key){ 
    var  qualifiedRef = firebase.database().ref().child("Ched/Qualified_Scholars").child(key); 
	qualifiedRef.on("value", function(snapshot) {  
		const number = snapshot.val().mnumber
        const text = "Good Day!  Sir/Ma'am " + snapshot.val().firstname +"  " + snapshot.val().lastname + ", Congratulations! You are now a certified CHED scholar. "
		fetch('/', {
			method: 'post',
			headers:{
				'Content-type': 'application/json'
			},
			body: JSON.stringify({number: number, text: text})	
		})
		.then(function(res){
			console.log(res)
			document.getElementById('classify').innerHTML =  "<dialog style='width:330px; height:150px;' id='"+number+"'> <br> <div class='text-center'>  <p class='p-0 m-0'>" + snapshot.val().lastname + " add to </p> <div class='dropdown'> <button class='btn btn-secondary dropdown-toggle' style='text-transform:unset; font-size:16px;' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>   Type of StuFAPS </button>   <div class='dropdown-menu' aria-labelledby='dropdownMenuButton' >   <label class='px-3 text-dark'><input type='checkbox' id='td' class='p-0 mr-2' style='text-transform:unset;' name='scholarship'> CHED-TD Scholar </label>  <label class='px-3 text-dark' ><input type='checkbox' id='fs' class='p-0 mr-2' style='text-transform:unset;' name='scholarship' > CHED-FS Scholar </label> <label class='px-3 text-dark' ><input type='checkbox' id='half' class='p-0 mr-2' style='text-transform:unset;' name='scholarship' > CHED-Half Scholar </label> <label class='px-3 text-dark'><input type='checkbox' id='ps' class='p-0 mr-2' style='text-transform:unset;' name='scholarship' > CHED-PS Scholar </label>  </div></div>  </div>  </dialog>";
			$("#td").click(function(){ 
				var qualified = firebase.database().ref().child("Ched/Qualified_Scholars").child(key); 
				// firebase refs
			  var officialscholars = firebase.database().ref().child("Ched/Official_Scholars/TD");   
			  qualified.on("value", function(snapshot) {
				var scholars = snapshot.val();
				officialscholars.push(scholars);
				console.log(qualified + 'removed');
				// qualified.remove();
				$("dialog#"+number+"").fadeOut();  
				document.getElementById('classify').innerHTML = "<p class='p-0 m-0 font-weight-bold'>" + snapshot.val().lastname + "  was added on <i>CHED-TD</i> Scholar List.  </p> "
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});
			  
			});
			
			$("#fs").click(function(){ 
				var qualified = firebase.database().ref().child("Ched/Qualified_Scholars").child(key); 
				// firebase refs
			  var officialscholars = firebase.database().ref().child("Ched/Official_Scholars/FS");   
			  qualified.on("value", function(snapshot) {
				var scholars = snapshot.val();
				officialscholars.push(scholars);
				console.log(qualified + 'removed');
				// qualified.remove();
				$("dialog#"+number+"").fadeOut();  
				document.getElementById('classify').innerHTML = "<p class='p-0 m-0 font-weight-bold'>" + snapshot.val().lastname + "  was added on <i>CHED-FS</i> Scholar List.  </p> "
				
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});
			  
			});
			
			$("#half").click(function(){ 
				var qualified = firebase.database().ref().child("Ched/Qualified_Scholars").child(key); 
				// firebase refs
			  var officialscholars = firebase.database().ref().child("Ched/Official_Scholars/HALF");   
			  qualified.on("value", function(snapshot) {
				var scholars = snapshot.val();
				officialscholars.push(scholars);
				console.log(qualified + 'removed');
				// qualified.remove();
				$("dialog#"+number+"").fadeOut();  
				document.getElementById('classify').innerHTML = "<p class='p-0 m-0 font-weight-bold'>" + snapshot.val().lastname + "  was added on <i>CHED-HALF</i> Scholar List.  </p> "
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});
			  
			});
			
			$("#ps").click(function(){ 
				var qualified = firebase.database().ref().child("Ched/Qualified_Scholars").child(key); 
				// firebase refs
			  var officialscholars = firebase.database().ref().child("Ched/Official_Scholars/PS");   
			  qualified.on("value", function(snapshot) {
				var scholars = snapshot.val();
				officialscholars.push(scholars);
				console.log(qualified + 'removed');
				// qualified.remove();
				$("dialog#"+number+"").fadeOut();  
				document.getElementById('classify').innerHTML = "<p class='p-0 m-0 font-weight-bold'>" + snapshot.val().lastname + "  was added on <i>CHED-PS</i> Scholar List.  </p> "
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});
			  
			});
			
		})
		.catch(function(err){
			console.log(err)
		});
	}); 
}
 
function sendsms(key){ 
    var  qualifiedRef = firebase.database().ref().child("Tesda/Qualified_Scholars").child(key); 
	qualifiedRef.on("value", function(snapshot) {  
		const number = snapshot.val().celno
        const text = "Good Day!  Sir/Ma'am " + snapshot.val().first +"  " + snapshot.val().last  + ", Congratulations! You are now a certified TESDA scholar. "
		fetch('/', {
			method: 'post',
			headers:{
				'Content-type': 'application/json'
			},
			body: JSON.stringify({number: number, text: text})	
		})
		.then(function(res){
			console.log(res)
			document.getElementById('classify').innerHTML =  "<dialog style='width:330px; height:150px;' id='"+number+"'> <br> <div class='text-center'>  <p class='p-0 m-0'>" + snapshot.val().last + " add to </p> <div class='dropdown'> <button class='btn btn-secondary dropdown-toggle' style='text-transform:unset; font-size:16px;' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>   Type of TESDA Scholarship </button>   <div class='dropdown-menu' aria-labelledby='dropdownMenuButton' >   <label class='px-3 text-dark'><input type='checkbox' id='twsp' class='p-0 mr-2' style='text-transform:unset;' name='scholarship'> TEDSA-TWSP Scholar </label>  <label class='px-3 text-dark' ><input type='checkbox' id='step' class='p-0 mr-2' style='text-transform:unset;' name='scholarship' > TEDSA-STEP Scholar </label>  </div></div>  </div>  </dialog>";
			$("#twsp").click(function(){ 
				var qualified = firebase.database().ref().child("Tesda/Qualified_Scholars").child(key); 
				// firebase refs
			  var officialscholars = firebase.database().ref().child("Tesda/Official_Scholars/TWSP");   
			  qualified.on("value", function(snapshot) {
				var scholars = snapshot.val();
				officialscholars.push(scholars);
				console.log(qualified + 'removed');
				// qualified.remove();
				$("dialog#"+number+"").fadeOut();  
				document.getElementById('classify').innerHTML = "<p class='p-0 m-0 font-weight-bold'>" + snapshot.val().last + "  was added on <i>TESDA-TWSP</i> Scholar List.  </p> "
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});
			  
			});
			
			$("#step").click(function(){ 
				var qualified = firebase.database().ref().child("Tesda/Qualified_Scholars").child(key); 
				// firebase refs
			  var officialscholars = firebase.database().ref().child("Tesda/Official_Scholars/STEP");   
			  qualified.on("value", function(snapshot) {
				var scholars = snapshot.val();
				officialscholars.push(scholars);
				console.log(qualified + 'removed');
				// qualified.remove();
				$("dialog#"+number+"").fadeOut();  
				document.getElementById('classify').innerHTML = "<p class='p-0 m-0 font-weight-bold'>" + snapshot.val().last  + "  was added on <i>TESDA-STEP</i> Scholar List.  </p> "
				
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});
			  
			});
			 
		})
		.catch(function(err){
			console.log(err)
		});
	}); 
}