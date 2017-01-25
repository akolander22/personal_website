angular.module('portfolioApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    controller: 'MainController',
    controllerAs: 'main'
  })

  $locationProvider.html5Mode(true);
})
