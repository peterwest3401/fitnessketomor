$(document).ready(function(){function c(e,n){e.html(n)}!function e(n){var i=new Date;i.setDate(i.getDate()+1);i.setHours(0);i.setMinutes(0);i.setSeconds(0);i.setSeconds(i.getSeconds()-1);var s=new Date;var t=i-s;s<i?(hour=parseInt(t/36e5)%24,hour<10&&(hour="0"+hour),hour=hour.toString(),min=parseInt(t/6e4)%60,min<10&&(min="0"+min),min=min.toString(),sec=parseInt(t/1e3)%60,sec<10&&(sec="0"+sec),sec=sec.toString(),3==hour[1]&&5==min[0]&&9==min[1]&&5==sec[0]&&9==sec[1]?c($(n).find(".hour0"),hour[0]):$(n).find(".hour0").html(hour[0]),5==min[0]&&9==min[1]&&5==sec[0]&&9==sec[1]?c($(n).find(".hour1"),hour[1]):$(n).find(".hour1").html(hour[1]),9==min[1]&&5==sec[0]&&9==sec[1]?c($(n).find(".min0"),min[0]):$(n).find(".min0").html(min[0]),5==sec[0]&&9==sec[1]?c($(n).find(".min1"),min[1]):$(n).find(".min1").html(min[1]),9==sec[1]?c($(n).find(".sec0"),sec[0]):$(n).find(".sec0").html(sec[0]),$(n).find(".sec1").html(sec[1]),c($(n).find(".sec1"),sec[1]),setTimeout(e,1e3,n)):console.log("end")}(".timer")});