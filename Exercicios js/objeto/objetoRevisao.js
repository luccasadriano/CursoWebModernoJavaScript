// Coleção dinâmica de pares chava/valor
const produto = new Object
produto.nome = "cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)// deletando atributo do objeto
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {// criação literal de objeto
    modelo: 'A4',
    calor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 10
        }
    },
    condutores: [{
        nome: 'Luccas',
        idade: 22
    }, {
        nome: 'Jão',
        idade: 25
    }],
    calcularValorSeguro: function(){
        //......
    }
}

carro.proprietario.endereco.numero = 100 //acessar a partir do operador ponto
carro['proprietario'] ['endereco'] = 'Av Gigante'//acessar a partir de string
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)//se comentar a linha 39, não terá erro