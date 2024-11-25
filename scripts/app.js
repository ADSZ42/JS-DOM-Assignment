document.getElementById('changeColorBtn').addEventListener('click', changeBoxColor);
document.getElementById('resetColorBtn').addEventListener('click', resetBoxColors);

function changeBoxColor() {
    const boxNumber = document.getElementById('boxNumber').value.trim();
    const color = document.getElementById('changeColor').value.trim().toLowerCase();
    const box = document.getElementById(`box${boxNumber}`);
    box.style.backgroundColor = color;
}

function resetBoxColors() {
    const boxes = document.querySelectorAll('.boxSize');
    boxes.forEach(box => {
        box.style.backgroundColor = '';
    });
}