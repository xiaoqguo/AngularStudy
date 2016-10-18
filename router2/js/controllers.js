/**
 * Created by guozhengmao on 16/10/3.
 */
var bookStoreCtrls = angular.module('bookStoreCtrls', []);
//app.controller('HelloCtrl', ['$scope',
//    function($scope) {
//        $scope.greeting = {
//            text: 'Hello'
//        };
//    }
//]);
//app.controller('BookListCtrl', ['$scope',
//    function($scope) {
//        $scope.books =[
//            {title:"《Ext江湖》",author:"大漠穷秋"},
//            {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
//            {title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
//        ]
//    }
//]);
bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books =[
            {title:"《Ext江湖》",author:"大漠穷秋"},
            {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
            {title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
        ]
    }
]);