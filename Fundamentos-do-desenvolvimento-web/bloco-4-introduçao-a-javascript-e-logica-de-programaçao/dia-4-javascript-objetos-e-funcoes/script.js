let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('           === Exercicio 1 ====')

  console.log('Bem-vinda, ' + info.personagem)

  console.log('           === Exercicio 2 ====')

info[`recorrente`] = `Sim`
console.log(info)

console.log('           === Exercicio 3 ====')

for(let key in info){
    console.log(key)
}

console.log('           === Exercicio 4 ====')

for(let key in  info){
    console.log(info[key])
}
console.log('           === Exercicio 5 ====')
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: `sim`
  };
console.log(info.personagem + ` e ` + info2.personagem)
console.log(info.origem + ` e ` + info2.origem)
console.log(info.nota + ` e ` + info.nota)
if(info.recorrente && info.recorrente === `Sim`)
console.log(`Ambos recorrentes`)

console.log('           === Exercicio 6 ====')

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`)

  console.log('           === Exercicio 7 ====')
  
  leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
  )
  console.log(leitor.livrosFavoritos)

  console.log('           === Exercicio 8 ====')

  console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)


