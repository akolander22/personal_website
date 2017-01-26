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
    $("#toProjects").click(function(){
      $('html, body').animate({
        scrollTop: $("#projects").offset().top
      }, 1000);
    });
    $("#top").click(function(){
      $('html, body').animate({
        scrollTop: $("#head").offset().top
      }, 1000)
    });
    $("#bottom").click(function(){
      $('html, body').animate({
        scrollTop: $("#head").offset().top
      }, 1000)
    });
});

var myApp = angular.module('portfolio', ['ngRoute', 'ngMaterial']);

myApp.controller('MainController', function(){

});
