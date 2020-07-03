function soma() {
    let soma = 0
    for (i in arguments){//arguments é um array interno, toda função tem esse array,  
        soma += arguments[i]//pode passar qualquer tipo de dados, quando passado nenhum paramentro o array fica vazio
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))