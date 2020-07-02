// Novo recurso do Es2015

const pessoa ={
    nome: 'Ana',
    idade:5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const { nome, idade } = pessoa // tire dentro do objeto o nome e a idade, qual objeto? pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereco:{ logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num }} = pessoa
console.log(ag, num)