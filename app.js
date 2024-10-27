//task 1: html
//Task 2: Configure the JavaScript for Drawing Context
const canvas = document.getElementById('canva'); // canva for drawing
const context = canvas.getContext('2d'); //2d drawing
const clearButton = document.getElementById('clear'); //clear canva button
const colorInput = document.getElementById('color'); //color input
const pickShape = document.querySelectorAll('input[name="shape"]'); // pick shape

let drawing = false; // check if canva is being used
let startX, startY; // variables to store coordinates

// mouse down - start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX; // get X coordinate
    startY = e.offsetY; // get Y coordinate
});

// move mouse - draw shapes
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return; // if statement to leave function if not drawing
    drawShape(e.offsetX, e.offsetY); // call drawShape to draw selected shape
});

// mosue up - stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    drawShape(e.offsetX, e.offsetY);
});

// mouse out - stop drawing when the mouse leaves the canvas
canvas.addEventListener('mouseout', () => {
    drawing = false;
});

// Task 3: Implement Shape Drawing Logic
function drawShape(X, Y) {
    const shape = document.querySelector('input[name="shape"]:checked').value; //get selected shape
    context.beginPath();// new path 
    context.strokeStyle = colorInput.value; // set stroke to color chosen

    if (shape === 'line') {
        context.moveTo(startX, startY); //move to starting point
        context.lineTo(X, Y); // draw line
    } else if (shape === 'rectangle') {
        context.rect(startX, startY, X - startX, Y - startY); // draw rectangle
    } else if (shape === 'circle') {
        const radius = Math.sqrt((X - startX) ** 2); // calculate radius
        context.arc(startX, startY, radius, 0, Math.PI * 2);//draw circle
    }
    context.stroke();//stroke to draw
}

//task 4: Add Color Selection and Canvas Clearing
clearButton.addEventListener('click', clearCanva)// clear button
function clearCanva() { //function to clear canva
    context.clearRect(0, 0, canvas.width, canvas.height);//clear full canva
}