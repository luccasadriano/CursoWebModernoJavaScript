function tratarRrroRLancarAbraba(erro){
    throw new Error('...')
    /*throw 10
    throw true
    throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/

}

function imprimirNomeGritando(obj){  // try é um bloco de codigo que dentro dele tem codigo que pode da erro. try vai tratar o erro com o catch
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarRrroRLancarAbraba(e)
    }finally{ //finally sempre vai ser chamado, msm com o erro.
        console.log('Acabou')
    }

}

const obj = { nome: 'Luccas'}
imprimirNomeGritando(obj)