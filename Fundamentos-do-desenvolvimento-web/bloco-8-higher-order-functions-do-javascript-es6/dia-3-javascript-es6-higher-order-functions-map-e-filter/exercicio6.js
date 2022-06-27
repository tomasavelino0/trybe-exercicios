const books = require('./exercise1');

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  
//   6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

  function oldBooks() {
    return books.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name)
  }

  console.log(oldBooks());