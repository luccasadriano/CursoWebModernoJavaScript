//meio q esta simulando o ForEach
Array.prototype.forEach2 = function(elemento){
    for(let i = 0; i < this.length; i++){
        elemento(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Danilo', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})


