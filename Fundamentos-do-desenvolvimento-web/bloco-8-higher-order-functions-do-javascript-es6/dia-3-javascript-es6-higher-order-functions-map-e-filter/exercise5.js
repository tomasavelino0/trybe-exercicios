const books = require('./exercise1');

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];

  //5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia
  
  function fantasyOrScienceFictionAuthors() {
   let includesItem = ['Fantasia', 'Ficção Científica']

   return books.filter((book) => includesItem.includes(book.genre)).
    map((book) => book.author.name).sort()    

  }

  console.log(fantasyOrScienceFictionAuthors());