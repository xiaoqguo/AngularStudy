var APP = angular.module('APP', ['ngAnimate','ui.router']);

APP.run(function($animate) {
    $animate.enabled(true);
});

APP.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "tpl/home.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "tpl/contact.html",
            controller: function($scope) {
                $scope.leftorright = true;
            }
        })
        .state('about', {
            url: "/about",
            templateUrl: "tpl/about.html"
        });
});

APP.controller('MainCtrl', function ($scope) {
    $scope.leftorright = false;
});