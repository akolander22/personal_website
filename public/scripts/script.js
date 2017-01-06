$( document ).ready(function() {
    console.log( "ready!" );

    $("#aboutMe").click(function(){
      $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 1000);
    });
    $("#pastProjects").click(function(){
      $('html, body').animate({
        scrollTop: $("#projects").offset().top
      }, 1000);
    });
});
