function ajaxGet(url,fun) {
    var xmlhttp;
    //第一步 创建 XMLHttpRequest对象
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //第二步 向服务端发送请求
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    //第三步 接收回调数据
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse( xmlhttp.responseText)
            // console.log(str);
            fun(obj)
        }
    }
}

