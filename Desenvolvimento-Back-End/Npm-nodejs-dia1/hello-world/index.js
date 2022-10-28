const readline = require('readline-sync');

// const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`seu nome e ${name} e voce tem ${age} anos`);

// console.log('Hello, world!');

function dividirNumeros(num1, num2) {
    const promise = new Promise((resolve, reject) => {
      if (num2 === 0) { reject(new Error('Não pode ser feito uma divisão por zero')); }
  
      const resultado = num1 / num2;
      resolve(resultado);
    });
  
    return promise;
  }
  
  dividirNumeros(2, 1)
    .then((result) => console.log(`sucesso: ${result}`))
    .catch((err) => console.log(`erro: ${err.message}`));
