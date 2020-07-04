Array.prototype.filter2 = function(callback){
    const NewArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            NewArray.push(this[i])
        }
    }
    return NewArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const maior500 = p => p.preco >= 500
const fragilTrue = p => p.fragil == true

const res = produtos.filter2(maior500).filter2(fragilTrue)
console.log(res)

//ou

// const res = produtos.filter2(function(p){
//     return p.preco >= 500 && p.fragil == true
// })