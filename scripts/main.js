/* Script pour charger contenu central en cliquant sur un bouton */
function afficherElementsCentraux() {
    document.getElementById("cestmagique").style.display='block';
}

/* On récupère la requête utilisateur et on affiche la page de résultat. Mais bon, ça buggue pour l'instant. */
function rechercherSurGoogle() {
    let maRecherche = document.formrech.recherchebox.value;
    let requeteUser = "https://www.google.fr/#q=" + maRecherche;
    /* J'arrive bien à afficher l'alert mais pas à lancer l'affichage de la page */
    /* alert(requeteUser); */
    document.location.href = 'requeteUser';
}

/* Afficher un popup après un délai */
function afficherPopup() {
    monPopup = window.open("popup.html", "", "location=no,menubar=no,toolbar=yes,scrollbars=yes,resizable=no,top=200,left=500, width=500,height=300");
}
