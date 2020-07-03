class Avo{
    constructor(sobrenome, cabelo){
        this.sobrenome = sobrenome
        this.cabelo = cabelo
    }
}

class Pai extends Avo{
    constructor(sobrenome, cabelo, profissao = 'Professor'){
        super(sobrenome, cabelo)//esta chamando o constructor do avo, da class extends
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva', 'Cor preto')
    }
}

const filho = new Filho
console.log(filho)