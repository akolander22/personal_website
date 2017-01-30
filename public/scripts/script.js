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

myApp.controller('MainController', function($mdDialog, $mdMedia){
  var vm = this;

  vm.modal = function(){

    console.log('clicked it');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: 'ModalController',
      controllerAs: 'modal',
      templateUrl: 'public/views/continuinged.html',
      fullscreen: useFullScreen,
      clickOutsideToClose: true,
      ariaLabel: 'Good'
    });
  }
});
myApp.controller('ModalController', function($mdDialog, $mdMedia){


})
