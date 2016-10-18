/**
 * Created by guozhengmao on 16/10/5.
 */
var app=angular.module('index-app',['ui.router','controllers']);


app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url:"/home",
            templateUrl:'views/home.html'

        })

        .state('home.bookList',{
            url:'/bookList',
            templateUrl:'views/bookList.html',
            controller:'bookListCtl'
        })

        .state('home.musicList',{
            url:'/musicList',
            templateUrl:'views/musicList.html',
            controller:'musicListCtl'
        })
        .state('home.register',{
            url:'/register',
            templateUrl:'views/register/register.html',
            controller:'registerCtl'
        })
        .state('home.register.rephonenum',{
            url:'/rephonenum',
            templateUrl:'views/register/rephonenum.html',
            controller:'rephonenumCtl'
        })
        .state('home.register.repwd',{
            url:'/repwd',
            templateUrl:'views/register/repwd.html',
            controller:'repwdCtl'
        })
        //.state('home.bookDetail',{
        //    url:'/bookDetail/:name',
        //    templateUrl:'views/bookDetail.html',
        //    controller:'bookDetailCtl'
        //})
});