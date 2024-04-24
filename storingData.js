// Sélection de l'élément input de quantité pour le bœuf
var beefQtyInput = document.querySelector('.meat-type p:nth-child(1) + .noOfMeats input');
var porkQtyInput = document.querySelector('.meat-type p:nth-child(2) + .noOfMeats input');
var fishQtyInput = document.querySelector('.meat-type p:nth-child(3) + .noOfMeats input');


// Récupération de la valeur entrée dans l'input
var beefQty = beefQtyInput.value;
var porkQty = porkQtyInput.value;
var fishQty = fishQtyInput.value;


// Utilisation de la valeur récupérée (par exemple, l'afficher dans la console)

//récupérer les données
var beefQty = localStorage.getItem('beefQtyInput');

//stocker les données
localStorage.setItem('')


// const xhr = new XMLHttpRequest(); 
// xhr.open("get", 'https://api/explore/v2.1/catalog/datasets/base-carbone/records?limit=20&refine=nom_base_francais%3A"Bovin viande"&refine=unite_francais%3A"kgCO2e%2Fkg de poids vif"&refine=localisation_geographique%3A"France continentale');
// xhr.onreadystatechange = function(){
//     if (xhr.readystatechange === 4 && xhr.status === 200){
//         const reponse = JSON.parse(xhr.responseText);
//         const EmissionCarbone = reponse.resultats;
//         console.log(EmissionCarbone);
//     }
// }

const xhr = new XMLHttpRequest(); 
xhr.open("get", 'https://api/explore/v2.1/catalog/datasets/base-carbone/records?limit=20&refine=nom_base_francais%3A"Bovin viande"&refine=unite_francais%3A"kgCO2e%2Fkg de poids vif"&refine=localisation_geographique%3A"France continentale"');
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const reponse = JSON.parse(xhr.responseText);
        const EmissionCarbone = reponse.resultats;

        // Parcourir chaque élément de la réponse
        EmissionCarbone.forEach(function(element) {
            // Afficher les valeurs des clés total_poste_non_decompose et identifiant_de_l_element
            console.log("Identifiant de l'élément:", element.identifiant_de_l_element);
            console.log("Total poste non décomposé:", element.total_poste_non_decompose);
        });
    }
};
xhr.send();

console.log()
console.log("Quantité de bœuf entrée : " + beefQty);

