document.getElementById('changeColorBtn').addEventListener('click', changeBoxColor);
document.getElementById('resetColorBtn').addEventListener('click', resetBoxColors);

function changeBoxColor() {
    const boxNumber = document.getElementById('boxNumber').value.trim();
    const color = document.getElementById('changeColor').value.trim().toLowerCase();
    const allowedColors = ['red', 'blue', 'purple', 'brown', 'yellow'];
    const box = document.getElementById(`box${boxNumber}`);
    box.style.backgroundColor = color;
}

function resetBoxColors() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = '';
    });
}