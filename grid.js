function createGrid() {
    const targetDiv = document.getElementById("target");
    targetDiv.innerHTML = ""; 
    const gridSize = 100;

    for (let i = 1; i <= gridSize; i++) {
        const gridCell = document.createElement("div");
        gridCell.className = "grid-cell";
        gridCell.id = `cell-${i}`;  
        gridCell.innerText = i;  
        targetDiv.appendChild(gridCell);
    }
}
let position = 0;  
let intervalId = null;  

function move() {
    const gridSize = 100;
    position = 0;  

    if (intervalId) {
        clearInterval(intervalId);  
    }

    intervalId = setInterval(() => {
        if (position > 0) {
            toggle(position - 1);  
        }
        toggle(position);  
        position = (position + 1) % gridSize;  
    }, 100);
}
function toggle(pos) {
    const cell = document.getElementById(`cell-${pos + 1}`);
    if (cell) {
        cell.classList.toggle("on");  
    }
}
