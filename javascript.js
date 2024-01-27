// オーバレイ
document.addEventListener(
  'DOMContentLoaded', 
  function() {
    // オーバレイを開閉する関数
    const overlay = document.getElementById('overlay');
    function overlayToggle() {
      overlay.classList.toggle('overlay-on');
    }
    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea = document.getElementsByClassName('overlay-event');
    for (let i = 0; i < clickArea.length; i++) {
      clickArea[i].addEventListener('click', overlayToggle, false);
    }
    // イベントに対してバブリングを停止
    function stopEvent(event) {
      event.stopPropagation();
    }
    const overlayInner = document.getElementById('overlay-inner');
    overlayInner.addEventListener('click', stopEvent, false);
  }, 
  false);

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
  let genzai = new Date();
  let y = genzai.getFullYear();
  let mo = genzai.getMonth();
  let months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  let d = genzai.getDate();
  let m = months[mo];
  var text = d + " " + m + " " + y;
  return text;
}

// Graphical Clock
function graphicalClock() { 
  let genzai = new Date();
  let mo = genzai.getMonth() + 1;
  let d = genzai.getDate();
  let t = genzai.getHours();
  let mi = genzai.getMinutes();
  let numberMarkList = [
    " ", 
    "●", 
    "●●", 
    "●●●", 
    "●●●●", 
    "⦿", 
    "⦿●", 
    "⦿●●", 
    "⦿●●●", 
    "⦿●●●●", 
    "〇", 
    "〇●", 
    "〇●●", 
    "〇●●●", 
    "〇●●●●", 
    "〇⦿", 
    "〇⦿●", 
    "〇⦿●●", 
    "〇⦿●●●", 
    "〇⦿●●●●", 
    "〇〇", 
    "〇〇●", 
    "〇〇●●", 
    "〇〇●●●", 
    "〇〇●●●●", 
    "〇〇⦿", 
    "〇〇⦿●", 
    "〇〇⦿●●", 
    "〇〇⦿●●●", 
    "〇〇⦿●●●●", 
    "〇〇〇", 
    "〇〇〇●", 
    "〇〇〇●●", 
    "〇〇〇●●●", 
    "〇〇〇●●●●", 
    "〇〇〇⦿", 
    "〇〇〇⦿●", 
    "〇〇〇⦿●●", 
    "〇〇〇⦿●●●", 
    "〇〇〇⦿●●●●", 
    "〇〇〇〇", 
    "〇〇〇〇●", 
    "〇〇〇〇●●", 
    "〇〇〇〇●●●", 
    "〇〇〇〇●●●●", 
    "〇〇〇〇⦿", 
    "〇〇〇〇⦿●", 
    "〇〇〇〇⦿●●", 
    "〇〇〇〇⦿●●●", 
    "〇〇〇〇⦿●●●●", 
    "〇〇〇〇〇", 
    "〇〇〇〇〇●", 
    "〇〇〇〇〇●●", 
    "〇〇〇〇〇●●●", 
    "〇〇〇〇〇●●●●", 
    "〇〇〇〇〇⦿", 
    "〇〇〇〇〇⦿●", 
    "〇〇〇〇〇⦿●●", 
    "〇〇〇〇〇⦿●●●", 
    "〇〇〇〇〇⦿●●●●", 
    "〇〇〇〇〇〇"
  ];
  let moMark = numberMarkList[mo];
  let dMark = numberMarkList[d];
  let tMark = numberMarkList[t];
  let miMark = numberMarkList[mi];
  var text = moMark + "|" + dMark + "|" + tMark + "|" + miMark;
  return text;
}

