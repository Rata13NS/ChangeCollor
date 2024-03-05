let colorIndex = 0;
var button = document.getElementById('changeTheColor');
let colors = ['btn-danger', 'btn-warning', 'btn-success'];

function changeColor() {
        colorIndex= (colorIndex + 1) % colors.length;
        button.className = "btn custom-btn " + colors[colorIndex];
}
