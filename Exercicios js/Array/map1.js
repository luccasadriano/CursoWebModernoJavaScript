const nums = [1, 2, 3, 4, 5]

//Criar um array novo e faz um for com propósito/ vai transforma os elementos de um array
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
//Fazendo varias funções para depois chamar o map utilizando elas
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
//chamado o map de forma encadeada
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)//map ele tranforma o array em outro array com dados diferente
console.log(resultado)