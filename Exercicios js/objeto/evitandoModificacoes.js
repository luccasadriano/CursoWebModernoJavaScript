// Object.preventExtensions = previnir que seu objeto seja extentido, pode ate excluir mas não pode adicionar novos object
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha'
delete produto.tag
console.log(produto)

//Object.seal = não pode excluir e nem adicionar atributos, mas consegue modificar os valores dos atributos que ja existe do object
const pessoa = {nome: 'Flavia', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Morelli'
delete pessoa.nome
pessoa.idade = 28
console.log(pessoa)

// Object.freeze = selado + valores constantes