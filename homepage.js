const startBtn = document.querySelector(".signup-login-article")
const startLab = document.querySelector(".signup-login-article button")
startBtn.addEventListener('mouseenter', function(){
    startBtn.style.cursor = 'pointer';
    startLab.style.cursor = 'pointer';
    startLab.style.transition = '0.4s'
    startLab.style.backgroundColor = '#E1EBE4';
    console.log(startLab.style.backgroundColor)
})

startBtn.addEventListener('mouseleave', function(){
    startBtn.style.cursor = 'default';
    startLab.style.cursor = 'default';
    startLab.style.transition = '0.4s'
    startLab.style.backgroundColor = '#98B0A9';
})

startBtn.addEventListener('click', function(){
    startLab.style.transform = 'translate(0%, 0%)';
    startLab.style.transition = '0s'

    setTimeout(function(){
        startLab.style.transform = 'translate(-2%, -13%)';
    }, 270)
})