const carbsNextBtn = document.querySelector(".carbs-next-wrapper")
const carbsForm = document.querySelector(".carbs-wrapper")
const foodRetNextSect = document.querySelector(".ret-next-section")
const meatFormWrap = document.querySelector(".meat-wrapper")

const carbsNextLab = document.querySelector(".carbs-next-wrapper button")
const carbsNextDiv = document.querySelector(".carbs-next-wrapper div")
carbsNextBtn.addEventListener('mouseenter', function(){
    carbsNextLab.style.backgroundColor = '#546C73'
    carbsNextLab.style.color = '#EAFDFF'

    carbsNextBtn.style.cursor = 'pointer';
    carbsNextLab.style.cursor = 'pointer'
    carbsNextLab.style.transition = '0.4s';
})

carbsNextBtn.addEventListener('mouseleave', function(){
    carbsNextLab.style.backgroundColor = '#96AFB8'
    carbsNextLab.style.color = '#21383F'

    carbsNextBtn.style.pointer = 'default';
    carbsNextLab.style.cursor = 'default'
    carbsNextLab.style.transition = '0.4s';
})

carbsNextBtn.addEventListener('click', function(){
    carbsNextLab.style.transition = '0s';
    carbsNextLab.style.transform = 'translate(0%, 0%)'
    setTimeout(function(){
        meatFormWrap.style.display = 'none';
        carbsNextBtn.style.display = 'none';

        carbsForm.style.display = 'flex';
        foodRetNextSect.style.display = 'flex';

        carbsNextLab.style.transform = 'translate(-3%, -13%)';
    }, 270)
    
})


const meatRetBtn = document.querySelector(".ret-next-section .meat-prev-wrapper")
meatRetBtn.addEventListener('click', function(){
    carbsForm.style.display = 'none';
    foodRetNextSect.style.display = 'none';

    meatFormWrap.style.display = 'flex';
    carbsNextBtn.style.display = 'flex';
})

const egyNextBtn = document.querySelector(".ret-next-section .energy-next-wrapper")
const egyWrapper = document.querySelector(".energy-cat-wrapper")
const foodWrapper = document.querySelector(".food-cat-wrapper")
egyNextBtn.addEventListener('click', function(){
    foodWrapper.style.display = 'none';
    egyWrapper.style.display = 'flex';
})

const foodRetBtn = document.querySelector(".food-cat-prev-wrapper")
foodRetBtn.addEventListener('click', function(){
    egyWrapper.style.display = 'none';
    foodWrapper.style.display = 'flex';
})

const transNextBtn = document.querySelector('.transport-cat-next-wrapper')
const transWrapper = document.querySelector(".transport-cat-wrapper")
transNextBtn.addEventListener('click', function(){
    egyWrapper.style.display = 'none';
    transWrapper.style.display = 'flex';
})

const egyPrevBtn = document.querySelector(".energy-cat-prev-wrapper")
egyPrevBtn.addEventListener('click', function(){
    transWrapper.style.display = 'none';
    egyWrapper.style.display = 'flex';
})

const recycNextBtn = document.querySelector(".waste-cat-next-wrapper")
const recycWrapper = document.querySelector(".recycling-cat-wrapper")
recycNextBtn.addEventListener('click', function(){
    transWrapper.style.display = 'none';
    recycWrapper.style.display = 'flex';
})

const recycPrevBtn = document.querySelector(".recycling-cat-prev-wrapper")
recycPrevBtn.addEventListener('click', function(){
    recycWrapper.style.display = 'none';
    transWrapper.style.display = 'flex';
})