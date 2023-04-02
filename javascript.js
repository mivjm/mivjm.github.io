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

// Stars w/ canvas
// Set up canvas
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Random helper
function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}
// Reset stars by resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //Re-add the stars
  stars();
});
// Add stars
function stars() {
  //Add stars to a small fraction of the canvas
  const canvasSize = canvas.width * canvas.height;
  const starsFraction = canvasSize / 2000;

  for(let i = 0; i < starsFraction; i++) {
    //Set up random elements
    let xPos = random(2, canvas.width - 2);
    let yPos = random(2, canvas.height - 2);
    let alpha = random(0.5, 1);
    let size = random(1, 2);

    //Add stars
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = alpha;
    ctx.fillRect(xPos, yPos, size, size);
  }
}

//Add the stars
stars();
