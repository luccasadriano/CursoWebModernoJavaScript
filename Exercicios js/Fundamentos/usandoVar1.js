//a variavel "var" é possivel ver pois esta dentro de blocos
{ 
    { 
        { 
            { 
                var sera = 'Será???' 
            } 
        } 
    } 
}
console.log(sera)


//não é possivel ver a variavel "var" pois esta dentro da função "teste"
function teste(){
    var local = 123
    //console.log(local)
}

teste()
console.log(local)