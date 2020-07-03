const valor = 'global'

function minhaFuncao(){
    console.log(valor)
}
function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec()
//no contexto lexico, no qual a function foi escrita ela ira informar o global
//pois pq a function carrega consigo o local onde foi definido
//ela procura no escopo lexico do local definido