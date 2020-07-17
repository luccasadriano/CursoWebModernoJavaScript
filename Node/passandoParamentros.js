module.exports = function(...nomes){
   console.log(nomes)
   return nomes.map(nome => `Boa semana ${nome}!`)
}

