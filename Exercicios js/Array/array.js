console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')//não recomendado essa forma de criar array 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']//forma apropriada de criar um array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Luccas'
// console.log(aprovados[3])
aprovados.push('Adriano')//forma mais apropriada de inserir novo elemento no array
console.log(aprovados.length)

aprovados[9] = 'vitor'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort()//ordendando o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'elemento1', 'elemento2')//splice remove e adicionar elementos dentro do array
aprovados.splice(1, 2)//excluindo
aprovados.splice(1, 0, 'elemento1', 'elemento2')//adicinando
console.log(aprovados)