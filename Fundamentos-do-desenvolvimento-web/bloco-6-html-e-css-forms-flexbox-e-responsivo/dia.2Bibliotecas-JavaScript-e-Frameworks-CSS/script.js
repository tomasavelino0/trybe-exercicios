let button = document.getElementById('button-submit')
button.addEventListener('click', function(event){
    event.preventDefault();
    if(boxFotosChecked.checked){
        button.submit
    }else{
        alert('Concorde que a trybe possa usar suas fotos.')
        boxFotosChecked.focus();
    }
})

let boxFotosChecked = document.getElementById('box-fotos')
let nome = document.getElementById('nome')
let email= document.getElementById('email')

