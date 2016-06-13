var myPage = angular.module('myPage' , ['ui.router', 'ui.bootstrap', 'ngAnimate']);

myPage.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "../partials/Static/main.html"
    })
    
});
