const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
//retornando um array com apenas com os preços
const paraJson = e => JSON.parse(e)
const soPreco = e => e.preco

resultado = carrinho.map(paraJson).map(soPreco)
console.log(resultado)