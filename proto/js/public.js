//手机适配
window.onresize = function () {
    console.log("onresize");
    if (window.devicePixelRatio == 1) {
        document.getElementsByTagName('body')[0].style.maxWidth = "640px"
        window.location.reload()
    }
}
var pixelRatio = 1 / window.devicePixelRatio;
if (window.devicePixelRatio > 1) {
    // 获取html节点
    var html = document.getElementsByTagName('html')[0];
    // 获取屏幕宽度
    var pageWidth = html.getBoundingClientRect().width;
    // 屏幕宽度 / 固定数值 = 基准值
    html.style.fontSize = pageWidth / 37.5 + "px";
} else {
    var html = document.getElementsByTagName('html')[0];
    // 获取屏幕宽度
    html.style.maxWidth = 768 + 'px'
    html.style.fontSize = 20.48 + "px";
    html.style.margin = "0 auto";
}

//读取cookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}
//删除cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
function delCookie2(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "='';path=/;domain=99114.cn;expires=" + exp.toGMTString();
        document.cookie = name + "='';path=/;domain=99114.com;expires=" + exp.toGMTString();
    }
}
function numMulti(num1, num2) {
    var baseNum = 0;
    try {
        baseNum += num1.toString().split(".")[1].length;
    } catch (e) {
    }
    try {
        baseNum += num2.toString().split(".")[1].length;
    } catch (e) {
    }
    return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
};

function numAdd(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    var precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;// 精度
    return ((num1 * baseNum + num2 * baseNum) / baseNum).toFixed(precision);
};

function numSub(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    var precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
    return (Math.round(num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
}

(function () {
    var type = "image/x-icon";
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.type == type) {
            return;
        }
    }
    var link = document.createElement("link");
    //<link rel="icon" type="image/x-icon" href="/static/images/favicon.ico">
    link.rel = "icon";
    link.type = type;
    link.href = "/static/images/favicon.ico";
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link)
})();

(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        //bp.src = 'https://jspassport.ssl.qhimg.com/11.0.1.js?442aac6751c4e2a7c7981801a6e8f9f1';
        bp.src = 'https://s.ssl.qhres.com/ssl/ab77b6ea7f3fbf79.js?442aac6751c4e2a7c7981801a6e8f9f1';
    } else {
        //bp.src = 'http://js.passport.qihucdn.com/11.0.1.js?442aac6751c4e2a7c7981801a6e8f9f1';
        bp.src = "http://s5.qhres.com/static/ab77b6ea7f3fbf79.js?442aac6751c4e2a7c7981801a6e8f9f1";
    }
    bp.id = "sozz";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?dbdd3eb2d9f4fb644259abf05164fda7";
    var head = document.getElementsByTagName("head")[0];
    //head.append(hm);
    head.appendChild(hm)
})();


var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?15abe28281749a50a876f9462690474b";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

//店铺是否有优惠券
var shopCoupon = "";

//微信分享
$(document).ready(function () {
    try {
        //判断浏览器
        var timestamp = "";
        var pictureUrl = $('#pictureUrl').val();
        //console.log(pictureUrl);
        var nonceStr = "";
        var signature = "";
        var url = window.location.href;
        var html = $.ajax({
            type: "post",
            dataType: "json",
            url: "/wxShare/getSign",
            data: {url: url},
            async: false
        }).responseText;
        var datahtml = {};

        if (html != "") {
            datahtml = eval("(" + html + ")");
        }
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: datahtml.appid, // 必填，公众号的唯一标识
            timestamp: datahtml.time, // 必填，生成签名的时间戳
            nonceStr: datahtml.nonce, // 必填，生成签名的随机串
            signature: datahtml.sign,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline',
                'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        if (pictureUrl == null || pictureUrl == '' || typeof(pictureUrl) == "undefined") {
            pictureUrl = "http://m.99114.com/static/images/dan_logo.png";
        } else {
            var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
            var pictureUrl2 = urlReg.exec(pictureUrl);
            if (pictureUrl2 == "static.99114.cn" || pictureUrl2 == "static.99114.com") {
                pictureUrl = "http://m.99114.com/static/images/dan_logo.png";
            }
        }
        wx.ready(function () {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            wx.onMenuShareTimeline({
                title: shopCoupon == "" ? $(document).attr("title") : "发现一个好店铺，快来抢优惠券啦！", // 分享标题
                link: url,
                imgUrl: pictureUrl // 分享图标
            });
            // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
            wx.onMenuShareAppMessage({
                title: shopCoupon == "" ? $(document).attr("title") : "【今日活动全场满减】" + $(document).attr("title"), // 分享标题
                link: url,
                imgUrl: pictureUrl, // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                desc: $('meta[name="description"]').attr("content"),
            });
        });
    } catch (e) {
    }
});

//区分产业带
$(document).ready(function () {
    try {
        var domainUrl = getCookie("domainUrl");
        if (domainUrl != null && domainUrl != "" && (domainUrl != "webmobile.99114.cn" || domainUrl != "m.99114.com")) {
            if ($(".moreOperater") && $(".moreOperater").length > 0) {
                $(".moreOperater").children(".moreOperaterCon").each(function (index) {
                    if (index == 2) {
                        $(this).attr("href", "http://" + domainUrl);
                    } else {
                        $(this).css("display", "none");
                    }
                });
            } else/* if($(".floating-layer") && $(".floating-layer").length>0)*/{
                /*$(".erWeiMa").css("display","none");
                 $(".purchase-bill").css("display","none");
                 $(".return-index").attr("href","http://"+domainUrl);*/
                delCookie2('domainUrl');
            }
        }
    } catch (e) {
        console.log(e);
    }
});
