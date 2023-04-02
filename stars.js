function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

const body = document.querySelector('body');
const canvasSize = body.offsetWidth * body.offsetHeight;
const starsFraction = canvasSize / 2000;

for(let i = 0; i < starsFraction; i++) {
  // Set up random elements
  let xPos = random(0, 100);
  let yPos = random(0, 100);
  let alpha = random(0.5, 1);
  let size = random(1, 2);
  let colour = '#ffffff';
    
  // Add them to the body
  const star = document.createElement('div');
  star.style.position = 'relative';
  star.style.left = xPos + '%';
  star.style.top = yPos + '%';
  star.style.opacity = alpha;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.backgroundColor = colour;
  document.body.appendChild(star);
}
