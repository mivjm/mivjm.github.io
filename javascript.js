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
  let d = genzai.getDate() - 1;
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

// Moon Calender 2023
function moonCalender() {
  let genzai = new Date();
  let mo = genzai.getMonth();
  let d = genzai.getDate() - 1;
  let moonAgeList = [
    // JAN
    [9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 15.1, 16.1, 17.1, 18.1, 19.1, 20.1, 21.1, 22.1, 23.1, 24.1, 25.1, 26.1, 27.1, 28.1, 29.1, 0.6, 1.6, 2.6, 3.6, 4.6, 5.6, 6.6, 7.6, 8.6, 9.6], 
    // FEB
    [10.6, 11.6, 12.6, 13.6, 14.6, 15.6, 16.6, 17.6, 18.6, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.6, 26.6, 27.6, 28.6, 0.2, 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2], 
    // MAR
    [9.2, 10.2, 11.2, 12.2, 13.2, 14.2, 15.2, 16.2, 17.2, 18.2, 19.2, 20.2, 21.2, 22.2, 23.2, 24.2, 25.2, 26.2, 27.2, 28.2, 29.2, 0.8, 1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8, 8.8, 9.8], 
    // APR
    [10.8, 11.8, 12.8, 13.8, 14.8, 15.8, 16.8, 17.8, 18.8, 19.8, 20.8, 21.8, 22.8, 23.8, 24.8, 25.8, 26.8, 27.8, 28.8, 0.3, 1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3], 
    // MAY
    [11.3, 12.3, 13.3, 14.3, 15.3, 16.3, 17.3, 18.3, 19.3, 20.3, 21.3, 22.3, 23.3, 24.3, 25.3, 26.3, 27.3, 28.3, 29.3, 0.8, 1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8, 8.8, 9.8, 10.8, 11.8], 
    // JUN
    [12.8, 13.8, 14.8, 15.8, 16.8, 17.8, 18.8, 19.8, 20.8, 21.8, 22.8, 23.8, 24.8, 25.8, 26.8, 27.8, 28.8, 0.3, 1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3], 
    // JUL
    [13.3, 14.3, 15.3, 16.3, 17.3, 18.3, 19.3, 20.3, 21.3, 22.3, 23.3, 24.3, 25.3, 26.3, 27.3, 28.3, 29.3, 0.7, 1.7, 2.7, 3.7, 4.7, 5.7, 6.7, 7.7, 8.7, 9.7, 10.7, 11.7, 12.7, 13.7], 
    // AUG
    [14.7, 15.7, 16.7, 17.7, 18.7, 19.7, 20.7, 21.7, 22.7, 23.7, 24.7, 25.7, 26.7, 27.7, 28.7, 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 15.1], 
    // SEP
    [16.1, 17.1, 18.1, 19.1, 20.1, 21.1, 22.1, 23.1, 24.1, 25.1, 26.1, 27.1, 28.1, 29.1, 0.4, 1.4, 2.4, 3.4, 4.4, 5.4, 6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4, 15.4], 
    // OCT
    [16.4, 17.4, 18.4, 19.4, 20.4, 21.4, 22.4, 23.4, 24.4, 25.4, 26.4, 27.4, 28.4, 29.4, 0.8, 1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8, 8.8, 9.8, 10.8, 11.8, 12.8, 13.8, 14.8, 15.8, 16.8], 
    // NOV
    [17.8, 18.8, 19.8, 20.8, 21.8, 22.8, 23.8, 24.8, 25.8, 26.8, 27.8, 28.8, 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 15.1, 16.1, 17.1], 
    // DEC
    [18.1, 19.1, 20.1, 21.1, 22.1, 23.1, 24.1, 25.1, 26.1, 27.1, 28.1, 29.1, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5, 18.5]
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
    "●〇〇〇〇〇〇〇〇〇〇〇〇〇〇", 
  ];
  let ma = Math.round(moonAge);
  if (ma === 30) {ma = 0;}
  var moonAgeMark = moonAgeMarkList[ma];
  return moonAgeMark;
}

