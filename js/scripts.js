$(document).ready(function() {
  $("#entername").submit(function(){
    var nameInput = $("input#username").val();
    $("#letter").append(nameInput);
    event.preventDefault();
    $(".styledletter").show();
  })
});
