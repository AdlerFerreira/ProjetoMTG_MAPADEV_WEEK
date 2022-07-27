var x = 1;


function avanca() {
    if (x == 1) {
        document.getElementById("Gideon").classList.add('hidden');
        document.getElementById("Jace").classList.remove('hidden');
        x = 2;
        return;
    }
    if (x == 2) {
        document.getElementById("Jace").classList.add('hidden');
        document.getElementById("Liliana").classList.remove('hidden');
        x = 3;
        return;
    }
    if (x == 3) {
        document.getElementById("Liliana").classList.add('hidden');
        document.getElementById("Chandra").classList.remove('hidden');
        x = 4;
        return;
    }
    if (x == 4) {
        document.getElementById("Chandra").classList.add('hidden');
        document.getElementById("Nissa").classList.remove('hidden');
        x = 5;
        return;
    }
    if (x == 5) {
        document.getElementById("Nissa").classList.add('hidden');
        document.getElementById("Sorin").classList.remove('hidden');
        x = 6;
        return;
    }
    if (x == 6) {
        document.getElementById("Sorin").classList.add('hidden');
        document.getElementById("Bolas").classList.remove('hidden');
        x = 7;
        return;
    }
    if (x == 7) {
        document.getElementById("Bolas").classList.add('hidden');
        document.getElementById("Gideon").classList.remove('hidden');
        x = 1;
        return;
    }
}
function retorna() {
    if (x == 1) {
        document.getElementById("Bolas").classList.remove('hidden');
        document.getElementById("Gideon").classList.add('hidden');
        x = 7;
        return;
    }
    if (x == 7) {
        document.getElementById("Sorin").classList.remove('hidden');
        document.getElementById("Bolas").classList.add('hidden');
        x = 6;
        return;
    }
    if (x == 6) {
        document.getElementById("Nissa").classList.remove('hidden');
        document.getElementById("Sorin").classList.add('hidden');
        x = 5;
        return;
    }
    if (x == 5) {
        document.getElementById("Chandra").classList.remove('hidden');
        document.getElementById("Nissa").classList.add('hidden');
        x = 4;
        return;
    }
    if (x == 4) {
        document.getElementById("Liliana").classList.remove('hidden');
        document.getElementById("Chandra").classList.add('hidden');
        x = 3;
        return;
    }
    if (x == 3) {
        document.getElementById("Jace").classList.remove('hidden');
        document.getElementById("Liliana").classList.add('hidden');
        x = 2;
        return;
    }
    if (x == 2) {
        document.getElementById("Gideon").classList.remove('hidden');
        document.getElementById("Jace").classList.add('hidden');
        x = 1;
        return;
    }
}