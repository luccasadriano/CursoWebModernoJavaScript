const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
//Filter ele cria um novo array e filtra os elementos conforme condição passada
const maior500 = p => p.preco >= 500
const fragilTrue = p => p.fragil == true

const res = produtos.filter(maior500).filter(fragilTrue)
console.log(res)

//ou

// const res = produtos.filter(function(p){
//     return p.preco >= 500 && p.fragil == true
// })