console.log(typeof Object)//função
console.log(typeof new Object())//objeto

const Cliente = function(){}//criada a função
console.log(typeof Cliente)//função
console.log(typeof new Cliente)//objeto instanciada a função

class Produto {} //Es 2015 (ES6) criada uma class
console.log(typeof Produto)
console.log(typeof new Produto())//intaciada a class temos o objeto