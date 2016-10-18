/**
 * Created by guozhengmao on 16/10/5.
 */
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'This is the home.';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Here you can know everything ABOUT us.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! For more information see below.';
});