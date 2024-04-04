var marginPercent = .2; // percent of canvas that will be taken up by the spacing between boxes
var day = 7; 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Calculate box dimensions
var boxSize = ((Math.min(canvas.width, canvas.height))*(1 - marginPercent)) / 3;
var boxSpacing = ((Math.min(canvas.width, canvas.height))*(marginPercent)) / 4;

// Create a 3x3 array with dictionaries
var levelDisplay = [
    [{"text": "Day 1", "color": "mediumpurple", "on": true, "script": "level 1.js"}, {"text": "Day 2", "color": "limegreen", "on": false, "script": "level 1.js"}, {"text": "Day 3", "color": "deepskyblue", "on": false, "script": "level 1.js"}],
    [{"text": "Day 4", "color": "gold", "on": true, "script": "level 1.js"}, {"text": "Day 5", "color": "mediumpurple", "on": false, "script": "level 1.js"}, {"text": "Day 6", "color": "darkorange", "on": false, "script": "level 1.js"}],
    [{"text": "Day 7", "color": "lightpink", "on": true, "script": "level 1.js"}, {"text": "Day 8", "color": "mediumturquoise", "on": false, "script": "level 1.js"}, {"text": "Day 9", "color": "dimgray", "on": false, "script": "level 1.js"}]
];

// Draw boxes and display text
function drawStartMenu() {

    // turn boxes off according to day variable
    boxesOn = 0;
    for (var j = 1; j <= 3; j++) {
        for (var i = 1; i <= 3; i++) {
                if (boxesOn < day) {
                    levelDisplay[j-1][i-1]["on"] = true;
                    boxesOn += 1;
                }
                else {
                    levelDisplay[j-1][i-1]["on"] = false;
                }
        }};

    for (var j = 1; j <= 3; j++) {
        for (var i = 1; i <= 3; i++) {
            var x = i * (boxSize + boxSpacing) - (boxSize / 2); 
            var y = j * (boxSize + boxSpacing) - (boxSize / 2);

            // Get dictionary from array
            var levelInfo = levelDisplay[j - 1][i - 1];
            
            if (levelInfo.on) {
                // Draw box
                ctx.fillStyle = levelInfo.color;
                ctx.fillRect(x - (boxSize / 2), y - (boxSize / 2), boxSize, boxSize);

                // Display text
                ctx.fillStyle = "black";
                ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(levelInfo.text, x, y);
            } else {
                ctx.fillStyle = "black";
                ctx.fillRect(x - (boxSize / 2), y - (boxSize / 2), boxSize, boxSize);
            }
        }
    }
}
drawStartMenu();

function addStartMenuEventListeners(){
    // Add hover and click functionality
    canvas.addEventListener("mousemove", handleMouseInteraction);
    canvas.addEventListener("click", handleMouseInteraction);
}

function handleMouseInteraction(event){
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    for (var j = 1; j <= 3; j++) {
        for (var i = 1; i <= 3; i++) {
            var x = i * (boxSize + boxSpacing) - (boxSize / 2); 
            var y = j * (boxSize + boxSpacing) - (boxSize / 2);
            var levelInfo = levelDisplay[j - 1][i - 1];
            var mouseInBox = (mouseX > x - (boxSize / 2) && mouseX < x + (boxSize / 2) && mouseY > y - (boxSize / 2) && mouseY < y + (boxSize / 2))

            if (levelInfo.on && mouseInBox) {
                    // Change box color on hover (you can replace "yellow" with your desired hover color)
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(x - (boxSize / 2), y - (boxSize / 2), boxSize, boxSize);
                    
                    ctx.fillStyle = "black";
                    ctx.font = "30px Arial";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(levelInfo.text, x, y);

                    if(event.type == "click"){
                        switchScenes("startMenu", "level1", "level1.js");
                    }
                } else if (levelInfo.on) {
                    // Reset box color
                    ctx.fillStyle = levelInfo.color;
                    ctx.fillRect(x - (boxSize / 2), y - (boxSize / 2), boxSize, boxSize);
                    
                    ctx.fillStyle = "black";
                    ctx.font = "30px Arial";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(levelInfo.text, x, y);
                }
            }
        }
};

