document.getElementById('changeColorBtn').addEventListener('click', changeBoxColor);
document.getElementById('resetColorBtn').addEventListener('click', resetBoxColors);

function changeBoxColor() {
    const boxNumber = document.getElementById('boxNumber').value.trim();
    const color = document.getElementById('changeColor').value.trim().toLowerCase();
    const box = document.getElementById(`box${boxNumber}`);
    if (box) {
        box.style.backgroundColor = color;
    }
}

function resetBoxColors() {
    for (let i = 1; i <= 8; i++) {
        const box = document.getElementById(`box${i}`);
        if (box) {
            box.style.backgroundColor = '';
        }
    }
}