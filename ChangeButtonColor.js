let contor = 0;
var button = document.getElementById('changeTheColor');

function changeColor() {
    if (contor === 0) {
        button.classList.replace('btn-danger', 'btn-warning');
        ++contor;
    } else if (contor === 1) {
        button.classList.replace('btn-warning', 'btn-success');
        ++contor;
    } else if (contor === 2) {
        button.classList.replace('btn-success', 'btn-danger');
        contor = 0;
    }
}

function timeChangeColor() {
     if (button.classList.contains('btn-danger')) {
        button.classList.replace('btn-danger', 'btn-warning');
    } else if (button.classList.contains('btn-warning')) {
        button.classList.replace('btn-warning', 'btn-success');
    } else if (button.classList.contains('btn-success')) {
         button.classList.replace('btn-success', 'btn-danger');
    }
}