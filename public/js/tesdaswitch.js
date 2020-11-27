function switchView(view){
    $.get({
       url:view,
       cache: false,
     })
     .then(function(data){
     $("#tesdacontent").html(data);
 });
} 