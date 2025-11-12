const LINES = [
  "this generation got so lazy, for real became fr, brother became bro, and you became mine.",
  "i don’t say this often — you make small things brighter.",
  "no rush, just honesty — i like you."
];

let typedEl = document.getElementById("typed");
let lineIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const line = LINES[lineIndex];
  if (!deleting) {
    typedEl.textContent = line.slice(0, charIndex);
    charIndex++;
    if (charIndex > line.length) {
      deleting = true;
      setTimeout(typeLoop, 1000);
      return;
    }
    setTimeout(typeLoop, 40 + Math.random() * 30);
  } else {
    lineIndex = (lineIndex + 1) % LINES.length;
    deleting = false;
    charIndex = 0;
    setTimeout(typeLoop, 400);
  }
}
typeLoop();

const acceptBtn = document.getElementById("acceptBtn");
const laterBtn = document.getElementById("laterBtn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");
const modalCelebrate = document.getElementById("modalCelebrate");

acceptBtn.addEventListener("click", () => {
  modalText.textContent = "If they say yes — celebrate together 💖";
  modal.classList.add("show");
  sendResponse("Yes");
});
laterBtn.addEventListener("click", () => {
  modalText.textContent = "Take your time — no pressure.";
  modal.classList.add("show");
  sendResponse("Maybe later");
});
modalClose.addEventListener("click", () => modal.classList.remove("show"));
modalCelebrate.addEventListener("click", () => {
  startConfetti(3500);
  modal.classList.remove("show");
});

function startConfetti(duration = 3000) {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth; canvas.height = innerHeight;
  canvas.style.display = "block";
  const pieces = [];
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height / 2,
      vy: 2 + Math.random() * 6,
      w: 6 + Math.random() * 8,
      h: 10 + Math.random() * 10,
      rot: Math.random() * 360,
      spin: Math.random() > 0.5 ? 1 : -1
    });
  }
  let start = performance.now();
  function frame(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      p.y += p.vy;
      p.rot += p.spin * 6;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = `hsl(${Math.floor((p.x + p.y) % 360)},70%,55%)`;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (performance.now() - start < duration) requestAnimationFrame(frame);
    else canvas.style.display = "none";
  }
  requestAnimationFrame(frame);
}

function sendResponse(choice) {
  fetch("/respond", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ choice })
  });
}
