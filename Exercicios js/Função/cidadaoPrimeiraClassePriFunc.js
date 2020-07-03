// Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1(){

}

// Armazenar em uma variável - função anônima
const fun2 = function(){}

// Armazenar em uma array
const array = [function (a, b){ return a + b }, function (a, b){ return a * b }, fun2]
console.log(array[0](2, 3))//troca o indece '0' por '1' ai

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parametro
function run (fun){
    fun()
}
run(function () { console.log('Executando... ')})

// Função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(5, 6)(4)
//outro exemplo
const cincoMais = soma(2, 3)
cincoMais(4)