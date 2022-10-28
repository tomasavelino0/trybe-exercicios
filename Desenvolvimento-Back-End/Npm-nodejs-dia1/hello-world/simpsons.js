const fs = require('fs').promises;

async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpson.json', 'utf-8');
      
   const simpsons = JSON.parse(fileContent);
   simpsons.find((simpson) => (Number(simpson.id) === id ? console.log(simpson) : false));
 }

 getSimpsonById(2);