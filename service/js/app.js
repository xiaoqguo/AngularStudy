/**
 * Created by guozhengmao on 16/10/6.
 */
var auctionBidPath='http://192.168.1.231/auction/auctionBid.html';
var app=angular.module('service_app',[]);

app.service('textService',function(){
    this.textFunc=function(x){
        return x+10;
    }
})
//嵌套了另外一个service
app.service('nestService1',function(textService){
    this.getNum=function(x){
        var y=textService.textFunc(x);
        return y+100;
    }
});
app.service('requestNewActivitySV',function($http){
    //this.seccess;
    var path="https://www.gkewang.com/gkw_activity/activity_service/api/v1/activities"
    var doRequest=function(username,path){
        return $http({
            method:'GET',
            url:path
        });
    }

    return {
        userList:function(username){
            return doRequest(username,path);
        }
    }
});
app.controller('controller',function($scope,$timeout,nestService1,requestNewActivitySV,auctionBdiFormIndexSV,auctionBidSV){
    auctionBdiFormIndexSV.initService($scope,auctionBidSV);
    $scope.num=0;
    $scope.x=0;
    $scope.showMessage=function(msg){
        alert(msg);
    }
    $scope.data={
        highestScore:0
    };
    $scope.clickAction=function(){
        $scope.num=nestService1.getNum($scope.x);
        //$scope.num=textService.textFunc($scope.x);
        requestNewActivitySV.userList('xx')
            .success(function(data,status){
                console.log(data);
            })
        ;
        auctionBdiFormIndexSV.doPost('paimai003',2000);
    }
});
app.service('auctionBidSV',function($http){
    this.doPost=function(bidSuccFunc,bidFailFunc,errorFunc,pid,price){
        $http({
            method:'POST',
            url:auctionBidPath,
            params:{
                productId:pid,
                price:price
            }
        }).success(function(data,status){
            console.log(data);
            if(data.success){
                bidSuccFunc();
            }else{
                bidFailFunc();
            }
        }).error(function(data, status, headers, config) {
            errorFunc(data);
        });
    }
});
app.service('auctionBdiFormIndexSV',function($http){
    var scope={};
    var sv={};
    this.initService=function($scope,service){
        scope=$scope;
        sv=service;
    }
    var bidSuccessFunc=function(data){
        scope.data=data;
    }
    var bidFaildsFunc=function(msg){
        scope.showMessage(msg);
    }
    var bidErrorFunc=function(data){
        scope.showMessage('服务器异常');
    }
    this.doPost=function(pid,price){
        sv.doPost(bidSuccessFunc,bidFaildsFunc,bidErrorFunc,pid,price);
    }
})
