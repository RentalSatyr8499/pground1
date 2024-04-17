let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let blueCircle = {x: 125, y: 125, radius: 50, color: 'blue'};

// Function to draw blue circle
function drawBlueCircle() {
    ctx.beginPath();
    ctx.arc(blueCircle.x, blueCircle.y, blueCircle.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = blueCircle.color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}

// Red circle in the center
let redCircle = {x: canvas.width / 2, y: canvas.height / 2, radius: 50};

function drawRedCircle(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBlueCircle(); // Redraw the blue circle
    ctx.beginPath();
    ctx.arc(x, y, redCircle.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Check the distance between the red and blue circles
    let xDist = redCircle.x - blueCircle.x;
    let yDist = redCircle.y - blueCircle.y;
    let distance = Math.sqrt(xDist * xDist + yDist * yDist);

    if (distance < redCircle.radius + blueCircle.radius) {
        blueCircle.color = 'green';
    } else {
        blueCircle.color = 'blue';
    }
}

drawBlueCircle(); // Initial draw of blue circle
drawRedCircle(redCircle.x, redCircle.y); // Initial draw of red circle

// Event listener for arrow keys
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            redCircle.y -= 5;
            break;
        case 'ArrowDown':
            redCircle.y += 5;
            break;
        case 'ArrowLeft':
            redCircle.x -= 5;
            break;
        case 'ArrowRight':
            redCircle.x += 5;
            break;
    }
    drawRedCircle(redCircle.x, redCircle.y);
});
