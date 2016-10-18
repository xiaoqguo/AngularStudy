/**
 * Created by guozhengmao on 16/10/5.
 */
var app=angular.module("BSApp",["ui.router"]);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/main');
    $stateProvider.state('main',{
       url:'/main' ,
        templateUrl:'tpls/home.html'
    });
}]);
//app.config(function($stateProvider,$urlRouterProvider){
//    $urlRouterProvider.otherwise('/index');
//    $stateProvider
//        .state('index',{
//            url:'/index',
//            views:{
//                '':{
//                    templateUrl:'tpls/home.html'
//                },
//                'main@index':{
//                    templateUrl:'tpls/loginForm.html'
//                }
//            }
//        })
//
//});