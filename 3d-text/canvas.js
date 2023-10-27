const canvas = document.querySelector("canvas")

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

const ctx = canvas.getContext('2d');

function draw3DText(text, x, y, style, color, size) {
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.font = style;

  for (let i = 0; i < size; i += 1) {
    ctx.fillText(text, x + i, y + i);
  }

  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

