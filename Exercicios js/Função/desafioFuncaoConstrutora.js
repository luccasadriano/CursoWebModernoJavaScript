//transformei a class em uma função construtora
function Pessoa(nome){
    this.nome = nome //this deixando a veriavel public

    console.log(nome)
    
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Luccas')
p1.falar()

