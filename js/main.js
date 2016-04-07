$(document).ready( function() {

  $("#meow").click( function() {
    $("#animals").append("<img class='animal' src='images/cat.png' alt='He Peek'/> ");
  });

  $("#bunbun").click( function() {
    $("#animals").append("<img class='animal' src='images/bunny.png' alt='He Hop'/> ");
  });

  $(".animal").click( function() {
    
    this.css('visibility', 'hidden')
  });

});
