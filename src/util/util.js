let jllUtil = {}
jllUtil.formatDate = formatDate;

//转换时间格式
/**
 *
 * @date   时间
 * @fmt    时间格式
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

/**
 * 获取滚动条高度
 */
jllUtil.getScrollTop = function () {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}
/**
 * @获取窗口的将高度
 */
jllUtil.getWindowHeight = function () {
  let windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}
/**
 * @获取页面文档的高度
 */
jllUtil.getScrollHeight = function () {
  let scrollHeight = 0;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}
/**
 * @设置Cookie
 */
jllUtil.setCookie = function (name, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString() + ";path=/")
}
/**
 * @获取Cookie
 */
jllUtil.getCookie = function (name) {
  let c_start = '';
  let c_end = '';
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(name + '=');
    if (c_start != -1) {
      c_start = c_start + name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return '';
}
/**
 *删除Cookie
 */
jllUtil.delCookie = function (name) {
  var date = new Date();
  date.setTime(date.getTime() - 1);
  var delValue = jllUtil.getCookie(name);
  if (!!delValue) {
    document.cookie = name + '=' + delValue + ';expires=' + date.toGMTString();
  }
}
/**
 * 验证手机号
 * @return {[type]} [description]
 */
jllUtil.verifyCellPhone = function (str) {
  var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
/**
 * 验证密码
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
jllUtil.verifPassWord = function (str) {
  var reg = /^(?=.*[a-z])(?=.*\d)[^]{8,20}$/;
  // var reg =  /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,20}$/;
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}

/**
 * 验证身份证号
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
jllUtil.verifIdNumber = function (str) {
  var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 验证邮箱格式
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
jllUtil.verifEmail = function (str) {
  var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 验证纯数字
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
jllUtil.verifNum = function (str) {
  var reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 *比较两个对象是否完全相同
 *
 */
jllUtil.isObjectValueEqual = function (a, b) {

  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

/**
 * canvas画环形百分比
 */

jllUtil.drawCanvanPercent = function (ele_id, dw, cir_r, cir_color, line_w, fill_color, dushu_ele, num) {
  var pper = 0
  var canvas = document.getElementById(ele_id);
  if (dw == "rem") {
    cir_r = cir_r * ($(canvas).parent().width() / 5);
    line_w = line_w * (window.screen.width / 5);
  }
  var circle = {
    r: cir_r / 2,      //圆的半径
    per: num,      //百分比分子
    color: cir_color,      //圆环的颜色
    lineWidth: 25      //圆环的宽度
  };
  canvas.width = canvas.height = circle.r * 2;
  canvas.style.borderRadius = "50%";
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var pper_interal = setInterval(function () {  //间隔10ms调用一次
      if (pper >= circle.per) {
        pper = circle.per;
        clearTimeout(pper_interal);
      } else {
        pper++;
      }
      dushu_ele.innerText = pper + '%';
      ctx.beginPath();
      ctx.strokeStyle = circle.color;
      ctx.lineWidth = circle.lineWidth;
      // ctx.lineCap = "round";
      ctx.arc(circle.r, circle.r, circle.r, 0, Math.PI * (pper / 100) * 360 / 180, false);
      ctx.stroke();
      ctx.closePath()
    }, 10);
    var ctx2 = canvas.getContext("2d");
    ctx2.fillStyle = fill_color;
    ctx2.arc(circle.r, circle.r, circle.r - circle.lineWidth / 2, 0, Math.PI * 2, false);
    ctx2.fill();
    var ctx3 = canvas.getContext("2d");  //绘制底色为灰色的圆圈
    ctx3.beginPath();
    ctx3.strokeStyle = "#ddd";
    ctx3.lineWidth = circle.lineWidth;
    ctx3.arc(circle.r, circle.r, circle.r, Math.PI * 0, Math.PI * 2, false);
    ctx3.stroke();
    ctx3.closePath()
  }
}

jllUtil.thousandBitNum = function (num) {
  num = num.toFixed(2)
  var arr = num.split(".")
  var num = arr[0]
  var str = arr[1]
  var result = [], counter = 0;
  num = (num || 0).toString().split('');
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i != 0) {
      result.unshift(',');
    }
  }
  return result.join('') + '.' + str;
}

jllUtil.date = function (time) {
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }
  var date = new Date(time)
  var dateTime = date.getFullYear() + '-' + checkTime(date.getMonth() + 1) + '-' + checkTime(date.getDate());
  return dateTime
}


export default jllUtil;
