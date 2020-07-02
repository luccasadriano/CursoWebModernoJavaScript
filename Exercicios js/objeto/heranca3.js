const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)//Object.create para criar objetos
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2= Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}//writable: false, o value não vai aceitar ser mudado/ enumerable = enumerado poder ser lista e percorrido
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} Tem cabelo ${filha2.corCabelo}`)

console.log(filha1)
console.log(filha2)

//verificando se tem o atributo e pertence ao objeto
for(let key in filha2){
    filha2.hasOwnProperty(key) ?//hasOwnProperty = atributo key ele pertence ao objeto filha2, retorn true ou false
    console.log(key) : console.log(`Por herança: ${key}`)
}