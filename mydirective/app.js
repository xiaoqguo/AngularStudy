/**
 * Created by ldjt on 16/10/16.
 */
var app=angular.module('myApp',[]);
app.controller('myCtr',function($scope){
    $scope.clickAction=function(){
        $scope.cshowBgAniFunc();

    }
})