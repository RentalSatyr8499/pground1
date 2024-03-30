const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const radius = 100;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let currentColorIndex = 0;
function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = colors[currentColorIndex];
    ctx.fill();
    ctx.closePath();
}

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    drawCircle();
}

setInterval(changeColor, 500); // Change color every 0.5 seconds

// Set canvas size
canvas.width = 2 * radius;
canvas.height = 2 * radius;

// Initial draw
drawCircle();
