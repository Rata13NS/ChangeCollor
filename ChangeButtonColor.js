let contor = 0

function changeColor() {
    if (contor === 0) {
        document.getElementById("chanegeTheColor").bgcolor = "btn btn-warning";
        ++contor;
    } else if (contor === 1) {
        document.getElementById("chanegeTheColor").bgcolor = "btn btn-success";
        ++contor;
    } else if (contor === 2) {
        document.getElementById("chanegeTheColor").bgcolor = "btn btn-danger";
        contor = 0;
    }
}