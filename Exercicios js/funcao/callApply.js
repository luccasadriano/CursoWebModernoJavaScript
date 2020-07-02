function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

 global.preco = 20
 global.desc = 0.1
 console.log(getPreco())//chamado função diretamente
 console.log(produto.getPreco())//chamando função a partir de um objeto (usa o "produto" como contexto = this pra ser resolvindo dentro da função) 

 const carro = {preco: 49990, desc: 0.20}

 console.log(getPreco.call(carro))//chamado a partir do call passado tambem objeto
 console.log(getPreco.apply(carro))//chamado a partir do apply passado tambem objeto

 console.log(getPreco.call(carro, 0.17, '$')) //chamado a partir do call passado objeto passando params
 console.log(getPreco.apply(global, [0.17, '$']))//chamado a partir do apply passado objeto e array com params

