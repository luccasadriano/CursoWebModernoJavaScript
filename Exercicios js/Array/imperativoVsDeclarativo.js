const alunos = [
    { nome: 'Jão', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo - como fazer, passo a passo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo - o que fazer, paradigma funcional
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
//declarativo é um jeito melhor de se programar