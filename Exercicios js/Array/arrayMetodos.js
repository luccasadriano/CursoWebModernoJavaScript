const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()//massa quebrou o carro de novo!!pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//push add um novo elemento na ultima posição do array
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do array!
console.log(pilotos)

pilotos.unshift('Hamilton')//add um elemento na primeira posição do array
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//massa quebrou novamente!!
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//pega um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//é como pegar um pedaço do array
console.log(algunsPilotos2)
