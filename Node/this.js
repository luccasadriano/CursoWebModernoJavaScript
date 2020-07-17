console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){//tem q tomar cuidado em saber de que momento esta acessando this,pq se for dentro de uma função vc esta acessando global, e se for fora de uma função esta acessando o module.exports
   console.log('Dentro de uma função...')
   console.log(this === exports)//Dentro de uma função, o this não a ponta para exports
   console.log(this === global)

}

logThis()