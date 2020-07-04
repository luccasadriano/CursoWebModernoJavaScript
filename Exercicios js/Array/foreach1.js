//forEach ele percorre o array e informa o elemento, indice e o array
//a function callback que passa para um forEach ela recebe 3 paramentros, o nome, o indice e o array
const aprovados = ['Agatha', 'Aldo', 'Danilo', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)