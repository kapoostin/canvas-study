const canvas = document.querySelector("canvas")

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const BROWN_COLOR = "#75522a";
const BRIGHT_BROWN_COLOR = '#da9446';

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

const ctx = canvas.getContext('2d');

ctx.lineWidth = 25;
ctx.strokeStyle = BROWN_COLOR;
ctx.strokeRect(50, 50, 400, 400);
ctx.stroke();

for (let x = 1; x <= 8; x += 1) {
  for (let y = 1; y <= 8; y += 1) {
    ctx.fillStyle = (x + y) % 2 ? BROWN_COLOR : BRIGHT_BROWN_COLOR;
    ctx.fillRect(x * 50, y * 50, 50, 50);
  }
}

