const a = 20;
const b = 2;

const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log(adicao, subtracao, multiplicacao, divisao, modulo)

// ex 2

const Num1 = 5;
const Num2 = 4;
if (Num1 > Num2) {
    console.log(`num1 maior`)
} else {
    console.log(`num2 maior`)
}

// ex 3

const maiorTres1 = 5;
const maiorTres2 = 3;
const maiorTres3 = 8;

if (maiorTres1 > maiorTres2 && maiorTres1 > maiorTres3) {
    console.log(`MaiorTress 1 é maior`)
} else if (maiorTres2 > maiorTres1 && maiorTres2 > maiorTres3) {
    console.log('maiorTress2 é maior')
} else {
    console.log('maiorTres 3 é maior')
}
//ex 4

const positiveNegative = 10;
if (positiveNegative > 0) {
    console.log(`Positive`)
} else if (positiveNegative < 0) {
    console.log(`Negative`)
} else {
    console.log(`Zero`)
}
// ex 5

const Angulo1 = 60;
const Angulo2 = 60;
const Angulo3 = 60;
if (Angulo1 + Angulo2 + Angulo3 === 180) {
    console.log(true)
} else if (Angulo1 < 0 || Angulo2 < 0 || Angulo3 < 0) {
    console.log(`Angulo invalido`)
} else {
    console.log(false)
}
// ex 6

const Pecas = `BIspo`;
const pecasToLowerCase = Pecas.toLowerCase();
if (pecasToLowerCase == `rainha`) {
    console.log(`Anda em todas a direcoes`)
} else if (pecasToLowerCase == `peao`) {
    console.log(`anda uma casa para frente`)
} else if (pecasToLowerCase == `bispo`) {
    console.log(`anda na diagonal`)
} else if (pecasToLowerCase == `rei`) {
    console.log(`anda uma casa para qualquer direcao`)
} else if (pecasToLowerCase == `torre`) {
    console.log(`anda reto ou na diagonal`)
} else if (pecasToLowerCase == `cavalo`) {
    console.log(`anda em formato de L`)
} else {
    console.log(`nao e uma peca de xadrez`)
}
//ex 7

const Nota = 120;

if (Nota < 0 || Nota > 100) {
    console.log('Nota invalida')
} else if (Nota >= 90) {
    console.log('A')
} else if (Nota >= 80) {
    console.log('B')
} else if (Nota >= 70) {
    console.log('C')
} else if (Nota >= 60) {
    console.log('D')
} else if (Nota >= 50) {
    console.log('E')
} else if (Nota < 50) {
    console.log('F')
}
//ex 8

const numberPar1 = 5;
const numberPar2 = 2;
const numberPar3 = 3;
if (numberPar1 % 2 === 0 || numberPar2 % 2 === 0 || numberPar3 % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}
// ex 9
const numberImpar1 = 4;
const numberImpar2 = 2;
const numberImpar3 = 2;
if (numberImpar1 % 2 !== 0 || numberImpar2 % 2 !== 0 || numberImpar3 % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}
// ex 10
const precoCusto = 5
const precoVenda = 10

const lucro = precoVenda - (precoCusto + precoCusto * 0.2)


if (precoCusto < 0 || precoVenda < 0) {
  console.log('o valor não pode ser menor que 0')
} else {
  console.log('Lucro ao vender 1000 peças: ' + lucro * 1000)
}

//ex 11

const salarioBruto = 3000
let inss

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11
} else if (salarioBruto > 5189.82) {
  inss = 570.88
}

const salarioBase = salarioBruto - inss
let ir

if (salarioBase <= 1903.98) {
  ir = 0
} else if (salarioBase <= 2826.65) {
  ir = salarioBase * 0.075 - 142.8
} else if (salarioBase <= 3751.05) {
  ir = salarioBase * 0.015 - 354.8
} else if (salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13
} else if (salarioBase > 4664.68) {
  ir = salarioBase * 0.275 - 869.36
}

const salarioLiquido = salarioBase - ir

console.log(salarioLiquido)


