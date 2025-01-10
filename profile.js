// Récupérer les résultats depuis localStorage

const resultatFood = localStorage.getItem('resultatFood');
const resultatEgy = localStorage.getItem('resultatEgy');
const resultatTrans = localStorage.getItem('resultatTrans');
const resultatRecyc = localStorage.getItem('resultatRecyc');
const resultatScoreFin = localStorage.getItem('resultatScoreFin');

// Affichage des résultats 

document.querySelector('.overall-score-wrapper p').textContent = resultatScoreFin + 't';
document.querySelector('.food-score-wrapper p').textContent = resultatFood + 't';
document.querySelector('.transport-score-wrapper p').textContent = resultatTrans + 't';
document.querySelector('.energy-score-wrapper p').textContent = resultatEgy + 't';
document.querySelector('.waste-score-wrapper p').textContent = resultatRecyc + 't';

document.querySelector('.profile-main .profile-wrapper h3').textContent = localStorage.getItem('username')


if (resultatScoreFin < 1) {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est comme planter et prendre soin de 50 arbres. Ces arbres aident à nettoyer l'air comme si on retirait 50 voitures de la route. C'est une grande aide!";
} else if (resultatScoreFin >= 1 && resultatScoreFin < 5) {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est comme faire du vélo partout au lieu de conduire une voiture. C'est comme si l'air était nettoyé par 200 arbres. Imaginez comme l'air serait frais!";
} else if (resultatScoreFin >= 5 && resultatScoreFin < 10) {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est comme conduire une voiture hybride pendant un an. C'est comme utiliser la même quantité d'électricité pour alimenter une maison pendant toute une année. Imaginez une maison où vous regardez la télévision, utilisez les lumières, cuisinez et faites fonctionner le chauffage ou la climatisation tous les jours pendant un an. C'est l'énergie que vous avez économisée en ayant une empreinte carbone plus faible.";
} else if (resultatScoreFin >= 10 && resultatScoreFin < 20) {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est comme beaucoup voyager en avion et conduire une voiture normale. C'est comme brûler suffisamment d'essence pour remplir une piscine, ce qui est mauvais pour l'air. Pensez à la quantité d'essence que cela représente – assez pour faire un grand feu ou pour alimenter beaucoup de voitures.";
} else if (resultatScoreFin >= 20 && resultatScoreFin < 30) {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est comme conduire une voiture de Paris à Marseille et retour 10 fois, ce qui est une très longue distance. Cela représente environ 8 000 kilomètres au total. C'est beaucoup de conduite et beaucoup de pollution!";
} else if (resultatScoreFin >= 30 && resultatScoreFin < 40) {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est comme blesser 50 000 baleines. C'est comme utiliser autant d'énergie que 7 maisons pendant une année entière. Imaginez l'énergie que vous utilisez chez vous – maintenant, pensez à 7 maisons utilisant autant d'énergie pendant une année entière. C'est la quantité de pollution créée.";
} else if (resultatScoreFin >= 40 && resultatScoreFin < 50) {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est comme faire fonctionner une petite centrale au charbon. Cela produit beaucoup d'air pollué et peut rendre les gens malades. C'est comme abattre une petite forêt chaque année. Imaginez perdre une forêt où vivent de nombreux animaux – c'est à quel point c'est nocif.";
} else {
    document.querySelector('.comparison-result').textContent = "Votre empreinte carbone annuelle est très élevée, comme abattre une grande partie de la forêt amazonienne. Cela réchauffe la terre et peut nuire à de nombreuses plantes et animaux.";
}


