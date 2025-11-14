// Fondo animado con burbujas
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

// Ajuste el tamaño del canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Definimos las burbujas
let bubbles = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 4, // Aumentamos el tamaño de las burbujas
  d: Math.random() + 1
}));

// Función para dibujar las burbujas
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

// Función para mover las burbujas
function moveBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    b.y -= b.d; // Las burbujas suben
    if (b.y < 0) {
      b.y = canvas.height;
      b.x = Math.random() * canvas.width; // Alcanza el borde, se reposiciona
    }
  }
}

// Función para animar las burbujas
function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();

// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

// Añadir el evento para abrir/cerrar el menú
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
