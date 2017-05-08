$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$resultats = document.getElementById("resultats");
$liste = document.getElementById("liste");
$supprimer = document.getElementById("supprimer");
$restaurer = document.getElementById("restaurer");
$annuler = document.getElementById("annuler");
$texte = document.getElementById("texte");

tableau = ["Dorian", "Alex", "Paul"];

contacts = [{
    prenom: "Julien",
    nom: "Burek",
    numero: "0123456789"
}, {
    prenom: "Paul",
    nom: "Decu",
    numero: "0128886789"

}, {
    prenom: "Alex",
    nom: "Andre",
    numero: "0127787897"

}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}

function rechercher() {
    recherche = $recherche.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $resultats.innerHTML = elements;
}

function afficherListe() {
    elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    tableau.push($texte.value);
    afficherListe();
}

function annuler() {
    tableau.push($texte.value);
    afficherListe();
}

function supprimer() {
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("poubelle");
        }
    }
}

function restaurer() {
    for (i = 0; i < $liste.children.length; i++) {
$liste.children[i].classList.remove("poubelle");
  }
}

$ajouter.onclick = ajouter;
$annuler.onclick = annuler;
$rechercher.onclick = rechercher;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;
afficherListe();

alert(texteContact(contacts[0]));