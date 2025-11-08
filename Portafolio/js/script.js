const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

//funcion de resizeCanvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Fondo animado con burbujas
let bubbles = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 1,
  d: Math.random() + 1
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,224,255,0.3)";
  ctx.beginPath();
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    ctx.moveTo(b.x, b.y);
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveBubbles();
}

function moveBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    b.y -= b.d;
    if (b.y < 0) {
      b.y = canvas.height;
      b.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();
