const canvas = document.querySelector("canvas")

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const SCREEN_CENTER_X = SCREEN_WIDTH / 2;
const SCREEN_CENTER_Y = SCREEN_HEIGHT / 2;

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

const ctx = canvas.getContext('2d');
const radian = Math.PI / 180;

// Body
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'yellow';
ctx.arc(SCREEN_CENTER_X, SCREEN_CENTER_Y, 200, 45 * radian, 315 * radian);
ctx.lineTo(SCREEN_CENTER_X, SCREEN_CENTER_Y);
ctx.lineTo(SCREEN_CENTER_X + 145, SCREEN_CENTER_Y + 145);
ctx.fill();
ctx.stroke();

// Eye
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(SCREEN_CENTER_X + 5, SCREEN_CENTER_Y - 90, 25, 0, Math.PI * 2);
ctx.fill();



