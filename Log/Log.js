window.onload = function() {
    var tap1 = document.getElementById('tap1');
    var tap2 = document.getElementById('tap2');
    var usertext1 = document.getElementById('usertext1');
    var usertext2 = document.getElementById('usertext2');
    var locktext1 = document.getElementById('locktext1');
    var locktext2 = document.getElementById('locktext2');
    var locktext3 = document.getElementById('locktext3');    
    var registersubmit = document.getElementById('registersubmit');
    var logsubmit = document.getElementById('logsubmit');
    function changeMode1(){
    	document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'block';
    }
    function changeMode2(){
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'none';
    }
    function changeImg1() {
        document.getElementById('logo1').style.display = 'block';
        document.getElementById('logo2').style.display = 'none';
    }
    function changeImg2() {
    	document.getElementById('logo1').style.display = 'none';
        document.getElementById('logo2').style.display = 'block';
    }
    function compare() {
    	if(locktext2.value != locktext3.value) {
    		alert("密码不一致，请重新输入密码。");
    	} 
    }
    function checkInCorrect() {
        if(usertext1.value == "") {
            alert('请输入用户名！');
            usertext1.focus();
            return false;
        }
        if(locktext1.value == "") {
            alert('请输入密码！');
            locktext1.focus();
            return false;
        }
        else {
            // var data = {
            //     stat: "success",
            //     data: {
            //     username: "test",
            //     avatar: "http://online.hfut.edu.cn/online_logo.png",
            //     cookieExpires: "3"
            //      }
            // };
            // $.ajax({
            //     type:'post',
            //     url:'http://online.hfut.edu.cn/',
            //     contentType:'application/json;charset=utf-8',
            //     dataType:'json',
            //     data:JSON.stringify(data),
            //     success:function(msg) {
            //         console.log(msg);
            //     }
            // });
    
            saveInfo();
            return true;
        }
    }
    saveInfo = function() {
        try {
            var isSave = document.getElementById('checkboxInput').checked;
            if(isSave) {
                var usernm1 = usertext1.value;
                var userpwd1 = locktext1.value;
                if(usernm1 != "" && userpwd1 != "") {
                    SetCookie(usernm1,userpwd1);
                }
            }else {
                SetCookie("","");
            }
        }catch(e){}
    }
    function SetCookie(usern,pwd) {
        var Then = new Date();
        Then.setTime(Then.getTime() + 1866240000000)
        document.cookie = "username=" + usern + "%%" + pwd +";expires" + Then.toGMTString();
    }
    function GetCookie() {
        var nmpwd,nm,pwd;
        var cookieString = new String(document.cookie);
        var cookieHeader = "username=";
        var beginPosition = cookieString.indexOf(cookieHeader);
        cookieString = cookieString.substring(beginPosition);
        var ends = cookieString.indexOf(";");
        if(ends != -1) {
            cookieString = cookieString.substring(0,ends);
        }
        if(beginPosition > -1) {
            nmpwd = cookieString.substring(cookieHeader.length);
            if(nmpwd != "") {
                beginPosition = nmpwd.indexOf("%%");
                nm = nmpwd.substring(0,beginPosition);
                pwd = nmpwd.substring(beginPosition+2);
                usernm1.value = nm;
                userpwd1.value = pwd;
                if(nm != "" && pwd != "") {
                    document.forms[0].checkbox.checked = true;
                }
            }
        }
    }
    tap1.onclick = changeMode1;
    tap2.onclick = changeMode2;
    usertext1.onclick = changeImg1;
    usertext2.onclick = changeImg1;
    locktext1.onclick = changeImg2;
    locktext2.onclick = changeImg2;
    locktext3.onclick = changeImg2;
    registersubmit.onclick = compare;
    logsubmit.onclick = checkInCorrect;
};