/* JavaScript du menu déroulant */

/* Initialisation des éléments */
var avant = document.getElementById("avant");
var milieu = document.getElementById("choix");
var apres = document.getElementById("apres");

var car = ["Presentation", "Portrait", "Circuit", "Organisation", "Galerie Photo", "Stickers"];
var encours = 0;

/* Variables pour les boutons */
var buttonLeft = document.getElementById("av");
var buttonMiddle = document.getElementById("ch");
var buttonRight = document.getElementById("ap");

function setupListeners() {
    apres.addEventListener("click", suivant);
    avant.addEventListener("click", precedant);
    console.log("Listeners configurés.");
}

function suivant() {
    console.log("Avant le click : " + car[encours] + ", " + encours);
    encours = (encours + 1) % car.length;  // Gestion circulaire
    console.log("Après le click : " + car[encours] + ", " + encours);
    updateButtons();
}

function precedant() {
    console.log("Avant le click : " + car[encours] + ", " + encours);
    encours = (encours - 1 + car.length) % car.length;  // Gestion circulaire
    console.log("Après le click : " + car[encours] + ", " + encours);
    updateButtons();
}

// Réinitialisation des liens et du texte des boutons
function resetLinks() {
    // Désactiver les liens des boutons (à gauche et à droite)
    buttonLeft.href = "#";
    buttonMiddle.href = "#";
    buttonRight.href = "#";
    
    // Remettre les textes par défaut
    buttonLeft.textContent = "Stickers";
    buttonMiddle.textContent = "Presentation";
    buttonRight.textContent = "Portrait";
}

// Mettre à jour les boutons en fonction de l'état courant
function updateButtons() {
    resetLinks();

    if (car[encours] == "Presentation") {
        setLinks("Stickers", "Presentation", "Portrait");
    } else if (car[encours] == "Portrait") {
        setLinks("Presentation", "Portrait", "Circuit");
    } else if (car[encours] == "Circuit") {
        setLinks("Portrait", "Circuit", "Organisation");
    } else if (car[encours] == "Organisation") {
        setLinks("Circuit", "Organisation", "Galerie Photo");
    } else if (car[encours] == "Galerie Photo") {
        setLinks("Organisation", "Galerie Photo", "Stickers");
    } else if (car[encours] == "Stickers") {
        setLinks("Galerie Photo", "Stickers", "Presentation");
    }
}

// Fonction qui met à jour les liens en fonction du bouton central
function setLinks(left, middle, right) {
    // Le bouton central devient cliquable
    buttonMiddle.href = middle + ".html";
    buttonMiddle.textContent = middle;
    
    // Le bouton de gauche et de droite ne sont pas cliquables, juste des boutons de navigation
    buttonLeft.textContent = left;
    buttonRight.textContent = right;
}

// Initialisation des écouteurs d'événements au chargement de la page
window.addEventListener("load", setupListeners);

/*JavaScript de la Galerie*/

    /*Initialisation des 4 boutons*/
    var Stickers = document.getElementById("Stickers");
    var Circuit = document.getElementById("Circuit");
    var Voiture = document.getElementById("Voiture");
    var Jante = document.getElementById("Jante");

    /*Selection des Images*/
    var Imag1 = document.getElementById("img1");
    var Imag2 = document.getElementById("img2");
    var Imag3 = document.getElementById("img3");
    var Imag4 = document.getElementById("img4");
    var Imag5 = document.getElementById("img5");
    var Imag6 = document.getElementById("img6");
    var Imag7 = document.getElementById("img7");
    var Imag8 = document.getElementById("img8");
    var Imag9 = document.getElementById("img9");

    console.log(Imag1);

    function setupListenerss(){
        Stickers.addEventListener("click", SwichS);
        Circuit.addEventListener("click", SwichC);
        Voiture.addEventListener("click", SwichV);
        Jante.addEventListener("click", SwichJ);
        console.log("Let's Goo");
    }

    function SwichS(){
        Imag1.src = "../image/Autocollants/IMG_3857.jpeg" ;
        Imag2.src = "../image/Autocollants/IMG_3859.jpeg" ;
        Imag3.src = "../image/Autocollants/IMG_3860.jpeg" ;
        Imag4.src = "../image/Autocollants/IMG_3861.jpeg" ;
        Imag5.src = "../image/Autocollants/IMG_3868.jpeg" ;
        Imag6.src = "../image/Autocollants/IMG_3869.jpeg" ;
        Imag7.src = "../image/Autocollants/IMG_3871.jpeg" ;
        Imag8.src = "../image/Autocollants/IMG_3892.jpeg" ;
        Imag9.src = "../image/Autocollants/IMG_3921.jpeg" ;
    }

    function SwichC(){
        Imag1.src = "../image/Autocollants/IMG_3857.jpeg" ;
        Imag2.src = "../image/Autocollants/IMG_3859.jpeg" ;
        Imag3.src = "../image/Autocollants/IMG_3860.jpeg" ;
        Imag4.src = "../image/Autocollants/IMG_3861.jpeg" ;
        Imag5.src = "../image/Autocollants/IMG_3868.jpeg" ;
        Imag6.src = "../image/Autocollants/IMG_3869.jpeg" ;
        Imag7.src = "../image/Autocollants/IMG_3871.jpeg" ;
        Imag8.src = "../image/Autocollants/IMG_3892.jpeg" ;
        Imag9.src = "../image/Autocollants/IMG_3821.jpeg" ;
        /*-------------------------------------*/
        /*-----    ATTENTION : A FINIR    -----*/
        /*-------------------------------------*/
    }
    
    function SwichV(){
        Imag1.src = "../image/Autocollants/IMG_3857.jpeg" ;
        Imag2.src = "../image/Autocollants/IMG_3859.jpeg" ;
        Imag3.src = "../image/Autocollants/IMG_3860.jpeg" ;
        Imag4.src = "../image/Autocollants/IMG_3861.jpeg" ;
        Imag5.src = "../image/Autocollants/IMG_3868.jpeg" ;
        Imag6.src = "../image/Autocollants/IMG_3869.jpeg" ;
        Imag7.src = "../image/Autocollants/IMG_3871.jpeg" ;
        Imag8.src = "../image/Autocollants/IMG_3892.jpeg" ;
        Imag9.src = "../image/Autocollants/IMG_3821.jpeg" ;
        /*-------------------------------------*/
        /*-----    ATTENTION : A FINIR    -----*/
        /*-------------------------------------*/
    }
    
    function SwichJ(){
        Imag1.src = "../image/Autocollants/IMG_3857.jpeg" ;
        Imag2.src = "../image/Autocollants/IMG_3859.jpeg" ;
        Imag3.src = "../image/Autocollants/IMG_3860.jpeg" ;
        Imag4.src = "../image/Autocollants/IMG_3861.jpeg" ;
        Imag5.src = "../image/Autocollants/IMG_3868.jpeg" ;
        Imag6.src = "../image/Autocollants/IMG_3869.jpeg" ;
        Imag7.src = "../image/Autocollants/IMG_3871.jpeg" ;
        Imag8.src = "../image/Autocollants/IMG_3892.jpeg" ;
        Imag9.src = "../image/Autocollants/IMG_3821.jpeg" ;
        /*-------------------------------------*/
        /*-----    ATTENTION : A FINIR    -----*/
        /*-------------------------------------*/
    }
    window.addEventListener("load", setupListenerss);

