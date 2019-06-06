hybrid开发，第一件事划清h5与native之间的界线:
第一、与业务相关的东西，native坚决不做
第二、非业务性的东西，前端和native都可以做则由前端来做
第三、前端做不了的东西由native做
第四、

成熟：
react + native
weex

H5与Native基本交互：
/*
    1、Javascript Core == JS Bridge
    2、URl Schema
*/
window.Hybrid = window.Hybrid || {};
var NativeBridge = {};
var _getHybridUrl = function() {
    var k,paramStr = '',
        url = 'hybrid://',
        flag = '?';
    url += params.tagname; //时间戳，防止url不生效

    if(params.callback) {
        flag = '&';
        url += '?callback=' + params.callback;
    }
    if(params.param) {
        paramStr = typeof params.param == 'object' ? JSON.stringify(params.param) : xx;
        url = url + flag + 'param=' + encodeURIComponent(paramStr);
    }
    return url;
}
var bridgePostMsg = function(params) {
    var url = _getHybridUrl(params);
    //兼容ios6
    var ifr = $('<iframe style="display:none;" src="' + url + '"/>');
    console.log(params.tagname + '-hybrid请求发出-' + new Date().getTime() + 'url:' + url);
    if($.os.android) {
        setTimeOut(function() {
            $('body').append(ifr);
        })
    } else {
        $('body').append(ifr);
    }

    //这样会阻断第二次请求
    setTimeout(function() {
        ifr.remove();
        ifr = null;
    },1000);
}
var requestHybrid = function(params) {
    if(!params.tagname) {
        alert("必须包含tagname");
    }
    var tt = (new Date().getTime())+'_'+_.uniqueId()+'_';
    var t = 'hybrid_' + params.tagname + '_' + tt;
    var tmpFn;
    if(params.callback) {
        temFn = params.callback;
        params.callback = t;
        window.Hybrid[t] = function(data) {
            tmpFn(data);
        }
    }
    //解析callback，生成唯一的callbackid，将一个函数和一个字符串映射起来
    //callbackid:function()
    bridgePostMsg(params);
}

NativeBridge.getAddress = function(callback) {
    //bridge在这个函数里面要有H5与Native通信的方式,抹平差异
    requestHybrid({
        tagname: 'getAdresslist',
        param: {},
        callback: function(data) {
            callback(data);
        }
    })
}

NativeBridge.getAddress

//收口
//第一层收口
$.get(url,param,function() {

})
/*
1、公共参数,设备号,手机
2、统计需求,ajax接口响应速度
3、统一回调处理,Server错误码处理
4、.....
*/
//url => domain.com?flag=叶小钗
//=>业务架构层做处理
//请求参数
var commonData =  {
    flag: '叶小差',
    id: '设备号,
    ip: ',
    geo: '
}
//ajax => data => 城市 => store => storage

【Hybrid核心交互】

1、跳转

    forward

    动画

location.herf = 'url';

var Location = function(url) {
    //..
    location.herf = url;
    //..
}

var t = setTimeout()
var arr = []
var SetTimeout = function() {

}

var forward = function() {

}

2、全局化
    back的实现
    History乱了
    Native Path化
/**
    订单填写 -> server中间跳转页面 -> 支付成功
    后退<--
    订单填写页--过期了！产品不允许
    1、定制化后退，直接到大首页
    2、本页面，重新渲染页面

**/

3、入口的设计
鉴权的矛盾
体系化

【账号体系】
请求鉴权怎么做
    前后分离
    Webview中的鉴权

【登录的设计-公共业务】
https://github.com/yexiaochai/Hybrid
