//Exercicio 1

// const nameForEmail = (fullname) => {
//   return `${fullname.replace(' ', '_')}@trybe.com`
// }

// const newEmployees = () => {
//   const employees = {
//     id1: nameForEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id3: nameForEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     id2: nameForEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// // Exercicio 2

// const sortNumbers = () => {
//   let result = Math.floor(Math.random() * 5) + 1;
//   return result;
// };

// const resultadoSorteio = (num) => {
//   if (num === sortNumbers()) {
//     return console.log('Parabéns você ganhou');
//   } else {
//     return console.log('Tente novamente');
//   };
// };

// //exercicio 3

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const sumGrade = (rightAnswers, wrongAnswers) => {
//   let grade = 0;
//   for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
//     if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
//       grade += 1
//     } else if (STUDENT_ANSWERS[i] === 'N.A') {
//       grade += 0;
//     } else if (RIGHT_ANSWERS !== STUDENT_ANSWERS[i]) {
//       grade -= 0.5;
//     }
//   }
//   return grade;
// }

// const gradeResult = (rightAnswers, wrongAnswers, sumGrade) => {
//   return `Sua nota e de ${sumGrade(rightAnswers, wrongAnswers)} pontos.`
// }

// console.log(gradeResult(RIGHT_ANSWERS, STUDENT_ANSWERS, sumGrade));

// // bonus exercicio
// const dmgDragon = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

// const mage = {
//   healthPoints: 130,
//   intelligence: 45,
//   mana: 125,
//   damage: undefined,
// };

// const warrior = {
//   healthPoints: 200,
//   strength: 30,
//   weaponDmg: 2,
//   damage: undefined,
// };

// const dragon = {
//   healthPoints: 350,
//   strength: 50,
//   damage: dmgDragon(15, dragon.strength),
// };

// const battleMembers = { mage, warrior, dragon };





  

 
