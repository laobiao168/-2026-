var liveHeight;
var titleLives = ['','香港','澳门','台湾'];
var liveIndexHK = Math.floor(Math.random() * 3)+1;
var sourceLives = ['','https://tkapi'+liveIndexHK+'.352722.com/live/','https://play888.00853lhc.live/live/mosixmark.flv','https://play.86662328.com/live/twsixmark.flv'];
var livePaths = ['','https://tkapi'+liveIndexHK+'.352722.com/live/','https://dfakvb0bpg46p.cloudfront.net/player/index.html?url=' + sourceLives[2],'https://dfakvb0bpg46p.cloudfront.net/player/index.html?url=' + sourceLives[3]];

var hkLiveIos = ['', 'https://res01.vuedeal.com/webrtc.html'];

var selectIndexType;
var compareHouses = [21,21,21,20];
switch(jy.type.substring(0,2)) {
    case 'hk':
        selectIndexType = 1;
        break;
    case 'am':
        selectIndexType = 2;
        break;
    case 'tw':
        selectIndexType = 3;
        break;
    case 'kl8':
        selectIndexType = 4;
        break;
    default:
        selectIndexType = 2;
        break;
}

if (isDesktop()) {
    liveHeight = '380px';
} else {
    liveHeight = '240px';
}

function isDesktop() {
    var ua = navigator.userAgent;
    var devices = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < devices.length; v++) {
        if (ua.indexOf(devices[v]) > 0) {
            flag = false;
            break
        }
    }
    return flag
}

function iosDevice() {
    var ua = navigator.userAgent;
    var devices = ["iPhone", "SymbianOS","iPad", "iPod"];
    var flag = false;
    for (var v = 0; v < devices.length; v++) {
        if (ua.indexOf(devices[v]) > 0) {
            flag = true;
            break
        }
    }
    return flag;
}

document.write('<link href="'+resUrl+'/assets/kj-style.css?v='+ver+'1" rel="stylesheet" type="text/css">');	

document.write(`<style>.popEvent .oop-cpt-con4{padding:5px 0;background-color:#fff} .popEvent td,.popEvent th{text-align:center;background-color:#fff;border: 1px solid #cdcdcd99;}</style><a href="${pop_link}" target="_blank" class="popEvent">${popEvent}</a>`)

document.write('<div class="container"><ul class="option-show"><li><a>澳门六合</a></li><li><a>香港六合</a></li><li><a>台湾六合</a></li><li><a style="color:#ff17e2">快乐8六合</a></li><li><a style="color:red" href="'+dl01_link+'" target="_blank">华彩下注</a></li></ul><div class="panel"><div class="panel-header"><div class="visit-show"><span id="sitename" style="color:#00f"></span><font color="#ff0000"><span id="q"></span>期</font>开奖结果<font color="#FF0000" id="thehref"></font><a href="javascript:;" style="color:green;text-decoration:none" onclick="copyArticle()">复制结果</a>&nbsp;<span id="jilu"></span></div></div><div class="panel-body"><div class="list-box"><div class="item-row"><div class="item-box" id="ball1"><h2 id="m1"></h2><div class="whsx"><span id="an1"></span><span>/</span><span id="ws1"></span></div></div><div class="item-box" id="ball2"><h2 id="m2"></h2><div class="whsx"><span id="an2"></span><span>/</span><span id="ws2"></span></div></div><div class="item-box" id="ball3"><h2 id="m3"></h2><div class="whsx"><span id="an3"></span><span>/</span><span id="ws3"></span></div></div><div class="item-box" id="ball4"><h2 id="m4"></h2><div class="whsx"><span id="an4"></span><span>/</span><span id="ws4"></span></div></div><div class="item-box" id="ball5"><h2 id="m5"></h2><div class="whsx"><span id="an5"></span><span>/</span><span id="ws5"></span></div></div><div class="item-box" id="ball6"><h2 id="m6"></h2><div class="whsx"><span id="an6"></span><span>/</span><span id="ws6"></span></div></div><div class="plus"></div><div class="item-box" id="ball7"><h2 id="s1"></h2><div class="whsx"><span id="an7"></span><span>/</span><span id="ws7"></span></div></div></div></div></div><div class="panel-footer"><p align="center"><span id="nextQiShu" style="color:red"></span>期:开奖时间<span id="nextMonth" style="color:red"></span>月<span id="nextDay" style="color:red"></span>日 星期<span id="nextWeek" style="color:red"></span><span id="nextTime"></span><a class="refresh" onclick="reloadEffect()">刷新</a></p><div id="article" style="color:#fff;height:0.1px;overflow:hidden"></div></div></div></div>');
document.write('<div id="macauliveShow" style="line-height:0"></div><div id="liveNote" style="color:green;text-align:center;font-size:18px;font-weight:400px;line-height:30px;background-color:#FFFFCC"><span id="title-live">'+titleLives[selectIndexType]+'</span>六合彩现场开奖直播<font color="red">【<span id="compare-house">'+compareHouses[selectIndexType]+'</span>:30自动展开】</font></div><div id="kl8Note" style="display:none;color:#626262;text-align:left;font-size:18px;font-weight:400px;line-height:30px;background-color:#fef1f3;border-radius: 10px;padding: 5px;border: 2px solid #ccc;">「快乐8六合彩」是根据中国福利彩票快乐8开奖结果作为依据，依开奖结果的号码顺序，在<span style="color:red">1～49</span>号码內生成当期开奖结果。<span style="color:red">*超过49的号码忽略不计！</span></div>')

