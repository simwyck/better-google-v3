/* Script pour charger contenu central en cliquant sur un bouton */
function afficherElementsCentraux() {
    document.getElementById("cestmagique").style.display='block';
}

/* Faire une recherche Google avec les mot-clés saisis par l'utilisateur */

/* let monBouton = document.querySelector('bouton-recherche');
let maRecherche = document.querySelector('recherche');

function saisirMotsCles() {
  let maRecherche = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('rechercheuser', maRecherche);
  monTitre.textContent = 'Mozilla est cool, ' + maRecherche;
}

function saisirMotsCles() {
    document.getElementById("formrech").submit();
} */

/* On récupère la requête et on affiche la page de résultat. Mais bon, ça buggue pour l'instant. */
function rechercherSurGoogle() {
    let maRecherche = document.formrech.recherchebox.value;
    /* alert(maRecherche); */
    /* let adresseGoogle = "https://www.google.fr/#q="; */
    let requeteUser = "https://www.google.fr/#q=" + maRecherche;
    /* alert(requeteUser); */
    /* localStorage.setItem('rechercheuser', maRecherche);
    self.location='https://www.google.fr/#q= + maRecherche'; */
    document.location.href = 'requeteUser';
}

/* <form>
<input type=button
value="insert button text here"
onClick="self.location='Your_URL_here.htm'">
</form> */

/* Afficher un popup après un délai */
function afficherPopup() {
    monPopup = window.open("popup.html", "", "location=no,menubar=no,toolbar=yes,scrollbars=yes,resizable=no,top=200,left=500, width=500,height=300");
}
