
   
var tWidth='100%';                  // width (in pixels)
var tHeight='25px';                  // height (in pixels)
var tcolour ='#000000';               // background colour:
var moStop=true;                     // pause on mouseover (true or false)
var fontfamily = 'arial,sans-serif'; // font for content
var tcolortesto = '#ffcc00';         // colore del font
var tSpeed=3;                        // scroll speed (1 = slow, 5 = fast)

// var content è dove si mette il testo con effetto scorrevole
var content ='&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Promozioni &nbsp; fino &nbsp; al &nbsp;  30 &nbsp; Giugno &nbsp; 2019 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;';

var cps = tSpeed;
var aw, mq;
var fsz = parseInt(tHeight) - 4;

function startticker() { if (document.getElementById) { var tick = '<div style="position:relative;width:' + tWidth + ';height:' + tHeight + ';overflow:hidden;background-color:' + tcolour + ';color:' + tcolortesto + '"'; if (moStop) tick += ' onmouseover="cps=0" onmouseout="cps=tSpeed"'; tick += '><div id="mq" style="position:absolute;left:0px;top:0px;font-family:' + fontfamily + ';font-size:' + fsz + 'px;white-space:nowrap;"><\/div><\/div>'; document.getElementById('ticker').innerHTML = tick; mq = document.getElementById("mq"); mq.style.left = (parseInt(tWidth) + 10) + "px"; mq.innerHTML = '<span id="tx">' + content + '<\/span>'; aw = document.getElementById("tx").offsetWidth; lefttime = setInterval("scrollticker()", 50); } }
function scrollticker() { mq.style.left = (parseInt(mq.style.left) > (-10 - aw)) ? parseInt(mq.style.left) - cps + "px" : parseInt(tWidth) + 50 + "px"; } window.onload = startticker;