async function checkLive() {
    
    if(selectIndexType == 1) {
      res = await $.get('https://tkapi3.352722.com/json/hk-kj-live.json?'+Date.now());
      if(res.data == false) {
        $('#macauliveShow').html('');
        $('#macaulive').hide();
        return;
      }
    }
    ret =  await $.get('https://tkapi3.352722.com/json/time.json?'+Date.now());
    today = new Date(ret.data.replace(/-/g,'/'));
    var h = today.getHours();
    var m = today.getMinutes();

    if (h == compareHouses[selectIndexType] && m > 27 && m < 36) {
        const reponse = await fetchWithTimeout(sourceLives[selectIndexType]);
        if (reponse.status == 200) {
          
            if ($('#macaulive').length) {
                $('#macaulive').show()
            } else {
                // change hongkong live for ios
                // if(selectIndexType == 1 && iosDevice()){
                //     $('#macauliveShow').html("<iframe id='macaulive' src='" + hkLiveIos[selectIndexType] + "' marginwidth='0' scrolling='no' border='0' width='100%' height='" + liveHeight + "' frameborder='0' allowfullscreen></iframe>");
                // }else{
                    $('#macauliveShow').html("<iframe id='macaulive' src='" + livePaths[selectIndexType] + "' marginwidth='0' scrolling='no' border='0' width='100%' height='" + liveHeight + "' frameborder='0' allowfullscreen></iframe>");
                // }
            }
        } else {
            $('#macauliveShow').html('');
            $('#macaulive').hide();
        }

    } else {
        $('#macauliveShow').html('');
        $('#macaulive').hide();
    }
}
async function fetchWithTimeout(resource) {
    try {
        const response = await fetch(resource, {
            signal: AbortSignal.timeout(1000)
        });
        return response;
    } catch {
        return {
            status: 400
        }
    }
}
checkLive();
window.setInterval(function() {
    checkLive();
}, 3000);

