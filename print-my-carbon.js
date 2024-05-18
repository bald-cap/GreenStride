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

//FOOD CATEGORY
carbsNextBtn.addEventListener('click', function(){
    carbsNextLab.style.transition = '0s';
    carbsNextLab.style.transform = 'translate(0%, 0%)'
    let emitMeat = 0;

    let meatFreqEl = meatFreqWrap.querySelector('.pmc-main-p-selected')
    let meatTypeEl = meatFormWrap.querySelector(".meat-type .pmc-main-p-selected")

    let meatQtyEl = meatFormWrap.querySelector('.meat-qty')
    let meatQty = meatQtyEl.value   

    if (!meatFreqEl || !meatTypeEl){
        alert('Select a MEAT TYPE or FREQUENCY.')

        setTimeout(function(){
            carbsNextLab.style.transform = 'translate(-3%, -13%)';
        }, 270)
    }else if (meatQty < 0){
        alert('Quantity must be ABOVE 0.')

        setTimeout(function(){
            carbsNextLab.style.transform = 'translate(-3%, -13%)';
        }, 270)
    }else if (!meatQty){
        alert('Select a MEAT QUANTITY!')

        setTimeout(function(){
            carbsNextLab.style.transform = 'translate(-3%, -13%)';
        }, 270)
    }else{
        //EATING HOME

        let meatFreq = meatFreqEl.textContent;

        if (meatFreq === 'Every day'){
            emitMeat = calculMeatCO2(360)
            console.log('Every day')
        }else if (meatFreq === 'Every four days'){
            emitMeat = calculMeatCO2(91)
            console.log('Every four days')
        }else if (meatFreq === 'Every week'){
            emitMeat = calculMeatCO2(52)
            console.log('Every week')
        }else if (meatFreq === 'Every month'){
            emitMeat = calculMeatCO2(12)
            console.log('Every month')
        }
        let emitMeatF = emitMeat.toFixed(2)
        localStorage.setItem('resultatMeat', emitMeatF);
        console.log(emitMeat)

        setTimeout(function(){
            meatFormWrap.style.display = 'none';
            carbsNextBtn.style.display = 'none';
    
            carbsForm.style.display = 'flex';
            eatinPrevNextSect.style.display = 'flex';
    
            carbsNextLab.style.transform = 'translate(-3%, -13%)';
        }, 270)
    }
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

    let emitCarb = 0;
    //CARBS
    let carbsFreqEl = carbsForm.querySelector('.freq-opt .pmc-main-p-selected')
    let carbsTypeEl = carbsForm.querySelector('.pmc-main-p-selected')
    let carbsQty = carbsForm.querySelector('.qtyCarbs').value
    if (!carbsFreqEl || !carbsTypeEl){
        alert('Select a CARBOHYDRATE TYPE or FREQUENCY!')

        setTimeout(function(){
            eatoutNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }else if (carbsQty < 0){
        alert('Carbohydrate Quantity must be ABOVE 0!')

        setTimeout(function(){
            eatoutNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }else if (!carbsQty){
        alert('Select a Carbohydrate Quantity!')

        setTimeout(function(){
            eatoutNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }else{
        let carbsFreq = carbsFreqEl.textContent
        if (carbsFreq === 'Every day'){
            emitCarb = calculCarbsCO2(360)
        }else if (carbsFreq === 'Every four days'){
            emitCarb = calculCarbsCO2(91)
        }else if (carbsFreq === 'Every week'){
            emitCarb = calculCarbsCO2(52)
        }else if (carbsFreq === 'Every month'){
            emitCarb = calculCarbsCO2(12)
        }

        let emitCarbF = emitCarb.toFixed(2)
        localStorage.setItem('resultatCarbs', emitCarbF);

        setTimeout(function(){
            eatinLab.style.display = 'none';
            eatinCarbs.style.display = 'none';
            eatinPrevNextSect.style.display = 'none';

            eatoutLab.style.display = 'flex';
            eatoutWrapper.style.display = 'flex'

            eatoutPrevNextSect.style.display = 'flex'

            eatoutNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }
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

    //EATING OUT
    let emitEatOut = 0;
    let eatoutFreqEl = eatoutWrapper.querySelector('.eat-out-freq-opt .pmc-main-p-selected')
    let platesEl = eatoutWrapper.querySelector('.eat-out-opt-wrapper .pmc-main-p-selected')

    let eatoutQty = eatoutWrapper.querySelector('.noPlates').value
    if (!eatoutFreqEl || !platesEl){
        alert('Select MEAT TYPE or FREQUENCY!')

        setTimeout(function(){
            egyNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }else if (eatoutQty < 0){
        alert('QUANITY must be ABOVE 0!')

        setTimeout(function(){
            egyNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }else if(!eatoutQty){
        alert('Select a QUANTITY!')

        setTimeout(function(){
            egyNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }else{
        let eatoutFreq = eatoutFreqEl.textContent
        if (eatoutFreq === 'Every day'){
            emitEatOut = calculEatOutCO2(360)
        }else if (eatoutFreq === 'Every four days'){
            emitEatOut = calculEatOutCO2(91)
        }else if (eatoutFreq === 'Every week'){
            emitEatOut = calculEatOutCO2(52)
        }else if (eatoutFreq === 'Every month'){
            emitEatOut = calculEatOutCO2(12)
        }


        
        let emitMeat = localStorage.getItem('resultatMeat')
        console.log(emitMeat)
        let emitCarb = localStorage.getItem('resultatCarbs')
        console.log(emitCarb)
        let emitFood = (Number(emitMeat) + Number(emitCarb) + emitEatOut) / 3;
        let emitFoodF = emitFood.toFixed(2)
        localStorage.setItem('resultatFood', emitFoodF);


        setTimeout(function(){
            foodWrapper.style.display = 'none';
            egyWrapper.style.display = 'flex';

            egyNextLab.style.transform = 'translate(-2%, -10%)';
        }, 270)
    }
    
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

    let egyFreqEl = egyWrapper.querySelector('.energy-cat-freq .pmc-main-p-selected')
    let egySrcEl = egyWrapper.querySelector('.energy-src-wrapper .pmc-main-p-selected')
    let egyCons = egyWrapper.querySelector('.egy-qty').value

    if (!egyFreqEl || ! egySrcEl){
        alert('Select a FREQUENCY or an ENERGY SORUCE!')

        setTimeout(function(){
            transNextLab.style.transform = 'translate(-1.5%, -13%)';
        }, 270)
    } else if (egyCons < 0){
        alert('Energy Consumption must be above 0kWh')

        setTimeout(function(){
            transNextLab.style.transform = 'translate(-1.5%, -13%)';
        }, 270)
    }else if (!egyCons){
        alert('Define an ENERGY CONSUMPTION!')

        setTimeout(function(){
            transNextLab.style.transform = 'translate(-1.5%, -13%)';
        }, 270)
    }else{
        //ENERGY CATEGORY
        let emitEgy = calculEnergyCO2()
        let emitEgyF = emitEgy.toFixed(2)
        localStorage.setItem('resultatEgy', emitEgyF);

        setTimeout(function(){
            egyWrapper.style.display = 'none';
            transWrapper.style.display = 'flex';

            transNextLab.style.transform = 'translate(-1.5%, -13%)';
        }, 270)
    
    }
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

    //TRANSPORT CATEGORY
    let transFreqEl = transWrapper.querySelector('.transport-cat-freq .pmc-main-p-selected')
    let transModeEl = transWrapper.querySelector('.modes-opt-wrapper .pmc-main-p-selected')
    let transRecharge = transWrapper.querySelector('.transport-recharge').value

    if(!transFreqEl || !transModeEl){
        alert('Select a TRANSPORT MODE or FREQUENCY!')

        setTimeout(function(){
            recycNextLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
    }else if(transRecharge < 0){
        alert('RECHARGE must be ABOVE 0kWh / 0L!')

        setTimeout(function(){
            recycNextLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
    }else if(!transRecharge){
        alert('Define a RECHARGE')

        setTimeout(function(){
            recycNextLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
    }else{
        let emitTrans = 0;
        let transFreq = transFreqEl.textContent
        if (transFreq === 'Every day'){
            emitTrans = calculTransCO2(360)
        }else if (transFreq === 'Every four days'){
            emitTrans = calculTransCO2(91)
        }else if (transFreq === 'Every week'){
            emitTrans = calculTransCO2(52)
        }else if (transFreq === 'Every month'){
            emitTrans = calculTransCO2(12)
        }
    
        let emitTransF = emitTrans.toFixed(2)
        localStorage.setItem('resultatTrans', emitTransF);
    
        setTimeout(function(){
            transWrapper.style.display = 'none';
            recycWrapper.style.display = 'flex';
    
            recycNextLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
        
    }
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
        // console.log(opt.classList)
        if (opt.className === '' || opt.className === 'public-trans-opt' || opt.className === 'metal-opt'){
            opt.className = 'pmc-main-p-selected';
            all.forEach(function(optDe, posDe){
                if (optDe.parentElement.classList === opt.parentElement.classList && optDe != opt){
                    optDe.className = ''
                }
            })
            // console.log(pos)
        }else if(opt.className === 'pmc-main-p-selected'){
            if (opt.textContent === "Metals"){
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


    //RECYCLING CATEGORY
    let recycFreqEl =  recycWrapper.querySelector('.recycling-opt-wrapper .pmc-main-p-selected')
    let recycTypeEl = recycWrapper.querySelector('.plastics-mgnt .pmc-main-p-selected')
    let recycQty = recycWrapper.querySelector('.qty-waste-input').value

    if (!recycFreqEl || !recycTypeEl){
        alert('Select a RECYCLING METHOD or a FREQUENCY!')

        setTimeout(function(){
            submitResLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
    }else if(!recycQty){
        alert('Select a QUANTITY!')

        setTimeout(function(){
            submitResLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
    }else if(recycQty < 0){
        alert('QUANTITY must be ABOVE 0!')

        setTimeout(function(){
            submitResLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
    }else{
        let emitRecyc = 0;
        let recycFreq = recycFreqEl.textContent
    
        if (recycFreq === 'Every week'){
            emitRecyc = calculRecycCO2(52)
        }else if(recycFreq === 'Every month'){
            emitRecyc = calculRecycCO2(12)
        }
        
        let emitRecycF = emitRecyc.toFixed(2)
        localStorage.setItem('resultatRecyc', emitRecycF);

        //emission moyenne (score Total Emission):
        let emitFood = Number(localStorage.getItem('resultatFood'))
        let emitTrans = Number(localStorage.getItem('resultatTrans'))
        let emitEgy = Number(localStorage.getItem('resultatEgy'))

        let emissionTot = (emitFood + emitRecyc + emitEgy + emitTrans) / 5;
        
        // Utilisation du résultat
        // Stocker les résultats calculés dans localStorage
        localStorage.setItem('resultatScoreFin', emissionTot);
        
        setTimeout(function(){
            window.location.href = 'profile.html'
            submitResLab.style.transform = 'translate(-2%, -13%)';
        }, 270)
    }
})



// GENERAL REQUEST


function calculMeatCO2(freq){
    let result = 1;
    let meatType = meatFormWrap.querySelector(".meat-type .pmc-main-p-selected").textContent
    console.log(meatType)
    let meatQty = meatFormWrap.querySelector('.meat-qty').value

    if(meatType === 'Beef'){
        result = 12.8 * freq * 0.150 * meatQty;
    }else if(meatType === 'Pork'){
        result = 2.42 * freq * 0.150 * meatQty;
    }else if(meatType === 'Chicken'){
       result = 2.92 * freq * 0.150 * meatQty;
    }

    console.log(result)
    return result
}

function calculCarbsCO2(freq){
    let result = 1;
    let carbsType = carbsForm.querySelector('.pmc-main-p-selected').textContent
    let carbsQty = carbsForm.querySelector('.qtyCarbs').value

    //A RENSEIGNER
    let emit = 0;
    if(carbsType === 'Rice'){
        emit = 2.8
    }else if(carbsType === 'Potato'){
        emit = 0.150
    }
    result = emit * freq * carbsQty

    console.log(result)
    return result
}

function calculEatOutCO2(freq){
    let result;
    let plates = eatoutWrapper.querySelector('.eat-out-opt-wrapper .pmc-main-p-selected').textContent
    let eatoutQty = eatoutWrapper.querySelector('.noPlates').value

    if(plates === 'Beef Rice'){
      result = 1.11 * freq * 0.250 * eatoutQty;
    }else if(plates === 'Chicken Rice'){
       result = 1.11 * freq * 0.250 * eatoutQty;
    }

    return result
}


function calculEnergyCO2(){
    let result = 0;
    let egyFreq = 12
    let egySrc = egyWrapper.querySelector('.energy-src-wrapper .pmc-main-p-selected').innerHTML
    let egyCons = egyWrapper.querySelector('.egy-qty').value

    if(egySrc === 'Grid'){
        result = 1.06 * egyFreq * egyCons * 0.001;
    }else if(egySrc === 'Solar'){
        result = 0.055 * egyFreq * egyCons * 0.001;
    }else if (egySrc === 'Gas <span>(for heating)</span>'){
        result = 2.35 * egyFreq * egyCons * 0.001;
    }else if (egySrc === 'LPG Gas <span>(for Cooking)</span>'){
        result = 1.77 * egyFreq * egyCons * 0.001;
    }
    return result
}

function calculTransCO2(freq){
    let result
    let transMode = transWrapper.querySelector('.modes-opt-wrapper .pmc-main-p-selected')
    let transRecharge = transWrapper.querySelector('.transport-recharge').value

    if(transMode.parentElement.className = 'electric-mode-opt'){
        // In kiloWatts
        result = 0.006 * freq * transRecharge;
    }else if(transMode.parentElement.className === 'diesel-mode-opt'){
        result = 2.65 * freq * transRecharge;
    }
    return result
}

function calculRecycCO2(freq){
    let result
    let recycType = recycWrapper.querySelector('.plastics-mgnt .pmc-main-p-selected').textContent
    let recycQty = recycWrapper.querySelector('.qty-waste-input').value

    if(recycType === 'By Sorting'){
        result = 18 * freq * recycQty;
    }else if(recycType === 'By Incineration'){
        result = 1950 * freq * recycQty;
    }else if(recycType === 'Without Sorting'){
        result = 1990 * freq * recycQty;
    }
   
    return result
}

