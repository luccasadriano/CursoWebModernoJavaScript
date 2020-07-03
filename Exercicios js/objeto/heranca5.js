console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//reverter uma frase
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){//first pegar primeiro elemento
    return this[0]
}
console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','e'].first())

//não faça isso, sobrescrevendo o comportamento do toString
String.prototype.toString = function (){
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())
