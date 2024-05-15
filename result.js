// Récupérer les résultats depuis localStorage

const resultatFood = localStorage.getItem('resultatFood');
const resultatEgy = localStorage.getItem('resultatEgy');
const resultatTrans = localStorage.getItem('resultatTrans');
const resultatRecyc = localStorage.getItem('resultatRecyc');
const resultatScoreFin = localStorage.getItem('resultatScoreFin');

// Affichage des résultats 

document.querySelector('.overall-score-wrapper p').textContent = resultatScoreFin;
document.querySelector('.food-score-wrapper p').textContent = resultatFood;
document.querySelector('.transport-score-wrapper p').textContent = resultatTrans;
document.querySelector('.energy-score-wrapper p').textContent = resultatEgy;
document.querySelector('.waste-score-wrapper p').textContent = resultatRecyc;