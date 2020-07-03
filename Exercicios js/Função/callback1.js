//CallBack - é passar uma função para outra função, e como terminado evento acontecer a função passada será chamada
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indece){
    console.log(`${indece + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(qlqrParams => console.log(qlqrParams))
//Evento - é um laço que para cada elemento encontrado no retorno do callback, ele retorna o nome e indece
