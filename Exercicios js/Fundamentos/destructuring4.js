function rand([min = 0, max = 1000]){//criando a função com array
    if(min > max) [min, max] = [max , min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//arrendonda para menos
}

console.log(rand([50, 40]))

console.log(rand([922]))

console.log(rand([, 10]))

console.log(rand([]))

//console.log(rand())