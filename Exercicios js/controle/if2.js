function teste1(num){
    if(num > 7)
        console.log(num)//if sem as '{}' vai entrar só na proxima linha

    console.log('Final')//não é python
}

teste1(5)
teste1(8)

function teste2(num){
    if(num > 7); {//cuidado com o ';', não usar com as estruturas de controle
        console.log(num)

    }
}

teste2(6)
teste2(9)