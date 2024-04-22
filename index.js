const retBtn = document.querySelector(".return-btn-wrapper")

const loginBtnMain = document.querySelector(".landing-btns .login-article") 
const loginLabMain = document.querySelector(".login-article button")
const loginDivMain = document.querySelector(".login-article div")

const landingWrapper = document.querySelector(".landing-wrapper")
const loginWrapper = document.querySelector(".login-wrapper")
loginBtnMain.addEventListener('mouseenter', function(){
    loginBtnMain.style.cursor = 'pointer';
    loginLabMain.style.cursor = 'pointer';

    loginLabMain.style.backgroundColor = '#B8C3C2';
    loginLabMain.style.transition = '0.4s'
})

loginBtnMain.addEventListener('mouseleave', function(){
    loginBtnMain.style.cursor = 'default';
    loginLabMain.style.cursor = 'default';

    loginLabMain.style.backgroundColor = '#F0FCFA';
    loginLabMain.style.transition = '0.4s'
})

loginBtnMain.addEventListener('click', function(){
    loginLabMain.style.transition = '0s'
    loginLabMain.style.transform = 'translate(0%, 0%)'

    setTimeout(function(){
        landingWrapper.style.display = 'none';
        retBtn.style.display = 'flex';
        loginWrapper.style.display = 'flex';

        loginLabMain.style.transform = 'translate(-4%, -13%)'
    }, 270)
})

retBtn.addEventListener('click', function(){
    retBtn.style.display = 'none';
    loginWrapper.style.display = 'none';

    landingWrapper.style.display = 'block';
})

const loginFormWrap = document.querySelector(".login-form-wrapper")
const loginBtn = document.querySelector(".login-btn")
const loginLab = document.querySelector(".login-btn button")
const loginDiv = document.querySelector(".login-btn div")

loginBtn.addEventListener('mouseenter', function(){
    loginBtn.style.cursor = 'pointer';
    loginLab.style.cursor = 'pointer';

    loginLab.style.backgroundColor = '#B8C3C2';
    loginLab.style.transition = '0.4s'
})

loginBtn.addEventListener('mouseleave', function(){
    loginBtn.style.cursor = 'default';
    loginLab.style.cursor = 'default';

    loginLab.style.backgroundColor = '#F0FCFA';
    loginLab.style.transition = '0.4s'
})

loginBtn.addEventListener('click', function(){
    loginLab.style.transition = '0s'
    loginLab.style.transform = 'translate(0%, 0%)'

    setTimeout(function(){
        loginLab.style.transform = 'translate(-3.5%, -10%)'
    }, 270)
})