// Sun Calender 2023
function sunCalender() {
  let genzai = new Date();
  let mo = genzai.getMonth();
  let d = genzai.getDate() - 1;
  let sunTimeList = [
    // JAN
    [["6:51", "16:38"], ["6:51", "16:38"], ["6:51", "16:40"], ["6:51", "16:40"], ["6:51", "16:41"], ["6:51", "16:41"], ["6:51", "16:43"], ["6:51", "16:43"], ["6:51", "16:45"], ["6:51", "16:45"], ["6:51", "16:47"], ["6:51", "16:47"], ["6:51", "16:49"], ["6:51", "16:49"], ["6:50", "16:51"], ["6:50", "16:51"], ["6:50", "16:53"], ["6:50", "16:53"], ["6:49", "16:55"], ["6:49", "16:55"], ["6:48", "16:57"], ["6:48", "16:57"], ["6:47", "16:59"], ["6:47", "16:59"], ["6:46", "17:01"], ["6:46", "17:01"], ["6:45", "17:03"], ["6:45", "17:03"], ["6:44", "17:05"], ["6:44", "17:05"], ["6:42", "17:07"]], 
    // FEB
    [["6:42", "17:07"], ["6:41", "17:09"], ["6:41", "17:09"], ["6:39", "17:11"], ["6:39", "17:11"], ["6:38", "17:13"], ["6:38", "17:13"], ["6:36", "17:15"], ["6:36", "17:15"], ["6:34", "17:17"], ["6:34", "17:17"], ["6:32", "17:19"], ["6:32", "17:19"], ["6:30", "17:21"], ["6:30", "17:21"], ["6:28", "17:23"], ["6:28", "17:23"], ["6:25", "17:25"], ["6:25", "17:25"], ["6:23", "17:27"], ["6:23", "17:27"], ["6:21", "17:29"], ["6:21", "17:29"], ["6:18", "17:31"], ["6:18", "17:31"], ["6:16", "17:33"], ["6:16", "17:33"], ["6:13", "17:35"]], 
    // MAR
    [["6:13", "17:35"], ["6:11", "17:37"], ["6:11", "17:37"], ["6:08", "17:38"], ["6:08", "17:38"], ["6:05", "17:40"], ["6:05", "17:40"], ["6:03", "17:42"], ["6:03", "17:42"], ["6:00", "17:44"], ["6:00", "17:44"], ["5:57", "17:46"], ["5:57", "17:46"], ["5:54", "17:47"], ["5:54", "17:47"], ["5:52", "17:49"], ["5:52", "17:49"], ["5:49", "17:51"], ["5:49", "17:51"], ["5:46", "17:52"], ["5:46", "17:52"], ["5:43", "17:54"], ["5:43", "17:54"], ["5:40", "17:56"], ["5:40", "17:56"], ["5:37", "17:57"], ["5:37", "17:57"], ["5:34", "17:59"], ["5:34", "17:59"], ["5:32", "18:01"], ["5:32", "18:01"]], 
    // APR
    [["5:29", "18:02"], ["5:29", "18:02"], ["5:29", "18:04"], ["5:29", "18:04"], ["5:26", "18:06"], ["5:26", "18:06"], ["5:23", "18:07"], ["5:23", "18:07"], ["5:20", "18:09"], ["5:20", "18:09"], ["5:18", "18:11"], ["5:18", "18:11"], ["5:15", "18:12"], ["5:15", "18:12"], ["5:12", "18:14"], ["5:12", "18:14"], ["5:09", "18:16"], ["5:09", "18:16"], ["5:07", "18:17"], ["5:07", "18:17"], ["5:04", "18:19"], ["5:04", "18:19"], ["5:02", "18:21"], ["5:02", "18:21"], ["4:59", "18:22"], ["4:59", "18:22"], ["4:57", "18:24"], ["4:57", "18:24"], ["4:54", "18:26"], ["4:54", "18:26"]], 
    // MAY
    [["4:50", "18:27"], ["4:50", "18:27"], ["4:48", "18:29"], ["4:48", "18:29"], ["4:46", "18:31"], ["4:46", "18:31"], ["4:44", "18:32"], ["4:44", "18:32"], ["4:42", "18:34"], ["4:42", "18:34"], ["4:40", "18:36"], ["4:40", "18:36"], ["4:38", "18:37"], ["4:38", "18:37"], ["4:37", "18:39"], ["4:37", "18:39"], ["4:35", "18:41"], ["4:35", "18:41"], ["4:34", "18:42"], ["4:34", "18:42"], ["4:32", "18:44"], ["4:32", "18:44"], ["4:31", "18:45"], ["4:31", "18:45"], ["4:30", "18:47"], ["4:30", "18:47"], ["4:29", "18:48"], ["4:29", "18:48"], ["4:28", "18:49"], ["4:28", "18:49"], ["4:27", "18:51"]], 
    // JUN
    [["4:27", "18:51"], ["4:26", "18:52"], ["4:26", "18:52"], ["4:26", "18:53"], ["4:26", "18:53"], ["4:25", "18:54"], ["4:25", "18:54"], ["4:25", "18:55"], ["4:25", "18:55"], ["4:25", "18:56"], ["4:25", "18:56"], ["4:25", "18:57"], ["4:25", "18:57"], ["4:25", "18:58"], ["4:25", "18:58"], ["4:25", "18:59"], ["4:25", "18:59"], ["4:25", "19:00"], ["4:25", "19:00"], ["4:25", "19:00"], ["4:25", "19:00"], ["4:26", "19:01"], ["4:26", "19:01"], ["4:26", "19:01"], ["4:26", "19:01"], ["4:27", "19:01"], ["4:27", "19:01"], ["4:27", "19:01"], ["4:27", "19:01"], ["4:28", "19:01"]], 
    // JUL
    [["4:28", "19:01"], ["4:29", "19:01"], ["4:29", "19:01"], ["4:30", "19:01"], ["4:30", "19:01"], ["4:31", "19:01"], ["4:31", "19:01"], ["4:32", "19:00"], ["4:32", "19:00"], ["4:33", "19:00"], ["4:33", "19:00"], ["4:34", "18:59"], ["4:34", "18:59"], ["4:36", "18:58"], ["4:36", "18:58"], ["4:37", "18:57"], ["4:37", "18:57"], ["4:38", "18:56"], ["4:38", "18:56"], ["4:40", "18:55"], ["4:40", "18:55"], ["4:41", "18:54"], ["4:41", "18:54"], ["4:42", "18:53"], ["4:42", "18:53"], ["4:44", "18:51"], ["4:44", "18:51"], ["4:45", "18:50"], ["4:45", "18:50"], ["4:47", "18:48"], ["4:47", "18:48"]], 
    // AUG
    [["4:49", "18:46"], ["4:49", "18:46"], ["4:50", "18:44"], ["4:50", "18:44"], ["4:52", "18:42"], ["4:52", "18:42"], ["4:53", "18:40"], ["4:53", "18:40"], ["4:55", "18:38"], ["4:55", "18:38"], ["4:56", "18:36"], ["4:56", "18:36"], ["4:58", "18:34"], ["4:58", "18:34"], ["4:59", "18:32"], ["4:59", "18:32"], ["5:01", "18:29"], ["5:01", "18:29"], ["5:03", "18:27"], ["5:03", "18:27"], ["5:04", "18:24"], ["5:04", "18:24"], ["5:06", "18:22"], ["5:06", "18:22"], ["5:07", "18:19"], ["5:07", "18:19"], ["5:09", "18:17"], ["5:09", "18:17"], ["5:10", "18:14"], ["5:10", "18:14"], ["5:12", "18:11"]], 
    // SEP
    [["5:12", "18:11"], ["5:13", "18:08"], ["5:13", "18:08"], ["5:15", "18:05"], ["5:15", "18:05"], ["5:16", "18:03"], ["5:16", "18:03"], ["5:18", "18:00"], ["5:18", "18:00"], ["5:19", "17:57"], ["5:19", "17:57"], ["5:21", "17:54"], ["5:21", "17:54"], ["5:22", "17:51"], ["5:22", "17:51"], ["5:24", "17:48"], ["5:24", "17:48"], ["5:25", "17:45"], ["5:25", "17:45"], ["5:27", "17:42"], ["5:27", "17:42"], ["5:28", "17:39"], ["5:28", "17:39"], ["5:30", "17:36"], ["5:30", "17:36"], ["5:32", "17:33"], ["5:32", "17:33"], ["5:33", "17:30"], ["5:33", "17:30"], ["5:35", "17:28"]], 
    // OCT
    [["5:35", "17:28"], ["5:36", "17:25"], ["5:36", "17:25"], ["5:38", "17:22"], ["5:38", "17:22"], ["5:39", "17:19"], ["5:39", "17:19"], ["5:41", "17:16"], ["5:41", "17:16"], ["5:43", "17:13"], ["5:43", "17:13"], ["5:44", "17:11"], ["5:44", "17:11"], ["5:46", "17:08"], ["5:46", "17:08"], ["5:48", "17:05"], ["5:48", "17:05"], ["5:50", "17:03"], ["5:50", "17:03"], ["5:51", "17:00"], ["5:51", "17:00"], ["5:53", "16:58"], ["5:53", "16:58"], ["5:55", "16:56"], ["5:55", "16:56"], ["5:57", "16:53"], ["5:57", "16:53"], ["5:59", "16:51"], ["5:59", "16:51"], ["6:01", "16:49"], ["6:01", "16:49"]], 
    // NOV
    [["6:02", "16:47"], ["6:02", "16:47"], ["6:04", "16:45"], ["6:04", "16:45"], ["6:06", "16:43"], ["6:06", "16:43"], ["6:08", "16:41"], ["6:08", "16:41"], ["6:10", "16:39"], ["6:10", "16:39"], ["6:12", "16:38"], ["6:12", "16:38"], ["6:14", "16:36"], ["6:14", "16:36"], ["6:16", "16:35"], ["6:16", "16:35"], ["6:18", "16:34"], ["6:18", "16:34"], ["6:20", "16:32"], ["6:20", "16:32"], ["6:22", "16:31"], ["6:22", "16:31"], ["6:24", "16:30"], ["6:24", "16:30"], ["6:26", "16:30"], ["6:26", "16:30"], ["6:28", "16:29"], ["6:28", "16:29"], ["6:30", "16:28"], ["6:30", "16:28"]], 
    // DEC
    [["6:32", "16:28"], ["6:32", "16:28"], ["6:33", "16:28"], ["6:33", "16:28"], ["6:35", "16:28"], ["6:35", "16:28"], ["6:37", "16:28"], ["6:37", "16:28"], ["6:39", "16:28"], ["6:39", "16:28"], ["6:40", "16:28"], ["6:40", "16:28"], ["6:42", "16:28"], ["6:42", "16:28"], ["6:43", "16:29"], ["6:43", "16:29"], ["6:44", "16:30"], ["6:44", "16:30"], ["6:46", "16:30"], ["6:46", "16:30"], ["6:47", "16:31"], ["6:47", "16:31"], ["6:48", "16:32"], ["6:48", "16:32"], ["6:49", "16:33"], ["6:49", "16:33"], ["6:50", "16:35"], ["6:50", "16:35"], ["6:50", "16:37"], ["6:50", "16:37"], ["6:51", "16:39"]]
  ];
  let sunTime = sunTimeList[mo][d];
  // [4:25~6:51, 16:28~19:01]
  var st = sunTime[0][0] + "~" + sunTime[0][1];
  return st;
}
