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

const signBtnMain = document.querySelector(".landing-btns .signup-article") 
const signLabMain = document.querySelector(".signup-article button")
const signDivMain = document.querySelector(".signup-article div")

const signupWrapper = document.querySelector(".signup-wrapper")

signBtnMain.addEventListener('mouseenter', function(){
    signBtnMain.style.cursor = 'pointer';
    signLabMain.style.cursor = 'pointer';

    signLabMain.style.backgroundColor = '#B8C3C2';
    signLabMain.style.transition = '0.4s'
})

signBtnMain.addEventListener('mouseleave', function(){
    signBtnMain.style.cursor = 'default';
    loginLabMain.style.cursor = 'default';

    signLabMain.style.backgroundColor = '#F0FCFA';
    signLabMain.style.transition = '0.4s'
})

signBtnMain.addEventListener('click', function(){
    signLabMain.style.transition = '0s'
    signLabMain.style.transform = 'translate(0%, 0%)'

    setTimeout(function(){
        landingWrapper.style.display = 'none';
        retBtn.style.display = 'flex';
        signupWrapper.style.display = 'flex';

        signLabMain.style.transform = 'translate(-4%, -13%)'
    }, 270)
})

retBtn.addEventListener('click', function(){
    retBtn.style.display = 'none';
    signupWrapper.style.display = 'none';
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

    $.ajax({
        type: 'POST',
        url : 'login.php',
        data : {
            username : loginFormWrap.querySelector(".username-input").value,
            password : loginFormWrap.querySelector(".password-input").value
        },
        succes : function(response){
            if(response == 'success'){
                window.location.href = 'homepage.html'
            }else{
                alert('login Info Is Wrong. Try again!')
            }  
        }
    })
})

const signupBtn = document.querySelector(".signup-wrapper .signup-article")
const signupLab = document.querySelector(".signup-wrapper .signup-article button")
const signupDiv = document.querySelector(".signup-wrapper .signup-article div")

signupBtn.addEventListener('mouseenter', function(){
    signupBtn.style.cursor = 'pointer';
    signupLab.style.cursor = 'pointer';

    signupLab.style.backgroundColor = '#B8C3C2';
    signupLab.style.transition = '0.4s'
})

signupBtn.addEventListener('mouseleave', function(){
    signupBtn.style.cursor = 'default';
    signupLab.style.cursor = 'default';

    signupLab.style.backgroundColor = '#F0FCFA';
    signupLab.style.transition = '0.4s'
})

signupBtn.addEventListener('click', function(){
    signupLab.style.transition = '0s'
    signupLab.style.transform = 'translate(0%, 0%)'

    setTimeout(function(){
        signupLab.style.transform = 'translate(-3.5%, -10%)'
    }, 270)

    $.ajax({
        type : 'POST',
        url : 'signup.php',
        date : {
            newEmail : signupWrapper.querySelector(".new-email").value,
            newUsername : signupWrapper.querySelector(".new-username").value,
            newPassword : signupWrapper.querySelector(".new-password").value,
            newConfPassword : signupWrapper.querySelector(".new-conf-password").value
        },
        success : function(response){
            if (response === 'success'){
                window.location.href ='homepage.html';
            }else if(response === 'password mismatch'){
                alert('Your Passwords do not match');
            }else if(response === 'user already exists'){
                alert('You already have an account. Log In instead');
                window.location.href = 'index.html';
            }
        }
    })
})
