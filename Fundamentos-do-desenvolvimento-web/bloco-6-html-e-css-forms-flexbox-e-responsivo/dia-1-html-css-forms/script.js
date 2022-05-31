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
if(nome.innerText.length < 10 || nome.innerText.length > 40){
    alert('Dados invalidos')
    nome.focus();
}else{
    alert('Dados enviados com sucesso!')
}

if(email.innerText.length < 10 || email.innerText.length > 50){
    alert('Dados invalidos')
    email.focus();
}else{
    alert('dados enviados com sucesso!')
}
