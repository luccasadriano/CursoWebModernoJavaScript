const modeloB = require("../modeloB");

console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

//aponta para o mesmo objeto
this.a = 1
exports.b = 2
module.exports.c = 3


exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

//para mudar o objeto usar o module.exports
module.exports = { publico: true }