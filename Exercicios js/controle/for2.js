const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){// tem formas mais interessantes para percorrer os elementos do array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 65
}

for(let atributo in pessoa){//esse é um jeito interessante de percorrer os elementos do objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)
}