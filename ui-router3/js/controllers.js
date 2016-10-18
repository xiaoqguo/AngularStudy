/**
 * Created by guozhengmao on 16/10/5.
 */
var controllers=angular.module("controllers",[])

//controllers.controller('bookListCtl',function($scope,$state){
//
//});
controllers.controller('bookListCtl',['$scope','$state',function($scope,$state){
    $scope.books=books;
    $scope.musices=musices;
    $scope.selectBook=function(index){
        $state.go('home.bookDetail',{name:books[index].name});
        //alert($scope.books[index].name)
        //$state.go('.bookDetail',{book:books[index]});
    }

}]);
controllers.controller('musicListCtl',['$scope',function($scope){
    $scope.musices=musices;
}]);
controllers.controller('bookDetailCtl',['$scope','$stateParams',function($scope,$stateParams){
    $scope.name=$stateParams.name;
}]);
controllers.controller('registerCtl',function($scope,registerFactory){
    $scope.object=registerFactory.getter();

});
controllers.controller('rephonenumCtl',function($scope,$state,registerFactory){
    $scope.object=registerFactory.getter();
    $scope.object.step=1;
    $scope.nextAction=function(){
        $state.go('home.register.repwd');
    }
});
controllers.controller('repwdCtl',function($scope,registerFactory){
    $scope.object=registerFactory.getter();
    $scope.object.step=2;
});
//controllers.controller('musicListCtl',function($scope){
//   $scope.musices=musices;
//});