const carbsNextBtn = document.querySelector(".carbs-next-wrapper")
const carbsForm = document.querySelector(".carbs-wrapper")
const eatinPrevNextSect = document.querySelector(".eat-in-ret-next-sect")

const eatoutPrevNextSect = document.querySelector(".eat-out-ret-next-sect")
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
        eatinPrevNextSect.style.display = 'flex';

        carbsNextLab.style.transform = 'translate(-3%, -13%)';
    }, 270)
    
})

const meatPrevLab = document.querySelector(".eat-in-meat-prev-btn")
const meatPrevDiv = document.querySelector(".eat-in-meat-prev-wrapper div")
const meatPrevBtn = document.querySelector(".ret-next-section .eat-in-meat-prev-wrapper")

meatPrevBtn.addEventListener('mouseenter', function(){
    meatPrevLab.style.backgroundColor = '#546C73'
    meatPrevLab.style.color = '#EAFDFF'

    meatPrevBtn.style.cursor = 'pointer';
    meatPrevLab.style.cursor = 'pointer'
    meatPrevLab.style.transition = '0.4s';
})

meatPrevBtn.addEventListener('mouseleave', function(){
    meatPrevLab.style.backgroundColor = '#96AFB8'
    meatPrevLab.style.color = '#21383F'

    meatPrevBtn.style.pointer = 'default';
    meatPrevLab.style.cursor = 'default';
    meatPrevLab.style.transition = '0.4s';
})

meatPrevBtn.addEventListener('click', function(){
    meatPrevLab.style.transition = '0s';
    meatPrevLab.style.transform = 'translate(0%, 0%)';
    setTimeout(function(){
        carbsForm.style.display = 'none';
        eatinPrevNextSect.style.display = 'none';

        meatFormWrap.style.display = 'flex';
        carbsNextBtn.style.display = 'flex';    

        meatPrevLab.style.transform = 'translate(-2%, -10%)';
    }, 270)
    
})

const eatinLab = document.querySelector(".eat-in-label-wrapper")
const eatinCarbs = document.querySelector(".carbs-wrapper")

const eatoutLab = document.querySelector(".eat-out-label-wrapper")
const eatoutWrapper = document.querySelector(".eat-out-wrapper")

const eatoutNextBtn = document.querySelector(".eat-out-next-wrapper")
const eatoutNextLab = document.querySelector(".eat-out-next-btn")

eatoutNextBtn.addEventListener('mouseenter', function(){
    eatoutNextLab.style.backgroundColor = '#546C73'
    eatoutNextLab.style.color = '#EAFDFF'

    eatoutNextBtn.style.cursor = 'pointer';
    eatoutNextLab.style.cursor = 'pointer'
    eatoutNextLab.style.transition = '0.4s';
})

eatoutNextBtn.addEventListener('mouseleave', function(){
    eatoutNextLab.style.backgroundColor = '#96AFB8'
    eatoutNextLab.style.color = '#21383F'

    eatoutNextBtn.style.pointer = 'default';
    eatoutNextLab.style.cursor = 'default';
    eatoutNextLab.style.transition = '0.4s';
})

eatoutNextBtn.addEventListener('click', function(){
    eatoutNextLab.style.transition = '0s';
    eatoutNextLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        eatinLab.style.display = 'none';
        eatinCarbs.style.display = 'none';
        eatinPrevNextSect.style.display = 'none';

        eatoutLab.style.display = 'flex';
        eatoutWrapper.style.display = 'flex'

        eatoutPrevNextSect.style.display = 'flex'

        eatoutNextLab.style.transform = 'translate(-2%, -10%)';
    }, 270)
})


const eatinPrevBtn = document.querySelector(".eat-in-prev-wrapper")
const eatinPrevLab = document.querySelector(".eat-in-prev-btn")

eatinPrevBtn.addEventListener('mouseenter', function(){
    eatinPrevLab.style.backgroundColor = '#546C73'
    eatinPrevLab.style.color = '#EAFDFF'

    eatinPrevBtn.style.cursor = 'pointer';
    eatinPrevLab.style.cursor = 'pointer'
    eatinPrevLab.style.transition = '0.4s';
})

