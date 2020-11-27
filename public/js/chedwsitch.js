function switchView(view){
    $.get({
       url:view,
       cache: false,
     })
     .then(function(data){
     $("#content").html(data);
 });
} 