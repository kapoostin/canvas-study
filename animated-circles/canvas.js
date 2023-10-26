const canvas = document.querySelector("canvas")

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

const c = canvas.getContext('2d');

const getRandomColor = () => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.15)`

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x + radius;
    this.y = y + radius;
    this.dx = dx * Math.pow(-1, Math.floor(Math.random() * 10));
    this.dy = dy * Math.pow(-1, Math.floor(Math.random() * 10));
    this.radius = radius;
    this.color = getRandomColor();
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fill();
  }

  move() {
    if (this.x + this.radius > SCREEN_WIDTH || this.x - this.radius < 0) {
      this.dx = -this.dx ;
      this.color = getRandomColor();
    }
    this.x += this.dx;

    if (this.y + this.radius > SCREEN_HEIGHT || this.y - this.radius < 0) {
      this.dy = -this.dy;
      this.color = getRandomColor();
    }
    this.y += this.dy;

    this.draw();
  }
}

const circles = [];

for (let x = 0; x < 20; x += 1) {
  const radius = Math.random() * 100;
  circles.push(new Circle((SCREEN_WIDTH - radius * 2) * Math.random(), (SCREEN_HEIGHT - radius * 2) * Math.random(), 1, 1, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circles.forEach((circle) => circle.move())
}

// animate();
