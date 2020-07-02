// pessoa -> endereço de memoria 123 -> {...}
const pessoa = { nome: 'Jão' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> endereço de memoria 456 -> {...}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)//congela o objeto - não deixar excluir, adicionar e mexer nos valores 

pessoa.nome = 'Maria'
pessoa.end = 'Rua abcd'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Luccas'})//nem a referencia da variavel e nem objeto pode ser mudado
console.log(pessoaConstante)
