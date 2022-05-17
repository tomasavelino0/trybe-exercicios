//ex 1 factorial

let Factorial = 10;
for(let i = Factorial; i >=1; i -= 1){
    Factorial *= i
}
console.log(`o fatorial de 10 e ${Factorial}`) 

//ex Inverter uma string

let word = 'banana';

let wordInvertida = word.split("").reverse().join("");
console.log(wordInvertida)

//ex retornar a maior e a menor palavra do array.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let contadorString = 0;
let Maior;

for (let i = 0; i < array.length; i+= 1) {
  if (array[i].length > contadorString) {
    contadorString = array[i].length;
    Maior = array[i];
  }
}
console.log(`a maior palavra do array e ${Maior}`)
//Menor string
let contadorString2 = 1000;
let Menor;

for(let i = 0; i < array.length; i+= 1){
    if (array[i].length < contadorString2) {
        contadorString2 = array[i].length
        Menor = array[i];
    }
}
console.log(`a menor palavra do array e ${Menor}`)

//ex: Retornar maior numero primo 

let biggerPrime = 0

let maxNumber = 50
let primNumbers = 0
let numberCount = 0

for (let number = 2; number <= maxNumber; number += 1) {
  for (let number2 = 1; number2 <= number; number2 += 1) {
    if (number % number2 === 0) {
      numberCount += 1
    }
  }

  if (numberCount === 2) {
    primNumbers += 1
    biggerPrime = number
  }
  numberCount = 0
}

console.log(`O maior primo entre 0 e 50 e ${biggerPrime}.`)
 
 



    

