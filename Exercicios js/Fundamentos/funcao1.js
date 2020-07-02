/*função nada mais é que um treicho/bloco de codigo que vc deu um nome ou não pra ele, 
e vc pode reusar esse treicho de codigo aonde vc quiser, 
chamar dentro do seu programa.
*/
//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 5, 5, 6, 7, 8)
imprimirSoma()

//Função com retorno
function soma (a, b = 3){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(5))
console.log(soma())