const books = require('./exercicio1');

//exercicio 6
//6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book80) => book80.releaseYear >= 1980 && book80.releaseYear < 1989);

};
console.log(someBookWasReleaseOnThe80s());