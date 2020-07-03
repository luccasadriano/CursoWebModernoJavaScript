//Função factory é uma função que retornar um objeto (pode retornar funçãoes e dados)

//Factory passando valores e um definido
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('lapis', 1))
console.log(criarProduto('fone', 30))