eatinPrevBtn.addEventListener('mouseleave', function(){
    eatinPrevLab.style.backgroundColor = '#96AFB8'
    eatinPrevLab.style.color = '#21383F'

    eatinPrevBtn.style.pointer = 'default';
    eatinPrevLab.style.cursor = 'default';
    eatinPrevLab.style.transition = '0.4s';
})

eatinPrevBtn.addEventListener('click', function(){
    eatinPrevLab.style.transition = '0s';
    eatinPrevLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        eatoutLab.style.display = 'none';
        eatoutWrapper.style.display = 'none';

        eatoutPrevNextSect.style.display = 'none';

        eatinLab.style.display = 'flex';
        eatinCarbs.style.display = 'flex';
        eatinPrevNextSect.style.display = 'flex';

        eatinPrevLab.style.transform = 'translate(-2%, -10%)';
    }, 270)
})

const egyNextBtn = document.querySelector(".ret-next-section .energy-next-wrapper")
const egyNextLab = document.querySelector(".energy-next-btn")
const egyNextDiv = document.querySelector(".energy-next-wrapper div")

const egyWrapper = document.querySelector(".energy-cat-wrapper")
const foodWrapper = document.querySelector(".food-cat-wrapper")

egyNextBtn.addEventListener('mouseenter', function(){
    egyNextLab.style.backgroundColor = '#546C73';
    egyNextLab.style.color = '#EAFDFF';

    egyNextBtn.style.cursor = 'pointer';
    egyNextLab.style.cursor = 'pointer'
    egyNextLab.style.transition = '0.4s';
})

egyNextBtn.addEventListener('mouseleave', function(){
    egyNextLab.style.backgroundColor = '#96AFB8';
    egyNextLab.style.color = '#21383F';

    egyNextBtn.style.pointer = 'default';
    egyNextLab.style.cursor = 'default';
    egyNextLab.style.transition = '0.4s';
})

egyNextBtn.addEventListener('click', function(){
    egyNextLab.style.transition = '0s';
    egyNextLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        foodWrapper.style.display = 'none';
        egyWrapper.style.display = 'flex';

        egyNextLab.style.transform = 'translate(-2%, -10%)';
    }, 270)
    
})

const foodPrevBtn = document.querySelector(".food-cat-prev-wrapper")
const foodPrevLab = document.querySelector(".food-cat-prev-btn")
const foodPrevDiv = document.querySelector(".food-cat-prev-wrapper div")

foodPrevBtn.addEventListener('mouseenter', function(){
    foodPrevLab.style.backgroundColor = '#546C73';
    foodPrevLab.style.color = '#EAFDFF';

    foodPrevBtn.style.cursor = 'pointer';
    foodPrevLab.style.cursor = 'pointer'
    foodPrevLab.style.transition = '0.4s';
})

foodPrevBtn.addEventListener('mouseleave', function(){
    foodPrevLab.style.backgroundColor = '#96AFB8';
    foodPrevLab.style.color = '#21383F';

    foodPrevBtn.style.pointer = 'default';
    foodPrevLab.style.cursor = 'default';
    foodPrevLab.style.transition = '0.4s';
})

foodPrevBtn.addEventListener('click', function(){
    foodPrevLab.style.transition = '0s';
    foodPrevLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        egyWrapper.style.display = 'none';
        foodWrapper.style.display = 'flex';

        foodPrevLab.style.transform = 'translate(-2%, -13%)';
    }, 270)
})

const transNextBtn = document.querySelector('.transport-cat-next-wrapper')
const transNextLab = document.querySelector(".transport-cat-next-btn")
const transNextDiv = document.querySelector(".transport-cat-next-wrapper div")
const transWrapper = document.querySelector(".transport-cat-wrapper")

transNextBtn.addEventListener('mouseenter', function(){
    transNextLab.style.backgroundColor = '#546C73';
    transNextLab.style.color = '#EAFDFF';

    transNextBtn.style.cursor = 'pointer';
    transNextLab.style.cursor = 'pointer'
    transNextLab.style.transition = '0.4s';
})

transNextBtn.addEventListener('mouseleave', function(){
    transNextLab.style.backgroundColor = '#96AFB8';
    transNextLab.style.color = '#21383F';

    transNextBtn.style.pointer = 'default';
    transNextLab.style.cursor = 'default';
    transNextLab.style.transition = '0.4s';
})

