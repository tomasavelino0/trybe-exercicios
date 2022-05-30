let background = document.getElementById('background')
let body = document.getElementsByTagName('body')
let li = document.querySelectorAll('li')

background.addEventListener('click', function () {
    darkMode = background.classList.toggle('dark')
    localStorage.setItem('dark-mode-on', darkMode)
    body[0].style.backgroundColor = 'black';
    body[0].style.color = 'white';

    for (let i = 0; i < li.length; i += 1) {
        li[i].style.border = '1px solid white'
    }
})
let changeMode = localStorage.getItem('dark-mode-on')
if(changeMode === 'true'){
    body[0].style.backgroundColor = 'black';
    body[0].style.color = 'white';

    for (let i = 0; i < li.length; i += 1) {
        li[i].style.border = '1px solid white'
    }
}
let changeFontFamily = document.getElementById('fontfamily')

changeFontFamily.addEventListener('click', function(){
    fontChange = changeFontFamily.classList.toggle('arial')
    localStorage.setItem('font-arial',fontChange)
    body[0].style.fontFamily = 'Arial, Helvetica, sans-serif';
})

let fontStorage = localStorage.getItem('font-arial')
if(fontStorage === 'true'){
    body[0].style.fontFamily = 'Arial, Helvetica, sans-serif';
}


