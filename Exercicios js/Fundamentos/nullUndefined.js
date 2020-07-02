let valor // não inicializada nem atribuida
console.log(valor)
//console.log(valor2)// 

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString())//Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco se quiser tirar o atribudo do objeto utiliza-se delete e não undefined
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)