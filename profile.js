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
    document.querySelector('.comparison-result').textContent = "Your annual carbon footprint is similar to driving an electric car for 15,000 miles.";
} else if (resultatScoreFin >= 1 && resultatScoreFin < 5) {
    document.querySelector('.comparison-result').textContent = "Your annual carbon footprint is similar to driving a gasoline car for 12,000 miles.";
} else if (resultatScoreFin >= 5 && resultatScoreFin < 10) {
    document.querySelector('.comparison-result').textContent = "Your annual carbon footprint is similar to the average carbon footprint of a person in the United States.";
} else if (resultatScoreFin >= 10 && resultatScoreFin < 20) {
    document.querySelector('.comparison-result').textContent = "Your annual carbon footprint is similar to using electricity for a year in a large, energy-intensive home.";
} else if (resultatScoreFin >= 20 && resultatScoreFin < 50) {
    document.querySelector('.comparison-result').textContent = "Your annual carbon footprint is similar to significant deforestation activities (about 250 square meters of the Amazon rainforest).";
} else {
    document.querySelector('.comparison-result').textContent = "Your annual carbon footprint is extremely high, equivalent to the annual energy usage of multiple large households.";
}

