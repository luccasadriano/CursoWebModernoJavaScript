//Função factory é uma função que retornar um objeto (pode retornar funçãoes e dados)

//Factory simples
function criarPessoa(){
    return {
        nome: 'Luccas',
        sobrenome: 'Adriano'
    }
}
console.log(criarPessoa())