transNextBtn.addEventListener('click', function(){
    transNextLab.style.transition = '0s';
    transNextLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        egyWrapper.style.display = 'none';
        transWrapper.style.display = 'flex';

        transNextLab.style.transform = 'translate(-1.5%, -13%)';
    }, 270)
    
})

const egyPrevBtn = document.querySelector(".energy-cat-prev-wrapper")
const egyPrevLab = document.querySelector(".energy-cat-prev-btn")
const egyPrevDiv = document.querySelector(".energy-cat-prev-wrapper div")

egyPrevBtn.addEventListener('mouseenter', function(){
    egyPrevLab.style.backgroundColor = '#546C73';
    egyPrevLab.style.color = '#EAFDFF';

    egyPrevBtn.style.cursor = 'pointer';
    egyPrevLab.style.cursor = 'pointer'
    egyPrevLab.style.transition = '0.4s';
})

egyPrevBtn.addEventListener('mouseleave', function(){
    egyPrevLab.style.backgroundColor = '#96AFB8';
    egyPrevLab.style.color = '#21383F';

    egyPrevBtn.style.pointer = 'default';
    egyPrevLab.style.cursor = 'default';
    egyPrevLab.style.transition = '0.4s';
})

egyPrevBtn.addEventListener('click', function(){
    egyPrevLab.style.transition = '0s';
    egyPrevLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        transWrapper.style.display = 'none';
        egyWrapper.style.display = 'flex';

        egyPrevLab.style.transform = 'translate(-2%, -13%)';
    }, 270)
    
})

const recycNextBtn = document.querySelector(".waste-cat-next-wrapper")
const recycNextLab = document.querySelector(".waste-cat-next-btn")
const recycNextDiv = document.querySelector(".waste-cat-next-wrapper div")

const recycWrapper = document.querySelector(".recycling-cat-wrapper")

recycNextBtn.addEventListener('mouseenter', function(){
    recycNextLab.style.backgroundColor = '#546C73';
    recycNextLab.style.color = '#EAFDFF';

    recycNextBtn.style.cursor = 'pointer';
    recycNextLab.style.cursor = 'pointer'
    recycNextLab.style.transition = '0.4s';
})

recycNextBtn.addEventListener('mouseleave', function(){
    recycNextLab.style.backgroundColor = '#96AFB8';
    recycNextLab.style.color = '#21383F';

    recycNextBtn.style.pointer = 'default';
    recycNextLab.style.cursor = 'default';
    recycNextLab.style.transition = '0.4s';
})

recycNextBtn.addEventListener('click', function(){
    recycNextLab.style.transition = '0s';
    recycNextLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        transWrapper.style.display = 'none';
        recycWrapper.style.display = 'flex';

        recycNextLab.style.transform = 'translate(-2%, -13%)';
    }, 270)
    
})

const transPrevBtn = document.querySelector(".transport-cat-prev-wrapper")
const transPrevLab = document.querySelector(".transport-cat-prev-btn")
const transPrevDiv = document.querySelector(".transport-cat-prev-wrapper div")

transPrevBtn.addEventListener('mouseenter', function(){
    transPrevLab.style.backgroundColor = '#546C73';
    transPrevLab.style.color = '#EAFDFF';

    transPrevBtn.style.cursor = 'pointer';
    transPrevLab.style.cursor = 'pointer'
    transPrevLab.style.transition = '0.4s';
})

transPrevBtn.addEventListener('mouseleave', function(){
    transPrevLab.style.backgroundColor = '#96AFB8';
    transPrevLab.style.color = '#21383F';

    transPrevBtn.style.pointer = 'default';
    transPrevLab.style.cursor = 'default';
    transPrevLab.style.transition = '0.4s';
})

transPrevBtn.addEventListener('click', function(){
    transPrevLab.style.transition = '0s';
    transPrevLab.style.transform = 'translate(0%, 0%)';

    setTimeout(function(){
        recycWrapper.style.display = 'none';
        transWrapper.style.display = 'flex';

        transPrevLab.style.transform = 'translate(-2%, -13%)';
    }, 270)
})

