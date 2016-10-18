/**
 * Created by guozhengmao on 16/10/3.
 */
var app=angular.module("routerTest",["ngRoute","bookStoreCtrls"]);
app.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
        templateUrl:'tpls/bookList.html',
        controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});