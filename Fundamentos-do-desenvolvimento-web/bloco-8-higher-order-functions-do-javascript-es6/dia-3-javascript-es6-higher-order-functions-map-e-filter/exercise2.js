const books = require('./exercise1')

const expectedResult = [
    {
        age: 31,
        author: 'Isaac Asimov',
    },
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },
    {
        age: 39,
        author: 'Stephen King',
    },
    {
        age: 43,
        author: 'George R. R. Martin',
    },
    {
        age: 45,
        author: 'Frank Herbert',
    },
    {
        age: 62,
        author: 'J. R. R. Tolkien',
    },
];

function nameAndAge() {
    return books.map((book) => (
        {
            author: book.author.name,
            age: book.releaseYear - book.author.birthYear,
        }
    )).sort((a, b) => a.age - b.age)
};


console.log(nameAndAge());