var isPhone = (window.navigator.platform != "Win32");
var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0) ? true : false;

/**
 * @param String inWndName 新窗口名称
 * @param String html		新窗口路径
 * @param String inAniID	打开动画
 * @param String f
 */
function openNewWin(inWndName, html, inAniID, f){
    if (inAniID == 0) {
        uexWindow.open(inWndName, '0', html, 0, '', '', (f) ? f : 0);
        return;
    }
    if (inAniID) 
        uexWindow.open(inWndName, '0', html, inAniID, '', '', (f) ? f : 0);
    else 
        uexWindow.open(inWndName, '0', html, 10, '', '', (f) ? f : 0);
}

//关闭主窗口名字
function closewin(name){
    uexWindow.evaluateScript(name, 0, 'uexWindow.close();'); //name 为主窗口名
}

/**
 * 关闭窗口
 * @param string n 关闭窗口动画，默认-1
 */
function winClose(n){
    if (n) {
        uexWindow.close(n);
        return;
    }
    if (parseInt(n) == 0) {
        uexWindow.close(n);
        return;
    }
    uexWindow.close(-1);
}



/**
 * 输出loag
 * @param String s 需要输出的信息
 * @param String a 添加的标注信息
 */
function logs(s, a){
    if (typeof s == 'object') {
        s = JSON.stringify(s);
    }
    a = a ? a : "";
    if (!isPhone) {
        console.log(a + s);
    }
    else {
        uexLog.sendLog(a + s);
    }
}

/**
 * localStorage保存数据
 * @param String key  保存数据的key值
 * @param String value  保存的数据
 */
function setLocVal(key, value){
    window.localStorage[key] = value;
}

/**
 * 根据key取localStorage的值
 * @param Stirng key 保存的key值
 */
function getLocVal(key){
    if (window.localStorage[key]) 
        return window.localStorage[key];
    else 
        return "";
}

/**
 * 清除缓存
 * @param Striong key  保存数据的key，如果不传清空所有缓存数据
 */
function clearLocVal(key){
    if (key) 
        window.localStorage.removeItem(key);
    else 
        window.localStorage.clear();
}

/**
 * alert 和 confirm 弹出框
 * @param String str 提示语
 * @param Function callback confirm的回调函数
 */
function $alert(str, callback){
    if (callback) {
        uexWindow.cbConfirm = function(opId, dataType, data){
            if (data == 0) 
                callback();
        }
        uexWindow.confirm('提示', str, ['确定', '取消']);
    }
    else 
        uexWindow.alert('提示', str, '确定');
}





/**
 * 在其他窗口中执行指定主窗口中的代码
 * @param String wn  需要执行代码窗口的名称
 * @param String scr 需要执行的代码
 */
function uescript(wn, scr){
    uexWindow.evaluateScript(wn, '0', scr);
}

/**
 * 在其他窗口中执行指定浮动窗口中的代码
 * @param String wn  需要执行代码浮动窗口所在的主窗口的名称
 * @param String pn  需要执行代码的浮动窗口的名称
 * @param String scr 需要执行的代码
 */
function ueppscript(wn, pn, scr){
    uexWindow.evaluatePopoverScript(wn, pn, scr);
}

/**
 * 判断是否是空
 * @param value
 */
function isDefine(value){
    if (value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof(value) == 'undefined') {
        return false;
    }
    else {
        value = value + "";
        value = value.replace(/\s/g, "");
        if (value == "") {
            return false;
        }
        return true;
    }
}

/**
 * 给DOM对象赋值innerHTML
 * @param String id 对象id或者对象
 * @param String html html字符串
 * @param String showstr 当html不存在时的提示语
 */
function setHtml(id, html, showstr){
    var showval = isDefine(showstr) ? showstr : "";
    if ("string" == typeof(id)) {
        var ele = $$(id);
        if (ele != null) {
            ele.innerHTML = isDefine(html) ? html : showval;
        }
        else {
            alert("没有id为" + id + "的对象");
        }
    }
    else 
        if (id != null) {
            id.innerHTML = isDefine(html) ? html : showval;
        }
}

/**
 * 设置平台弹动效果
 * @param int sta   0=无弹动效果   1=默认弹动效果  2=设置图片弹动
 * @param Function downcb 下拉
 * @param Function upcb   上拖
 */
function setPageBounce(downcb, upcb){
    var s = ['0', '0'];
    uexWindow.onBounceStateChange = function(type, status){
        if (downcb && type == 0 && status == 2) {
            downcb();
        }
        if (upcb && type == 1 && status == 2) {
            upcb();
        }
    }
    uexWindow.setBounce("1");
    if (downcb) {
        s[0] = '1';
        uexWindow.setBounceParams(0, {
            "imagePath": "res://css/project/images/1.png",
            "textColor": "#aaa",
            "levelText": "xxxx",
            "pullToReloadText": "下拉刷新",
            "releaseToReloadText": "释放刷新",
            "loadingText": "加载中，请稍等"
        });
        uexWindow.notifyBounceEvent("0", "1");
    }
    if (upcb) {
        s[1] = '1';
        uexWindow.setBounceParams(1, {
            "imagePath": "res://css/project/images/1.png",
            "textColor": "#aaa",
            "levelText": "xxxx",
            "pullToReloadText": "上拉刷新",
            "releaseToReloadText": "释放刷新",
            "loadingText": "加载中，请稍等"
        });
        uexWindow.notifyBounceEvent("1", "1");
    }
    uexWindow.showBounceView("0", "#FFF", s[0]);
    uexWindow.showBounceView("1", "#FFF", s[1]);
}

/***
 * 使弹动重置为初始位置
 * @param String type 弹动的类型 0-顶部弹动  1-底部弹动
 */
function resetBV(type){
    uexWindow.resetBounceView(type);
}

/**
 * 显示加载框
 * @param String mes 显示的提示语
 * @param String t  毫秒数 窗口存在时间 有的话显示框不显示那个“圈”，并且在t时间后消失
 */
function $toast(mes, t){
    uexWindow.toast(t ? '0' : '1', '5', mes, t ? t : 0);
}

/**
 * 手动关闭加载框
 */
function $closeToast(){
    uexWindow.closeToast();
}


/**
 * getJSON请求数据的错误回调函数
 * @param {Object} err 返回的错误对象
 */
function getJSONError(err){
    $closeToast();
    resetBV(0);
    resetBV(1);
    if (err.message == 'network error!') {
        alert('网络未连接');
    }
    else 
        if (err.message == 'json parse failed!') {
            alert('json解析失败');
        }
        else 
            if (err.message == 'file does not exist!') {
                alert('文件不存在');
            }
            else 
                if (err.message == 'read file failed!') {
                    alert('文件读取错误');
                }
                else {
                    alert('发现未知错误');
                }
}





/**设置安卓back和menu按键事件监听
 * @b: back键，1为监听。
 * @m: menu键，1为监听。
 * @cb1: back键监听处理回调方法。
 * @cb2: menu键监听处理回调方法。
 */
function addKeyListener(b, m, cb1, cb2){
    uexWindow.onKeyPressed = function(keyCode){
        if (keyCode == 0) {
            if (cb1) 
                cb1();
            //uexWidget.finishWidget(''); //退出应用
        }
        else {
            if (cb2) 
                cb2();
        }
    }
    if (b) 
        uexWindow.setReportKey('0', '1');
    if (m) 
        uexWindow.setReportKey('1', '1');
}