const allOptsPtag = document.querySelectorAll(".pmc-main p")
allOptsPtag.forEach(function(opt, pos, all){
    opt.addEventListener('click', function(){
        console.log(opt.classList)
        if (opt.className === '' || opt.className === 'public-trans-opt' || opt.className === 'metal-opt'){
            opt.className = 'pmc-main-p-selected';
            all.forEach(function(optDe, posDe){
                if (optDe.parentElement.classList === opt.parentElement.classList && opt.parentElement.classList.contains('freq-opt-js') && optDe != opt){
                    optDe.className = ''
                }
            })
            console.log(pos)
        }else if(opt.className === 'pmc-main-p-selected'){
            if(opt.textContent === 'Public Transport'){
                opt.className = 'public-trans-opt'
            }else if (opt.textContent === "Metals"){
                opt.className = 'metal-opt'
            }else{
                opt.className = ''
                console.log(opt.classList)
            }
        }
    })
})

const submitResBtn = document.querySelector(".done-btn-wrapper");
const submitResLab = document.querySelector(".done-btn-wrapper button");

submitResBtn.addEventListener('mouseenter', function(){
    submitResBtn.style.cursor = 'pointer';
    submitResLab.style.cursor = 'pointer';
    submitResLab.style.transition = '0.4s'
    submitResLab.style.backgroundColor = '#E1EBE4';
    console.log(submitResLab.style.backgroundColor)
})

submitResBtn.addEventListener('mouseleave', function(){
    submitResBtn.style.cursor = 'default';
    submitResLab.style.cursor = 'default';
    submitResLab.style.transition = '0.4s'
    submitResLab.style.backgroundColor = '#96AFB8';
})

const meatFreqWrap = document.querySelector(".meat-freq-wrapper")
submitResBtn.addEventListener('click', function(){
    submitResLab.style.transform = 'translate(0%, 0%)';
    submitResLab.style.transition = '0s'

    setTimeout(function(){
        submitResLab.style.transform = 'translate(-2%, -13%)';
    }, 270)

    $.ajax({
        type: 'GET',
        url : 'print-my-carbon.php',
        data: {
            //FOOD CATEGORY
                //EATING HOME
                    // MEAT
            meatType : appendContent(meatFormWrap.querySelectorAll(".meat-type .pmc-main-p-selected")),
            meatQty : meatFormWrap.querySelector('.meat-qty').value,
            meatFreqNo : meatFreqWrap.querySelector('input').value,
            meatFreqComp : meatFreqWrap.querySelector('.pmc-main-p-selected').textContent,

                    //CARBS
            carbsType : appendContent(carbsForm.querySelectorAll('.pmc-main-p-selected')),
            carbsQty : carbsForm.querySelector('.qtyCarbs').value,
            carbsFreq : carbsForm.querySelector('.carbs-freq').value,
            carbsFreqComp : carbsForm.querySelector('.freq-opt .pmc-main-p-selected').textContent,

                //EATING OUT
            plates : appendContent(eatoutWrapper.querySelectorAll('.eat-out-opt-wrapper .pmc-main-p-selected')),
            eatoutQty : eatoutWrapper.querySelector('.noPlates').value,
            eatoutFreq : eatoutWrapper.querySelector('.eat-out-freq-wrapper input').value,
            eatoutFreqComp :eatoutWrapper.querySelector('.eat-out-freq-opt .pmc-main-p-selected').textContent,

            //ENERGY CATEGORY
            egySrc : appendContent(egyWrapper.querySelectorAll('.energy-src-wrapper .pmc-main-p-selected')),
            egyCons : egyWrapper.querySelector('.egy-qty').value,
            egyFreq : egyWrapper.querySelector('.egy-freq-qty').value,
            egyFreqComp : egyWrapper.querySelector('.energy-cat-freq .pmc-main-p-selected').textContent,

            //TRANSPORT CATEGORY
            transMode : appendContent(transWrapper.querySelector('.modes-opt-wrapper .pmc-main-p-selected')),
            transDis : transWrapper.querySelector('.transport-distance').value,
            transFreq : transWrapper.querySelector('.trans-freq').value,
            transFreqComp : transWrapper.querySelector('transport-cat-freq .pmc-main-p-selected').textContent,

            //RECYCLING CATEGORY
            
        },
        sucess: function(response){
            if (response === "success"){
                window.location.href = "profile.html";
            }else if (response === "fail"){
                alert("Some forms weren't selected!")
            }
        }
    })
})

function appendContent(tag){
    let list = []
    for(i = 0; i < tag.length; i++){
        list.push(tag[i].textContent)
    }
    return list
}