// Moon Calender 2024
function moonCalender() {
  let genzai = new Date();
  let mo = genzai.getMonth();
  let d = genzai.getDate() - 1;
  let moonAgeList = [
    // JAN
    [19,20,21,22,23,24,25,26,27,28,29,0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5,10.5,11.5,12.5,13.5,14.5,15.5,16.5,17.5,18.5,19.5], 
    // FEB
    [20.5,21.5,22.5,23.5,24.5,25.5,26.5,27.5,28.5,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 
    // MAR
    [20,21,22,23,24,25,26,27,28,29,0.6,1.6,2.6,3.6,4.6,5.6,6.6,7.6,8.6,9.6,10.6,11.6,12.6,13.6,14.6,15.6,16.6,17.6,18.6,19.6,20.6],
    // APR
    [21.6,22.6,23.6,24.6,25.6,26.6,27.6,28.6,0.2,1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2],
    // MAY
    [22.2,23.2,24.2,25.2,26.2,27.2,28.2,29.2,0.8,1.8,2.8,3.8,4.8,5.8,6.8,7.8,8.8,9.8,10.8,11.8,12.8,13.8,14.8,15.8,16.8,17.8,18.8,19.8,20.8,21.8,22.8],
    // JUN
    [23.8,24.8,25.8,26.8,27.8,28.8,0.4,1.4,2.4,3.4,4.4,5.4,6.4,7.4,8.4,9.4,10.4,11.4,12.4,13.4,14.4,15.4,16.4,17.4,18.4,19.4,20.4,21.4,22.4,23.4],
    // JUL
    [24.4,25.4,26.4,27.4,28.4,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    // AUG
    [26,27,28,29,0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5,10.5,11.5,12.5,13.5,14.5,15.5,16.5,17.5,18.5,19.5,20.5,21.5,22.5,23.5,24.5,25.5,26.5],
    // SEP
    [27.5,28.5,29.5,0.9,1.9,2.9,3.9,4.9,5.9,6.9,7.9,8.9,9.9,10.9,11.9,12.9,13.9,14.9,15.9,16.9,17.9,18.9,19.9,20.9,21.9,22.9,23.9,24.9,25.9,26.9],
    // OCT
    [27.9,28.9,0.2,1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2,22.2,23.2,24.2,25.2,26.2,27.2,28.2],
    // NOV
    [29.2,0.4,1.4,2.4,3.4,4.4,5.4,6.4,7.4,8.4,9.4,10.4,11.4,12.4,13.4,14.4,15.4,16.4,17.4,18.4,19.4,20.4,21.4,22.4,23.4,24.4,25.4,26.4,27.4,28.4],
    // DEC
    [29.4,0.7,1.7,2.7,3.7,4.7,5.7,6.7,7.7,8.7,9.7,10.7,11.7,12.7,13.7,14.7,15.7,16.7,17.7,18.7,19.7,20.7,21.7,22.7,23.7,24.7,25.7,26.7,27.7,28.7,0]
  ];
  let moonAge = moonAgeList[mo][d];
  let moonAgeMarkList = [
    "〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇", 
    "〇〇〇〇〇〇〇〇〇〇〇〇〇〇●", 
    "〇〇〇〇〇〇〇〇〇〇〇〇〇●●", 
    "〇〇〇〇〇〇〇〇〇〇〇〇●●●", 
    "〇〇〇〇〇〇〇〇〇〇〇●●●●", 
    "〇〇〇〇〇〇〇〇〇〇●●●●●", 
    "〇〇〇〇〇〇〇〇〇●●●●●●", 
    "〇〇〇〇〇〇〇〇●●●●●●●", 
    "〇〇〇〇〇〇〇●●●●●●●●", 
    "〇〇〇〇〇〇●●●●●●●●●", 
    "〇〇〇〇〇●●●●●●●●●●", 
    "〇〇〇〇●●●●●●●●●●●", 
    "〇〇〇●●●●●●●●●●●●", 
    "〇〇●●●●●●●●●●●●●", 
    "〇●●●●●●●●●●●●●●", 
    "●●●●●●●●●●●●●●●", 
    "●●●●●●●●●●●●●●〇", 
    "●●●●●●●●●●●●●〇〇", 
    "●●●●●●●●●●●●〇〇〇", 
    "●●●●●●●●●●●〇〇〇〇", 
    "●●●●●●●●●●〇〇〇〇〇", 
    "●●●●●●●●●〇〇〇〇〇〇", 
    "●●●●●●●●〇〇〇〇〇〇〇", 
    "●●●●●●●〇〇〇〇〇〇〇〇", 
    "●●●●●●〇〇〇〇〇〇〇〇〇", 
    "●●●●●〇〇〇〇〇〇〇〇〇〇", 
    "●●●●〇〇〇〇〇〇〇〇〇〇〇", 
    "●●●〇〇〇〇〇〇〇〇〇〇〇〇", 
    "●●〇〇〇〇〇〇〇〇〇〇〇〇〇", 
    "●〇〇〇〇〇〇〇〇〇〇〇〇〇〇"
  ];
  let ma = Math.round(moonAge);
  if (ma === 30) {ma = 0;}
  var text = moonAgeMarkList[ma];
  return text;
}

// Season Calender 2024
function seasonCalender() {
  let genzai = new Date();
  let mo = genzai.getMonth();
  let d = genzai.getDate() - 1;
  let seasonAgeList = [
    // JAN
    [23,23,23,23,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1], 
    // FEB
    [1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3], 
    // MAR
    [3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5], 
    // APR
    [5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7], 
    // MAY
    [7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9], 
    // JUN
    [9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11], 
    // JUL
    [11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13], 
    // AUG
    [13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15], 
    // SEP
    [15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17], 
    // OCT
    [17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19], 
    // NOV
    [19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21], 
    // DEC
    [21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23]
  ];
  let seasonAge = seasonAgeList[mo][d];
  let seasonAgeMarkList = [
    "●●〇〇〇〇〇〇〇〇〇〇〇", // 00.小寒(01/06, 05:49)
    "●●●〇〇〇〇〇〇〇〇〇〇", // 01.大寒(01/20, 23:07)
    "●●●●〇〇〇〇〇〇〇〇〇", // 02.立春(02/04, 17:27)
    "●●●●●〇〇〇〇〇〇〇〇", // 03.雨水(02/19, 13:13)
    "●●●●●●〇〇〇〇〇〇〇", // 04.啓蟄(03/05, 11:23)
    "●●●●●●●〇〇〇〇〇〇", // 05.春分(03/20, 12:06)
    "●●●●●●●●〇〇〇〇〇", // 06.清明(04/04, 16:02)
    "●●●●●●●●●〇〇〇〇", // 07.穀雨(04/19, 23:00)
    "●●●●●●●●●●〇〇〇", // 08.立夏(05/05, 09:10)
    "●●●●●●●●●●●〇〇", // 09.小満(05/20, 22:00)
    "●●●●●●●●●●●●〇", // 10.芒種(06/05, 13:10)
    "●●●●●●●●●●●●●", // 11.夏至(06/21, 05:51)
    "〇●●●●●●●●●●●●", // 12.小暑(07/06, 23:20)
    "〇〇●●●●●●●●●●●", // 13.大暑(07/22, 16:44)
    "〇〇〇●●●●●●●●●●", // 14.立秋(08/07, 09:09)
    "〇〇〇〇●●●●●●●●●", // 15.処暑(08/22, 23:55)
    "〇〇〇〇〇●●●●●●●●", // 16.白露(09/07, 12:11)
    "〇〇〇〇〇〇●●●●●●●", // 17.秋分(09/22, 21:44)
    "〇〇〇〇〇〇〇●●●●●●", // 18.寒露(10/08, 04:00)
    "〇〇〇〇〇〇〇〇●●●●●", // 19.霜降(10/23, 07:15)
    "〇〇〇〇〇〇〇〇〇●●●●", // 20.立冬(11/07, 07:20)
    "〇〇〇〇〇〇〇〇〇〇●●●", // 21.小雪(11/22, 04:56)
    "〇〇〇〇〇〇〇〇〇〇〇●●", // 22.大雪(12/07, 00:17)
    "〇〇〇〇〇〇〇〇〇〇〇〇●"  // 23.冬至(12/21, 18:21)
  ];
  var text = seasonAgeMarkList[seasonAge];
  return text;
}
