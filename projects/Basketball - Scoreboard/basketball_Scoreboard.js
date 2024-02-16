let homeNUM = document.getElementById("homeNum");
let guestNUM = document.getElementById("guestNum");
let homeResult = 0;
let guestResult = 0;

homeNUM.textContent = homeResult;
guestNUM.textContent = guestResult;

function homeAdd1() {
    homeResult++;
    homeNUM.textContent = homeResult;
}

function homeAdd2() {
    homeResult += 2;
    homeNUM.textContent = homeResult;
}

function homeAdd3() {
    homeResult += 3;
    homeNUM.textContent = homeResult;
}

function guestAdd1() {
    guestResult++;
    guestNUM.textContent = guestResult;
}

function guestAdd2() {
    guestResult += 2;
    guestNUM.textContent = guestResult;
}

function guestAdd3() {
    guestResult += 3;
    guestNUM.textContent = guestResult;
}
