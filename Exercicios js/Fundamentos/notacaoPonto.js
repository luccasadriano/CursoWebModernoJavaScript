console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //sobrescrevendo o o atriduto nome
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...teste')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesas')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()