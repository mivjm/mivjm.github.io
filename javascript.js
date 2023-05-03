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

// PayPal button
  function initPayPalButton() {
    var description = document.querySelector('#smart-button-container #description');
    var amount = document.querySelector('#smart-button-container #amount');
    var descriptionError = document.querySelector('#smart-button-container #descriptionError');
    var priceError = document.querySelector('#smart-button-container #priceLabelError');
    var invoiceid = document.querySelector('#smart-button-container #invoiceid');
    var invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
    var invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

    var elArr = [description, amount];

    if (invoiceidDiv.firstChild.innerHTML.length > 1) {
      invoiceidDiv.style.display = "block";
    }

    var purchase_units = [];
    purchase_units[0] = {};
    purchase_units[0].amount = {};

    function validate(event) {
      return event.value.length > 0;
    }

    paypal.Buttons({
      style: {
        color: 'black',
        shape: 'rect',
        label: 'paypal',
        layout: 'vertical',
        
      },

      onInit: function (data, actions) {
        actions.disable();

        if(invoiceidDiv.style.display === "block") {
          elArr.push(invoiceid);
        }

        elArr.forEach(function (item) {
          item.addEventListener('keyup', function (event) {
            var result = elArr.every(validate);
            if (result) {
              actions.enable();
            } else {
              actions.disable();
            }
          });
        });
      },

      onClick: function () {
        if (description.value.length < 1) {
          descriptionError.style.visibility = "visible";
        } else {
          descriptionError.style.visibility = "hidden";
        }

        if (amount.value.length < 1) {
          priceError.style.visibility = "visible";
        } else {
          priceError.style.visibility = "hidden";
        }

        if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
          invoiceidError.style.visibility = "visible";
        } else {
          invoiceidError.style.visibility = "hidden";
        }

        purchase_units[0].description = description.value;
        purchase_units[0].amount.value = amount.value;

        if(invoiceid.value !== '') {
          purchase_units[0].invoice_id = invoiceid.value;
        }
      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: purchase_units,
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {

          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function (err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }

// Date stamp
function dateStamp() { 
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
  var text = d + " " + m + " " + y;
  return text;
}

// Graphical Clock
function graphicalClock() { 
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
  // alert(mo + " " + d + " " + t + " " + mi);
  var moMark, dMark, tMark, miMark;
  
  // Month
  if (mo === 1) {moMark = "●";
  } else if (mo === 2) {moMark = "●";
  } else if (mo === 3) {moMark = "●●●";
  } else if (mo === 4) {moMark = "●●●●";
  } else if (mo === 5) {moMark = "⦿";
  } else if (mo === 6) {moMark = "⦿●";
  } else if (mo === 7) {moMark = "⦿●●";
  } else if (mo === 8) {moMark = "⦿●●●";
  } else if (mo === 9) {moMark = "⦿●●●●";
  } else if (mo === 10) {moMark = "〇";
  } else if (mo === 11) {moMark = "〇●";
  } else if (mo === 12) {moMark = "〇●●";
  } else {
  }
  
  // Day
  if (d === 1) {dMark = "●";
  } else if (d === 2) {dMark = "●●";
  } else if (d === 3) {dMark = "●●●";
  } else if (d === 4) {dMark = "●●●●";
  } else if (d === 5) {dMark = "⦿";
  } else if (d === 6) {dMark = "⦿●";
  } else if (d === 7) {dMark = "⦿●●";
  } else if (d === 8) {dMark = "⦿●●●";
  } else if (d === 9) {dMark = "⦿●●●●";
  } else if (d === 10) {dMark = "〇";
  } else if (d === 11) {dMark = "〇●";
  } else if (d === 12) {dMark = "〇●●";
  } else if (d === 13) {dMark = "〇●●●";
  } else if (d === 14) {dMark = "〇●●●●";
  } else if (d === 15) {dMark = "〇⦿";
  } else if (d === 16) {dMark = "〇⦿●";
  } else if (d === 17) {dMark = "〇⦿●●";
  } else if (d === 18) {dMark = "〇⦿●●●";
  } else if (d === 19) {dMark = "〇⦿●●●●";
  } else if (d === 20) {dMark = "〇〇";
  } else if (d === 21) {dMark = "〇〇●";
  } else if (d === 22) {dMark = "〇〇●●";
  } else if (d === 23) {dMark = "〇〇●●●";
  } else if (d === 24) {dMark = "〇〇●●●●";
  } else if (d === 25) {dMark = "〇〇⦿";
  } else if (d === 26) {dMark = "〇〇⦿●";
  } else if (d === 27) {dMark = "〇〇⦿●●";
  } else if (d === 28) {dMark = "〇〇⦿●●●";
  } else if (d === 29) {dMark = "〇〇⦿●●●●";
  } else if (d === 30) {dMark = "〇〇〇";
  } else if (d === 31) {dMark = "〇〇〇●";
  } else {
  }
  
  // Hour
  if (t === 1) {tMark = "●";
  } else if (t === 2) {tMark = "●●";
  } else if (t === 3) {tMark = "●●●";
  } else if (t === 4) {tMark = "●●●●";
  } else if (t === 5) {tMark = "⦿";
  } else if (t === 6) {tMark = "⦿●";
  } else if (t === 7) {tMark = "⦿●●";
  } else if (t === 8) {tMark = "⦿●●●";
  } else if (t === 9) {tMark = "⦿●●●●";
  } else if (t === 10) {tMark = "〇";
  } else if (t === 11) {tMark = "〇●";
  } else if (t === 12) {tMark = "〇●●";
  } else if (t === 13) {tMark = "〇●●●";
  } else if (t === 14) {tMark = "〇●●●●";
  } else if (t === 15) {tMark = "〇⦿";
  } else if (t === 16) {tMark = "〇⦿●";
  } else if (t === 17) {tMark = "〇⦿●●";
  } else if (t === 18) {tMark = "〇⦿●●●";
  } else if (t === 19) {tMark = "〇⦿●●●●";
  } else if (t === 20) {tMark = "〇〇";
  } else if (t === 21) {tMark = "〇〇●";
  } else if (t === 22) {tMark = "〇〇●●";
  } else if (t === 23) {tMark = "〇〇●●●";
  } else if (t === 24) {tMark = "〇〇●●●●";
  } else {
  }
  
  // Minuite
  if (mi === 1) {miMark = "●";
  } else if (mi === 2) {miMark = "●●";
  } else if (mi === 3) {miMark = "●●●";
  } else if (mi === 4) {miMark = "●●●●";
  } else if (mi === 5) {miMark = "⦿";
  } else if (mi === 6) {miMark = "⦿●";
  } else if (mi === 7) {miMark = "⦿●●";
  } else if (mi === 8) {miMark = "⦿●●●";
  } else if (mi === 9) {miMark = "⦿●●●●";
  } else if (mi === 10) {miMark = "〇";
  } else if (mi === 11) {miMark = "〇●";
  } else if (mi === 12) {miMark = "〇●●";
  } else if (mi === 13) {miMark = "〇●●●";
  } else if (mi === 14) {miMark = "〇●●●●";
  } else if (mi === 15) {miMark = "〇⦿";
  } else if (mi === 16) {miMark = "〇⦿●";
  } else if (mi === 17) {miMark = "〇⦿●●";
  } else if (mi === 18) {miMark = "〇⦿●●●";
  } else if (mi === 19) {miMark = "〇⦿●●●●";
  } else if (mi === 20) {miMark = "〇〇";
  } else if (mi === 21) {miMark = "〇〇●";
  } else if (mi === 22) {miMark = "〇〇●●";
  } else if (mi === 23) {miMark = "〇〇●●●";
  } else if (mi === 24) {miMark = "〇〇●●●●";
  } else if (mi === 25) {miMark = "〇〇⦿";
  } else if (mi === 26) {miMark = "〇〇⦿●";
  } else if (mi === 27) {miMark = "〇〇⦿●●";
  } else if (mi === 28) {miMark = "〇〇⦿●●●";
  } else if (mi === 29) {miMark = "〇〇⦿●●●●";
  } else if (mi === 30) {miMark = "〇〇〇";
  } else if (mi === 31) {miMark = "〇〇〇●";
  } else if (mi === 32) {miMark = "〇〇〇●●";
  } else if (mi === 33) {miMark = "〇〇〇●●●";
  } else if (mi === 34) {miMark = "〇〇〇●●●●";
  } else if (mi === 35) {miMark = "〇〇〇⦿";
  } else if (mi === 36) {miMark = "〇〇〇⦿●";
  } else if (mi === 37) {miMark = "〇〇〇⦿●●";
  } else if (mi === 38) {miMark = "〇〇〇⦿●●●";
  } else if (mi === 39) {miMark = "〇〇〇⦿●●●●";
  } else if (mi === 40) {miMark = "〇〇〇〇";
  } else if (mi === 41) {miMark = "〇〇〇〇●";
  } else if (mi === 42) {miMark = "〇〇〇〇●●";
  } else if (mi === 43) {miMark = "〇〇〇〇●●●";
  } else if (mi === 44) {miMark = "〇〇〇〇●●●●";
  } else if (mi === 45) {miMark = "〇〇〇〇⦿";
  } else if (mi === 46) {miMark = "〇〇〇〇⦿●";
  } else if (mi === 47) {miMark = "〇〇〇〇⦿●●";
  } else if (mi === 48) {miMark = "〇〇〇〇⦿●●●";
  } else if (mi === 49) {miMark = "〇〇〇〇⦿●●●●";
  } else if (mi === 50) {miMark = "〇〇〇〇〇";
  } else if (mi === 51) {miMark = "〇〇〇〇〇●";
  } else if (mi === 52) {miMark = "〇〇〇〇〇●●";
  } else if (mi === 53) {miMark = "〇〇〇〇〇●●●";
  } else if (mi === 54) {miMark = "〇〇〇〇〇●●●●";
  } else if (mi === 55) {miMark = "〇〇〇〇〇⦿";
  } else if (mi === 56) {miMark = "〇〇〇〇〇⦿●";
  } else if (mi === 57) {miMark = "〇〇〇〇〇⦿●●";
  } else if (mi === 58) {miMark = "〇〇〇〇〇⦿●●●";
  } else if (mi === 59) {miMark = "〇〇〇〇〇⦿●●●●";
  } else if (mi === 60) {miMark = "〇〇〇〇〇〇";
  } else {
  }
  
  var text = moMark + "|" + dMark + "|" + tMark + "|" + miMark;
  return text;
}
