// オーバレイ
document.addEventListener('DOMContentLoaded', function(){
  // オーバレイを開閉する関数
  const overlay = document.getElementById('overlay');
  function overlayToggle() {
    overlay.classList.toggle('overlay-on');
  }
  // 指定した要素に対して上記関数を実行するクリックイベントを設定
  const clickArea = document.getElementsByClassName('overlay-event');
  for(let i = 0; i < clickArea.length; i++) {
    clickArea[i].addEventListener('click', overlayToggle, false);
  }
  // イベントに対してバブリングを停止
  function stopEvent(event) {
    event.stopPropagation();
  }
  const overlayInner = document.getElementById('overlay-inner');
  overlayInner.addEventListener('click', stopEvent, false);  
}, false);

// Hello world
function helloWorld() { 
    var genzai = new Date();
    var y = genzai.getFullYear();
    var mo = genzai.getMonth();
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var d = genzai.getDate();
    var week = genzai.getDay();
    var weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var w = weeks[week];
    var m = months[mo];
    var t = genzai.getHours();
    var mi = genzai.getMinutes();
    var s = genzai.getSeconds();
    var ms = genzai.getMilliseconds();
    
    alert(mo);
    alert(d);
    alert(t);
    alert(mi);
    
    if (mo === 1) {
        alert("●");
    } else if (mo === 2) {
        alert("●●");
    } else if (mo === 3) {
        alert("●●●");
    } else if (mo === 4) {
        alert("●●●●");
    } else if (mo === 5) {
        alert("●●●●●");
    } else if (mo === 6) {
        alert("●●●●●●");
    } else if (mo === 7) {
        alert("●●●●●●●");
    } else if (mo === 8) {
        alert("●●●●●●●●");
    } else if (mo === 9) {
        alert("●●●●●●●●●");
    } else if (mo === 10) {
        alert("〇");
    } else if (mo === 11) {
        alert("〇●");
    } else if (mo === 12) {
        alert("〇●●");
    } else {
        alert("");
    }

    if (d === 1) {
        alert("●");
    } else if (d === 2) {
        alert("●●");
    } else if (d === 3) {
        alert("●●●");
    } else if (d === 4) {
        alert("●●●●");
    } else if (d === 5) {
        alert("●●●●●");
    } else if (d === 6) {
        alert("●●●●●●");
    } else if (d === 7) {
        alert("●●●●●●●");
    } else if (d === 8) {
        alert("●●●●●●●●");
    } else if (d === 9) {
        alert("●●●●●●●●●");
    } else if (d === 10) {
        alert("〇");
    } else if (d === 11) {
        alert("〇●");
    } else if (d === 12) {
        alert("〇●●");
    } else if (d === 13) {
        alert("〇●●●");
    } else if (d === 14) {
        alert("〇●●●●");
    } else if (d === 15) {
        alert("〇●●●●●");
    } else if (d === 16) {
        alert("〇●●●●●●");
    } else if (d === 17) {
        alert("〇●●●●●●●");
    } else if (d === 18) {
        alert("〇●●●●●●●●");
    } else if (d === 19) {
        alert("〇●●●●●●●●●");
    } else if (d === 20) {
        alert("〇〇");
    } else if (d === 21) {
        alert("〇〇●");
    } else if (d === 22) {
        alert("〇〇●●");
    } else if (d === 23) {
        alert("〇〇●●●");
    } else if (d === 24) {
        alert("〇〇●●●●");
    } else if (d === 25) {
        alert("〇〇●●●●●");
    } else if (d === 26) {
        alert("〇〇●●●●●●");
    } else if (d === 27) {
        alert("〇〇●●●●●●●");
    } else if (d === 28) {
        alert("〇〇●●●●●●●●");
    } else if (d === 29) {
        alert("〇〇●●●●●●●●●");
    } else if (d === 30) {
        alert("〇〇〇");
    } else if (d === 31) {
        alert("〇〇〇●");
    } else {
        alert("");
    }
    
    if (t === 1) {
        alert("●");
    } else if (t === 2) {
        alert("●●");
    } else if (t === 3) {
        alert("●●●");
    } else if (t === 4) {
        alert("●●●●");
    } else if (t === 5) {
        alert("●●●●●");
    } else if (t === 6) {
        alert("●●●●●●");
    } else if (t === 7) {
        alert("●●●●●●●");
    } else if (t === 8) {
        alert("●●●●●●●●");
    } else if (t === 9) {
        alert("●●●●●●●●●");
    } else if (t === 10) {
        alert("〇");
    } else if (t === 11) {
        alert("〇●");
    } else if (t === 12) {
        alert("〇●●");
    } else if (t === 13) {
        alert("〇●●●");
    } else if (t === 14) {
        alert("〇●●●●");
    } else if (t === 15) {
        alert("〇●●●●●");
    } else if (t === 16) {
        alert("〇●●●●●●");
    } else if (t === 17) {
        alert("〇●●●●●●●");
    } else if (t === 18) {
        alert("〇●●●●●●●●");
    } else if (t === 19) {
        alert("〇●●●●●●●●●");
    } else if (t === 20) {
        alert("〇〇");
    } else if (t === 21) {
        alert("〇〇●");
    } else if (t === 22) {
        alert("〇〇●●");
    } else if (t === 23) {
        alert("〇〇●●●");
    } else if (t === 24) {
        alert("〇〇●●●●");
    } else {
        alert("");
    }

    if (mi === 1) {
        alert("●");
    } else if (mi === 2) {
        alert("●●");
    } else if (mi === 3) {
        alert("●●●");
    } else if (mi === 4) {
        alert("●●●●");
    } else if (mi === 5) {
        alert("●●●●●");
    } else if (mi === 6) {
        alert("●●●●●●");
    } else if (mi === 7) {
        alert("●●●●●●●");
    } else if (mi === 8) {
        alert("●●●●●●●●");
    } else if (mi === 9) {
        alert("●●●●●●●●●");
    } else if (mi === 10) {
        alert("〇");
    } else if (mi === 11) {
        alert("〇●");
    } else if (mi === 12) {
        alert("〇●●");
    } else if (mi === 13) {
        alert("〇●●●");
    } else if (mi === 14) {
        alert("〇●●●●");
    } else if (mi === 15) {
        alert("〇●●●●●");
    } else if (mi === 16) {
        alert("〇●●●●●●");
    } else if (mi === 17) {
        alert("〇●●●●●●●");
    } else if (mi === 18) {
        alert("〇●●●●●●●●");
    } else if (mi === 19) {
        alert("〇●●●●●●●●●");
    } else if (mi === 20) {
        alert("〇〇");
    } else if (mi === 21) {
        alert("〇〇●");
    } else if (mi === 22) {
        alert("〇〇●●");
    } else if (mi === 23) {
        alert("〇〇●●●");
    } else if (mi === 24) {
        alert("〇〇●●●●");
    } else if (mi === 25) {
        alert("〇〇●●●●●");
    } else if (mi === 26) {
        alert("〇〇●●●●●●");
    } else if (mi === 27) {
        alert("〇〇●●●●●●●");
    } else if (mi === 28) {
        alert("〇〇●●●●●●●●");
    } else if (mi === 29) {
        alert("〇〇●●●●●●●●●");
    } else if (mi === 30) {
        alert("〇〇〇");
    } else if (mi === 31) {
        alert("〇〇〇●");
    } else if (mi === 32) {
        alert("〇〇〇●●");
    } else if (mi === 33) {
        alert("〇〇〇●●●");
    } else if (mi === 34) {
        alert("〇〇〇●●●●");
    } else if (mi === 35) {
        alert("〇〇〇●●●●●");
    } else if (mi === 36) {
        alert("〇〇〇●●●●●●");
    } else if (mi === 37) {
        alert("〇〇〇●●●●●●●");
    } else if (mi === 38) {
        alert("〇〇〇●●●●●●●●");
    } else if (mi === 39) {
        alert("〇〇〇●●●●●●●●●");
    } else if (mi === 40) {
        alert("〇〇〇〇");
    } else if (mi === 41) {
        alert("〇〇〇〇●");
    } else if (mi === 42) {
        alert("〇〇〇〇●●");
    } else if (mi === 43) {
        alert("〇〇〇〇●●●");
    } else if (mi === 44) {
        alert("〇〇〇〇●●●●");
    } else if (mi === 45) {
        alert("〇〇〇〇●●●●●");
    } else if (mi === 46) {
        alert("〇〇〇〇●●●●●●");
    } else if (mi === 47) {
        alert("〇〇〇〇●●●●●●●");
    } else if (mi === 48) {
        alert("〇〇〇〇●●●●●●●●");
    } else if (mi === 49) {
        alert("〇〇〇〇●●●●●●●●●");
    } else if (mi === 50) {
        alert("〇〇〇〇〇");
    } else if (mi === 51) {
        alert("〇〇〇〇〇●");
    } else if (mi === 52) {
        alert("〇〇〇〇〇●●");
    } else if (mi === 53) {
        alert("〇〇〇〇〇●●●");
    } else if (mi === 54) {
        alert("〇〇〇〇〇●●●●");
    } else if (mi === 55) {
        alert("〇〇〇〇〇●●●●●");
    } else if (mi === 56) {
        alert("〇〇〇〇〇●●●●●●");
    } else if (mi === 57) {
        alert("〇〇〇〇〇●●●●●●●");
    } else if (mi === 58) {
        alert("〇〇〇〇〇●●●●●●●●");
    } else if (mi === 59) {
        alert("〇〇〇〇〇●●●●●●●●●");
    } else if (mi === 60) {
        alert("〇〇〇〇〇〇");
    } else {
        alert("");
    }

}
