/**
 * Created by guozhengmao on 16/10/6.
 */
app.factory('registerFactory',function(){
    var object={phone:"189*****",pwd:"ddddqqqq",investCode:3333,step:0};
    var _setter=function(data){
        object=data;
    }
    var _getter=function(){
        return object;
    }

    return {
        setter:_setter,
        getter:_getter
    };

});