const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

let isPen = false;




document.addEventListener('mousedown', ({x, y}) => {
    isPen = true;
    c.beginPath()
    c.moveTo(x, y);
})

document.addEventListener('mouseup', () => {
    isPen = false;
    c.fillStyle = document.getElementById('color-palette').value;
    c.fill();
    c.closePath();
})

document.addEventListener('mousemove', ({x, y}) => {
    if (isPen) {
        c.lineTo(x,y);
        c.strokeStyle = document.getElementById('color-palette').value;
        c.stroke();
    }
})
