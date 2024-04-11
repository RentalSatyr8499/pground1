let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let redCircle = { x: 250, y: 250, radius: 20, color: 'red' };

let circles = [
    { x: Math.random() * canvas.width, y: 250, radius: 20, color: 'blue', dx: 2 },
    { x: Math.random() * canvas.width, y: 250, radius: 20, color: getRandomColor(), dx: 2 },
    { x: Math.random() * canvas.width, y: 250, radius: 20, color: getRandomColor(), dx: 2 }
];

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawCircle(circle) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = circle.color;
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(redCircle);
    for (let i = 0; i < circles.length; i++) {
        if (circles[i].dx !== 0) {
            drawCircle(circles[i]);
            circles[i].x += circles[i].dx;
            if (circles[i].x + circles[i].radius > canvas.width || circles[i].x - circles[i].radius < 0) {
                circles[i].dx = -circles[i].dx;
            }
        }
    }
}

setInterval(update, 10);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38: // Up arrow
            redCircle.y -= 10;
            break;
        case 40: // Down arrow
            redCircle.y += 10;
            break;
        case 37: // Left arrow
            redCircle.x -= 10;
            break;
        case 39: // Right arrow
            redCircle.x += 10;
            break;
        case 32: // Space bar
            for (let i = 0; i < circles.length; i++) {
                if (Math.abs(redCircle.x - circles[i].x) <= 100) {
                    if (circles[i].dx === 0) {
                        circles[i].dx = 2;
                    } else {
                        circles[i].dx = 0;
                    }
                }
            }
            break;
    }
};
