/**
 * Created by ldjt on 16/10/19.
 */
app.directive('gWebImageDir',function(){
    return {
        restrict:'AE',
        transclude:true,
        scope:{
            imgPath:'='
        },
        controller:function(){

        },
        templateUrl:'tpls/GwebImageDir.html'
    }
});