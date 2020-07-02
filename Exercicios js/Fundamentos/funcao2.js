//Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){//Função anônima função sem nome
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função ARROW em uma variavel
const soma = (a, b) =>{// => é uma função arrow
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a ,b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')