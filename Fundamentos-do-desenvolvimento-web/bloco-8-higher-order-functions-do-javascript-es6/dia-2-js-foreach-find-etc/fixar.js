//exercicio 1

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList)


// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// }

// console.log(findDivisibleBy3And5())

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//    return names.find((str) => str.length === 5);
// }

// console.log(findNameWithFiveLetters());

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//   return musicas.find((musica) => musica.id === id);
//   }
  
//   console.log(findMusic('31031685'))

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name);

console.log(hasName(names, 'Ana'))

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((ages) => ages.age >= minimumAge);
  
console.log(verifyAges(people, 18));

//1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

people.sort((a,b) => a.age - b.age);



//Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

people.sort((a,b) => b.age - a.age);

console.log(people);