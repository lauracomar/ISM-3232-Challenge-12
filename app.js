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
canvas.addEventListener('mouse', (e) => {
    drawing = true;
    startX = e.offsetX; // get X coordinate
    startY = e.offsetY; // get Y coordinate
});

// move mouse - draw shapes
canvas.addEventListener('movemouse', (e) => {
    if (!drawing) return; // if statement to leave function if not drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    drawShape(e.offsetX, e.offsetY); // call drawShape to draw selected shape
});

// mosue up - stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false; // 
});

// mouse out - stop drawing when the mouse leaves the canvas
canvas.addEventListener('mouseout', () => {
    drawing = false;
});