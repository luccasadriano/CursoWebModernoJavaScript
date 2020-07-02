class Pessoa{
    constructor(nome){//para poder inicializar as variaveis
        this.nome = nome//this define a variavel como public
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Luccas')
p1.falar()


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Luccas')
p2.falar()