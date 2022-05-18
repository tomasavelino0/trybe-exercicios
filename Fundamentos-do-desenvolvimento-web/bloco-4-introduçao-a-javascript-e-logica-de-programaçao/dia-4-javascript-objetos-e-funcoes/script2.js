console.log(`     =====Exercicio 1 =====`)

let word = `mirim`;

function palindromoCheck(word) {
    let inverseWord = word.split('').reverse().join('')

    if (word === inverseWord) {
        return true
    } else {
        return false
    }
}
console.log(palindromoCheck(word))

console.log(`     =====Exercicio 2 =====`)

function biggerNumberArray(arr) {
    let result = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > result) {
            result = i;
        }
    } return result;
}
console.log(biggerNumberArray([2, 3, 6, 7, 10, 1]))

console.log(`     =====Exercicio 3 =====`)

function smallNumberArray(arr) {
    let result = arr[0]

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < result) {
            result = i;
        }
    } return result
}
console.log(smallNumberArray([2, 4, 6, 7, 10, 0, -3]))

console.log(`     =====Exercicio 4 =====`)

function biggerNameArray(arr) {
    let letterCount = 0;
    let biggerName;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length > letterCount) {
            letterCount = arr[i].length;
            biggerName = arr[i];
        }
    } return biggerName
}

console.log(biggerNameArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

console.log(`     =====Exercicio 5 =====`)


function mostRepeteadInt(arr) {
    let mf = 1;
    let m = 0;
    let mostRepetead;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i; j < arr.length; j += 1) {
            if (arr[i] == arr[j])
                m += 1;
            if (mf < m) {
                mf = m;
                mostRepetead = arr[i];
            }
        }
        m = 0;
    } return mostRepetead
}
console.log(mostRepeteadInt([2, 3, 2, 5, 8, 2, 3]));

console.log(`     =====Exercicio 6 =====`)

function sumOfNumbers(number) {
    let result = 0;

    for (let i = 0; i <= number; i += 1) {
        if (i <= number) {
            result += i
        }
    } return result
}
console.log(sumOfNumbers(5))

console.log(`     =====Exercicio 7 =====`)

function verificaFimPalavra(word, ending) {
    let lastLetter = word.slice(-2);
    let end = ending.slice(-2)
    if (lastLetter === end) {
        return true
    } else {
        return false
    }
}
console.log(verificaFimPalavra(`trybe`, 'be'))