var txtstr = ["ws1.servers01.com","ws2.servers01.com","ws3.servers01.com","ws4.servers01.com","ws5.servers01.com"];
var num=Math.floor(Math.random()*txtstr.length);
var site_type = jy.type.substring(0,2);
var arr = null;
setTimeout(() => {
  if(site_type == 'tw'){
      $('.option-show li').eq(2).addClass('active')
      $('#xctxt').show();
  }else if(site_type == 'am'){
      $('.option-show li').eq(0).addClass('active')
      $('#xctxt').show();
  }else  if(site_type == 'hk'){
      $('.option-show li').eq(1).addClass('active')
      $('#xctxt').show();
  }else {
      $('.option-show li').eq(3).addClass('active')
      $('#xctxt').show();
  }
  $('.option-show').on('click','li',function () {
       $('.option-show li').removeClass('active')
      //  $('.nav a').hide()
      $(this).addClass('active')
      if($(this).index()==0){
            site_type = 'am'
            selectIndexType = 2;
            $('#liveNote').show();
            $('#kl8Note').hide();
        }else if($(this).index()==2){
            site_type = 'tw'
            selectIndexType = 3;
            $('#liveNote').show();
            $('#kl8Note').hide();
        }else if($(this).index()==1){
            site_type = 'hk'
            selectIndexType = 1;
            $('#liveNote').show();
            $('#kl8Note').hide();
        }else {
            site_type = 'kl8'
            selectIndexType = 4;
            $('#liveNote').hide();
            $('#kl8Note').show();
            if($(this).index() == 4){
                $('#kl8Note').hide();
            }
      }
      $('#xctxt').show();
      $('#title-live').text(titleLives[selectIndexType]);
      $('#compare-house').text(compareHouses[selectIndexType]);
      checkLive();
      initKJ(site_type)
  })
  
}, 1000);
    var B = ['','red','red','blue','blue','green','green','red','red','blue','blue','green','red','red','blue','blue','green','green','red','red','blue','green','green','red','red','blue','blue','green','green','red','red','blue','green','green','red','red','blue','blue','green','green','red','blue','blue','green','green','red','red','blue','blue','green'];
    var _B = [0,'红','红','蓝','蓝','绿','绿','红','红','蓝','蓝','绿','红','红','蓝','蓝','绿','绿','红','红','蓝','绿','绿','红','红','蓝','蓝','绿','绿','红','红','蓝','绿','绿','红','红','蓝','蓝','绿','绿','红','蓝','蓝','绿','绿','红','红','蓝','蓝','绿']
    function getWX(num,date){
        // new Date(date);
        // console.log(date);
        if(num==0 || isNaN(num)) {
            return '';
        }
        var wx = AnimalsHelper.getHmWx(num, new Date(date))
        if(wx == '金') return '<font class="wx-jin">金</font>';
        if(wx == '木') return '<font class="wx-mu">木</font>';
        if(wx == '水') return '<font class="wx-shui">水</font>';
        if(wx == '火') return '<font class="wx-huo">火</font>';
        if(wx == '土') return '<font class="wx-tu">土</font>';
    }

    function getXIAO(num,date) {
        if(num==0 || isNaN(num)) {
            return '';
        }
        return AnimalsHelper.getHMSHENGXIAO(num, new Date(date))
    }
    
    function reloadEffect() {
        $('#ball1,#ball2,#ball3,#ball4,#ball5,#ball6,#ball7').toggleClass('hidden');
        initKJ(site_type);
    }
    function initKJ(site_type) {
        var str = '';
        var sitename = '';
        var siteurl = '';
        if(site_type == 'tw'){
            str = "https://"+txtstr[num]+"/tw_kj.json";
            sitename = '台湾'
            siteurl = '(770508.com)'
            $("#jilu").html("<a href='"+resUrl+"/?type=tw' target='_top' style='color:red;text-decoration:none'>开奖记录</a>")
            
        }else if(site_type == 'am'){
            var str = "https://"+txtstr[num]+"/am_kj.json";
            var sitename = '澳门'
            var siteurl = '(993737.com)';
            $("#jilu").html("<a href='"+resUrl+"/?type=ma' target='_top' style='color:red;text-decoration:none'>开奖记录</a>")
        }else if(site_type == 'hk'){
            var str = "https://"+txtstr[num]+"/hk_kj.json";
            var sitename = '香港'
            var siteurl = '(8777kj.com)'
            $("#jilu").html("<a href='"+resUrl+"/?type=hk' target='_top' style='color:red;text-decoration:none'>开奖记录</a>")
        } else {
            var str = "https://"+txtstr[num]+"/kl8_kj.json";
            var sitename = '快乐8六合'
            var siteurl = '(中国福彩中心)';
            $("#thehref").css('dislay','none');
            $("#jilu").html("<a href='"+resUrl+"/?type=kl8' target='_top' style='color:red;text-decoration:none'>记录</a>")
        }
        $.getJSON(str+'?'+ new Date().getTime(), function(obj){
                if(obj == null){
                    return;
                }

                arr = obj.k.split(",");
                var date = new Date();
                var date_current = date.getFullYear() + '-' + (date.getMonth()+1).toString().padStart(2,'0') + '-' + date.getDate().toString().padStart(2,'0');
            
                $("#m1").text(arr[1]);
                $("#m2").text(arr[2]);
                $("#m3").text(arr[3]);
                $("#m4").text(arr[4]);
                $("#m5").text(arr[5]);
                $("#m6").text(arr[6]);
                $("#s1").text(arr[7]);

                $('#ws1').html(getWX(arr[1],date_current));
                $('#an1').html(getXIAO(arr[1],date_current));
                $('#ball1').attr('class', 'item-box '+ B[parseInt(arr[1])]);

                
                $('#ws2').html(getWX(arr[2],date_current));
                $('#an2').html(getXIAO(arr[2],date_current));
                $('#ball2').attr('class', 'item-box '+ B[parseInt(arr[2])]);

                
                $('#ws3').html(getWX(arr[3],date_current));
                $('#an3').html(getXIAO(arr[3],date_current));
                $('#ball3').attr('class', 'item-box '+ B[parseInt(arr[3])]);

                
                $('#ws4').html(getWX(arr[4],date_current));
                $('#an4').html(getXIAO(arr[4],date_current));
                $('#ball4').attr('class', 'item-box '+ B[parseInt(arr[4])]);

                
                $('#ws5').html(getWX(arr[5],date_current));
                $('#an5').html(getXIAO(arr[5],date_current));
                $('#ball5').attr('class', 'item-box '+ B[parseInt(arr[5])]);

                
                $('#ws6').html(getWX(arr[6],date_current));
                $('#an6').html(getXIAO(arr[6],date_current));
                $('#ball6').attr('class', 'item-box '+ B[parseInt(arr[6])]);

                
                $('#ws7').html(getWX(arr[7],date_current));
                $('#an7').html(getXIAO(arr[7],date_current));
                $('#ball7').attr('class', 'item-box '+ B[parseInt(arr[7])]);
                arr[8] = arr[8].slice(4, 7);
                arr[0] = arr[0].slice(4, 7);
                $("#nextQiShu").html(arr[8]);
                $("#q").text(arr[0]); //期号
                $("#nextMonth").html(arr[9]);
                $("#nextDay").html(arr[10]);
                $("#nextWeek").html(arr[11]);
                $("#nextTime").html(arr[12]);
                var res_ball = [
                    showBall(arr, 1),
                    showBall(arr, 2),
                    showBall(arr, 3),
                    showBall(arr, 4),
                    showBall(arr, 5),
                    showBall(arr, 6),
                    showBall(arr, 7)
                ].join('-');
                $("#article").html(sitename+arr[0]+'期开奖结果：' + res_ball + '\n'+siteurl.replace(/\./, "点"));
                $("#thehref").text(siteurl)
                $("#sitename").text(sitename);
            });
    }

    function showBall(arr, num) {
        return arr[num] + '[' + $('#an'+num).html() + '][' + _B[parseInt(arr[num])] + '][' + $('#ws'+num).text() + ']';
    }
    initKJ(site_type)
    window.setInterval(function(){
        initKJ(site_type);
    },2000);

    function in_array(c, b) {
        type = typeof c;
        if (type == "string" || type == "number") {
            for (var a in b) {
                if (b[a] == c) {
                    return true
                }
            }
        }
        return false
    }
    function copyArticle(event){
      console.log(event);
        const range = document.createRange();
        range.selectNode(document.getElementById('article'));
        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        alert('开奖结果复制成功！\r\n快快分享给你的好友吧\r\n\r\n'+$('#article').html())
    }