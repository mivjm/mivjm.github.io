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
/*
document.addEventListner('DOMContentLoaded', function(){
    // オーバレイを解放する関数
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
}, false);
*/

//　クリック位置取得（絶対）
/*
document.body.addEventListener( "click", function( event ) {
	var x = event.pageX ;
	var y = event.pageY ;
} ) ;
*/
document.body.addEventListener( "click", function( event ) {
  var x = event.pageX ;
  var y = event.pageY ;
} ) ;

/*
//　クリック位置取得（相対）
// <div id="target">...</div>などの要素にクリックイベントを設定
document.getElementById( "target" ).addEventListener( "click", function( event ) {
	var clickX = event.pageX ;
	var clickY = event.pageY ;

	// 要素の位置を取得
	var clientRect = this.getBoundingClientRect() ;
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	// 要素内におけるクリック位置を計算
	var x = clickX - positionX ;
	var y = clickY - positionY ;
} ) ;

// HTML要素へ文字表示
var sampleArea = document.getElementById("sampleArea");
sampleArea.innerHTML = "表示したい文字列";

// ブラウザコンソールへ文字表示
console.log("表示したい文字列");

let price = 200;
console.log('値段は' + price + '円です。');
>> 値段は200円です。

let data = ['Orange', 'Melon'];
console.log('商品は' + data + 'です。');
>> 商品はOrange,Melonです。
*/

// 要素内のクリック位置をブラウザコンソールに表示
document.getElementById( "clickTarget" ).addEventListener( "click", function( event ) {
  // 絶対的なクリック位置を取得
  var clickX = event.pageX ;
  var clickY = event.pageY ;
  
  // 要素の位置を取得
  var clientRect = this.getBoundingClientRect() ;
  var positionX = clientRect.left + window.pageXOffset ;
  var positionY = clientRect.top + window.pageYOffset ;
  
  // 要素内のクリック位置を計算
  var x = clickX - positionX ;
  var y = clickY - positionY ;
  
  // ブラウザコンソールへ結果を表示
  console.log(' *** x:' + x + ' y:' + y);
} ) ;
