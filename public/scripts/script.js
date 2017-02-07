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

  vm.ed = function(){
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: 'ModalController',
      controllerAs: 'modal',
      templateUrl: 'continuinged.html',
      fullscreen: useFullScreen,
      clickOutsideToClose: true,
      ariaLabel: 'Good'
    });
  }
  vm.ssmn = function(){
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: 'ModalController',
      controllerAs: 'modal',
      templateUrl: 'ssmn.html',
      fullscreen: useFullScreen,
      clickOutsideToClose: true,
      ariaLabel: 'Good'
    });
  }
  vm.tv = function(){
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: 'ModalController',
      controllerAs: 'modal',
      templateUrl: 'tv.html',
      fullscreen: useFullScreen,
      clickOutsideToClose: true,
      ariaLabel: 'Good'
    });
  }
  vm.olympic = function(){
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: 'ModalController',
      controllerAs: 'modal',
      templateUrl: 'olympic.html',
      fullscreen: useFullScreen,
      clickOutsideToClose: true,
      ariaLabel: 'Good'
    });
  }


});
myApp.controller('ModalController', function(){


});
