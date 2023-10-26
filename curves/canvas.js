const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function makeQuadraticArc(startX, startY, endX, endY, cpX, cpY, color, thickness) {
    // ctx.beginPath();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'black';
    // ctx.arc(cpX, cpY, 20, 0, Math.PI * 2);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.moveTo(cpX, cpY);
    // ctx.lineTo(startX, startY);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.moveTo(cpX, cpY);
    // ctx.lineTo(endX, endY);
    // ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.quadraticCurveTo(cpX, cpY, endX, endY)
    ctx.stroke();
}

function makeCubicArc(startX, startY, endX, endY, cpX1, cpY1, cpX2, cpY2, color, thickness) {

    // ctx.beginPath();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'black';
    // ctx.arc(cpX1, cpY1, 20, 0, Math.PI * 2);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.arc(cpX2, cpY2, 20, 0, Math.PI * 2);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.moveTo(startX, startY);
    // ctx.lineTo(cpX1, cpY1);
    // ctx.lineTo(cpX2, cpY2);
    // ctx.lineTo(endX, endY);
    // ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, endX, endY);
    ctx.stroke();
}

// makeQuadraticArc(50, 200, 200, 200, 125, 50, 'red', 3)
makeCubicArc(250, 150, 400, 250, 300, 50, 450, 100, 'red', 2)
makeCubicArc(250, 150, 100, 250, 200, 50, 50, 100, 'red', 2)
makeQuadraticArc(100, 250, 250, 400, 115, 300, 'red', 2);
makeQuadraticArc(400, 250, 250, 400, 385, 300, 'red', 2)