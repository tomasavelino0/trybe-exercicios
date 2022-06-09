function testingScope(escopo) {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }

}
testingScope(true);

// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function arrSort(arr) {
   arr.sort(compararNumeros); 
   return `Os numeros${arr} se encontram ordenados de forma crescente!`;

}

console.log(arrSort(oddsAndEvens))

function compararNumeros(a, b) {
    return a - b;
}

// Parte 2 exercicio 1
 
  const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

  const button = document.getElementById('button')
  const spanCount = document.getElementById('count')
  spanCount.value = 1

  let clickCount = spanCount.value

  button.addEventListener('click',() =>{
    clickCount += 1
    spanCount.innerText = clickCount;
  })


