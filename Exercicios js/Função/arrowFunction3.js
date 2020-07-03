let comaparaComThis = function (param){
    console.log(this === param)
}
comaparaComThis(global)

const obj = {} // objeto

comaparaComThis = comaparaComThis.bind(obj)
comaparaComThis(global)
comaparaComThis(obj)

let comaparaComThisArrow = param => console.log(this === param)
comaparaComThisArrow(global)
comaparaComThisArrow(module.exports)

comaparaComThisArrow = comaparaComThisArrow.bind(obj)
comaparaComThisArrow(obj)
comaparaComThisArrow(module.exports) /*this em uma função Arrow '=>' é uma this associado ao contexto,
 no qual a função foi escrita, ponto. não tem variação alguma até msm com o bind*/