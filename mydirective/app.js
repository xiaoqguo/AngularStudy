/**
 * Created by ldjt on 16/10/16.
 */
var app=angular.module('myApp',[]);
app.controller('myCtr',function($scope,$timeout){
    $timeout(function(){
        $scope.imagePath='images/paimai1018001_737b4dc026774578afeabec4c4c9f6c0_Apple iPhone7 detail.png'
    },10000);
    $scope.clickAction=function(){
        $scope.cshowBgAniFunc();
    }
    $scope.click2Action=function(){
        $scope.chideBgAniFunc();
    }
})