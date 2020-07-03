let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // função arrow '=>' é sempre uma função anônima
    return 2 * a
}

dobro = a => 2 * a//função com um unico retorn e uma linha. return implícito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'olá'// possui um parametro
console.log(ola())