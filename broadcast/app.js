/**
 * Created by ldjt on 16/10/15.
 */
var app=angular.module('mydirective-app',[]);

app.controller('parentCtr',function($scope){

    //接收子scope传递上来的Ctr1NameChange事件。
    $scope.$on('Ctr1NameChange',function(event,msg){
        //向所有子scope广播Ctr1NameChangeFromParrent 事件
        $scope.$broadcast("Ctr1NameChangeFromParrent", msg);
    })

})
app.controller('childCtr1',function($scope){
    $scope.name='';
    $scope.click=function(){
        alert($scope.name);
    }
    $scope.change=function(name){
        //向上层scope提交Ctr1NameChange 事件
        $scope.$emit('Ctr1NameChange',name);
    }
})
app.controller('childCtr2',function($scope){

    //接收父scope广播Ctr1NameChangeFromParrent
    $scope.$on('Ctr1NameChangeFromParrent',function(event,msg){
        $scope.ctr1Name=msg;
    })
})