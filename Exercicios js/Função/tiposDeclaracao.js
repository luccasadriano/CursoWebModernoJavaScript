console.log(soma(3, 4))//pode chamar a function antes de declara ela
// function declaration
function soma(x, y){
    return x + y
}

//funtion expression -> chama a function depois de declara ela
const sub = function (x, y){//linha 8 a function foi atribuida para a const sub
    return x - y
}
console.log(sub(3,5))

// named function expression
const mult = function mult(x, y){//vantagem em debugger do para o nome da function
    return x * y
}
console.log(mult(3,5))
