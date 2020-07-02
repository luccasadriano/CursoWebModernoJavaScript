const escola = "Cod3r"

console.log(escola.charAt(4))//procura o index na palavra cod3r da variavel escola
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))// concatenando
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))//replace subtitui o a informação passada
// /,/ -> regex
console.log('Ana, Maria, Pedro'.split(','))//split gera um array com a escolha da sua separação.
