let TingkatKelahiranPrey, TingkatKematianPrey, TingkatKelahiranPredator , TingkatKematianPredator;

let TingkatKelahiranPreyContent, TingkatKematianPreyContent, TingkatKelahiranPredatorContent, TingkatKematianPredatorContent;

function toggle(topic) {
    if (topic == "Tingkat Kelahiran Prey (Padi)") {
        TingkatKelahiranPrey = !TingkatKelahiranPrey
    }
    if (topic == "Tingkat Kematian Populasi Prey (Padi)") {
        TingkatKematianPrey = !TingkatKematianPrey
    }
    if (topic == "Tingkat Kelahiran Predator (Tikus Sawah)") {
        TingkatKelahiranPredator = ! TingkatKelahiranPredator
    }
    if (topic == "Tingkat Kematian Predator (Tikus Sawah)") {
        TingkatKematianPredator = !TingkatKematianPredator
    }

    changeContents();
}

function changeContents() {
    if (TingkatKelahiranPrey) {
        for (let i = 0; i < TingkatKelahiranPreyContent.length; i++) {
            TingkatKelahiranPreyContent[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < TingkatKelahiranPreyContent.length; i++) {
            TingkatKelahiranPreyContent[i].style.display = "none";
        }
    } 

    if (TingkatKematianPrey) {
        for (let i = 0; i < TingkatKematianPreyContent.length; i++) {
            TingkatKematianPreyContent[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < TingkatKematianPreyContent.length; i++) {
            TingkatKematianPreyContent[i].style.display = "none";
        }
    }

    if ( TingkatKelahiranPredator) {
        for (let i = 0; i < TingkatKelahiranPredatorContent.length; i++) {
            TingkatKelahiranPredatorContent[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < TingkatKelahiranPredatorContent.length; i++) {
            TingkatKelahiranPredatorContent[i].style.display = "none";
        }
    }

    if (TingkatKematianPredator) {
        for (let i = 0; i < TingkatKematianPredatorContent.length; i++) {
            TingkatKematianPredatorContent[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < TingkatKematianPredatorContent.length; i++) {
            TingkatKematianPredatorContent[i].style.display = "none";
        }
    }
}

window.onload = function () {
    TingkatKelahiranPrey = document.getElementById("Tingkat Kelahiran Prey-check").checked;
    TingkatKematianPrey = document.getElementById("TingkatKematianPrey-check").checked;
    TingkatKelahiranPredator= document.getElementById(" TingkatKelahiranPredator-check").checked;
    TingkatKematianPredator = document.getElementById("TingkatKematianPredator-check").checked;

    TingkatKelahiranPreyContent = document.getElementsByClassName("Tingkat Kelahiran Prey");
    TingkatKematianPreyContent = document.getElementsByClassName("TingkatKematianPrey");
    TingkatKelahiranPredatorContent = document.getElementsByClassName(" TingkatKelahiranPredator");
    TingkatKematianPredatorContent = document.getElementsByClassName("TingkatKematianPredator");

    changeContents();
}