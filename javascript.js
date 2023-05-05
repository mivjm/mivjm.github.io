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
  var text = "|" + moMark + "|" + dMark + "|" + tMark + "|" + miMark + "|";
  return text;
}
