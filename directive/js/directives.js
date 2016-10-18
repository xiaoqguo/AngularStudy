/**
 * Created by guozhengmao on 16/10/3.
 */
app.directive("hello1",function(){
   return {
       restrict:'E',
       template:'<div>hello directive</div>',
       replace:true
   }
});
app.directive("hello2",function(){
    return {
        restrict:'E',
        templateUrl:'template/template1.html',
        replace:true
    }

});
//设置ng-transclude告诉angular内嵌内容显示的位置
app.directive("hello3",function(){
    return {
        restrict:'E',
        transclude:true,
        template:'<div>hello directive<div ng-transclude></div></div>'
    }
});
app.directive('loader1',function(){
    return{
        restrict:'AE',
        link:function(scope,element){
            element.bind("mouseenter",function(){
                scope.loadData();
                scope.$apply();
            })
        }
    }
});
app.directive('loader2',function(){
   return{
       restrict:'AE',
       link:function(scope,element,attrs){
           element.bind('mouseenter',function(){
               scope.$apply(attrs.howtoload);
           })

       }
   }
});
//directive内的独立scope
app.directive("hello4",function(){
    return {
        restrict:"AE",
        template:'<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace:true
    }
});
app.directive("hello5",function(){
    return {
        restrict:'AE',
        scope:{
            flavor:"@"
        },
        template:'<div>{{flavor}}</div>'
    }
});
app.directive("hello6",function(){
   return {
       restrict:'AE',
       scope:{
           flavor:"="
       },
       template:'<input type="text" ng-model="flavor">'
   }
});
app.directive("greeting",function(){
   return {
       restrict:'AE',
       scope:{
           greet:'&'
       },
       templateUrl:'template/template2.html'

   }
});