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
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is like planting and taking care of 50 trees. Those trees help clean the air like taking 50 cars off the road. That's a big help!";
} else if (resultatScoreFin >= 1 && resultatScoreFin < 5) {
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is like riding your bike everywhere instead of driving a car. This is like the air being cleaned by 200 trees. Imagine how fresh the air would be!";
} else if (resultatScoreFin >= 5 && resultatScoreFin < 10) {
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is like driving a hybrid car for a year. It's like using the same amount of electricity that powers a house for a whole year. Imagine one house where you watch TV, use lights, cook food, and run the heater or air conditioner every day for a year. That's how much energy you saved by having a lower carbon footprint.";
} else if (resultatScoreFin >= 10 && resultatScoreFin < 20) {
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is like flying in an airplane a lot and driving a regular car. It's like burning enough gasoline to fill a swimming pool, which is bad for the air. Think about how much gasoline that is – enough to make a big fire or enough to power a lot of cars.";
} else if (resultatScoreFin >= 20 && resultatScoreFin < 30) {
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is like driving a car from Paris to Marseille and back 10 times, which is a very long distance. That's about 8,000 kilometers total. That's a lot of driving and a lot of pollution!";
} else if (resultatScoreFin >= 30 && resultatScoreFin < 40) {
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is like hurting 50,000 whales. It's like using as much energy as 7 houses for a whole year. Imagine the energy you use at home – now think of 7 homes using that much energy for an entire year. That's how much pollution is created.";
} else if (resultatScoreFin >= 40 && resultatScoreFin < 50) {
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is like running a small coal power plant. This makes a lot of dirty air and can make people sick. It's like cutting down a small forest every year. Imagine losing a forest where many animals live – that's how harmful it is.";
} else {
    document.querySelector('.comparison-result').textContent = "Your yearly carbon footprint is very high, like cutting down a big part of the Amazon rainforest. This makes the earth hotter and can hurt many plants and animals.";
}
