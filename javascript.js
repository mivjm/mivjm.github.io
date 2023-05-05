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
  let genzai = new Date();
  let y = genzai.getFullYear();
  let mo = genzai.getMonth();
  let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let d = genzai.getDate();
  let m = months[mo];
  var text = d + " " + m + " " + y;
  return text;
}

// Graphical Clock
function graphicalClock() { 
  let genzai = new Date();
  let mo = genzai.getMonth();
  let d = genzai.getDate();
  let t = genzai.getHours();
  let mi = genzai.getMinutes();
  let moMarkList = [
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
    "〇●●"
  ];
  let dMarkList = [
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
    "〇〇〇●"
  ];
  let tMarkList = [
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
    "〇〇●●●●"
  ];
  let miMarkList = [
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
  let moMark = moMarkList[mo];
  let dMark = dMarkList[d];
  let tMark = tMarkList[t];
  let miMark = miMarkList[mi];
  var text = moMark + "|" + dMark + "|" + tMark + "|" + miMark + "|";
  return text;
}

function moonCalender() {
  let genzai = new Date();
  let mo = genzai.getMonth();
  let d = genzai.getDate();
  let moonAgeList = [
    // 1
    [9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 15.1, 16.1, 17.1, 18.1, 19.1, 20.1, 21.1, 22.1, 23.1, 24.1, 25.1, 26.1, 27.1, 28.1, 29.1, 0.6, 1.6, 2.6, 3.6, 4.6, 5.6, 6.6, 7.6, 8.6, 9.6], 
    // 2
    [10.6, 11.6, 12.6, 13.6, 14.6, 15.6, 16.6, 17.6, 18.6, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.6, 26.6, 27.6, 28.6, 0.2, 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2], 
    // 3
    [9.2, 10.2, 11.2, 12.2, 13.2, 14.2, 15.2, 16.2, 17.2, 18.2, 19.2, 20.2, 21.2, 22.2, 23.2, 24.2, 25.2, 26.2, 27.2, 28.2, 29.2, 0.8, 1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8, 8.8, 9.8], 
    // 4
    [10.8, 11.8, 12.8, 13.8, 14.8, 15.8, 16.8, 17.8, 18.8, 19.8, 20.8, 21.8, 22.8, 23.8, 24.8, 25.8, 26.8, 27.8, 28.8, 0.3, 1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3], 
    // 5
    [11.3, 12.3, 13.3, 14.3, 15.3, 16.3, 17.3, 18.3, 19.3, 20.3, 21.3, 22.3, 23.3, 24.3, 25.3, 26.3, 27.3, 28.3, 29.3, 0.8, 1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8, 8.8, 9.8, 10.8, 11.8], 
    // 6
    [12.8, 13.8, 14.8, 15.8, 16.8, 17.8, 18.8, 19.8, 20.8, 21.8, 22.8, 23.8, 24.8, 25.8, 26.8, 27.8, 28.8, 0.3, 1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3], 
    // 7
    [13.3, 14.3, 15.3, 16.3, 17.3, 18.3, 19.3, 20.3, 21.3, 22.3, 23.3, 24.3, 25.3, 26.3, 27.3, 28.3, 29.3, 0.7, 1.7, 2.7, 3.7, 4.7, 5.7, 6.7, 7.7, 8.7, 9.7, 10.7, 11.7, 12.7, 13.7], 
    // 8
    [14.7, 15.7, 16.7, 17.7, 18.7, 19.7, 20.7, 21.7, 22.7, 23.7, 24.7, 25.7, 26.7, 27.7, 28.7, 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 15.1], 
    // 9
    [16.1, 17.1, 18.1, 19.1, 20.1, 21.1, 22.1, 23.1, 24.1, 25.1, 26.1, 27.1, 28.1, 29.1, 0.4, 1.4, 2.4, 3.4, 4.4, 5.4, 6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4, 15.4], 
    // 10
    [16.4, 17.4, 18.4, 19.4, 20.4, 21.4, 22.4, 23.4, 24.4, 25.4, 26.4, 27.4, 28.4, 29.4, 0.8, 1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8, 8.8, 9.8, 10.8, 11.8, 12.8, 13.8, 14.8, 15.8, 16.8], 
    // 11
    [17.8, 18.8, 19.8, 20.8, 21.8, 22.8, 23.8, 24.8, 25.8, 26.8, 27.8, 28.8, 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 15.1, 16.1, 17.1], 
    // 12
    [18.1, 19.1, 20.1, 21.1, 22.1, 23.1, 24.1, 25.1, 26.1, 27.1, 28.1, 29.1, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5, 18.5]
  ];
  let d = d -1;
  var moonAge = moonAgeList[mo][d];
  alert(moonAge);
  return moonAge;
}
