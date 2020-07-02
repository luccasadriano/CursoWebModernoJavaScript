let a = 3

globalThis.b = 123

this.c = 4556
this.d = true
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
console.log(this)

//criando uma variavel doida: sem var, let ou const!
abc = 3 //Não faça isso em casa!!!! eu fiz kkkk
console.log(global.abc)

//module.exports = { e: 4556, f: true, g: 'teste' }

//entenda os run time o tempo em execução