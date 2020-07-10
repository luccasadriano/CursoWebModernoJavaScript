const axios = require('axios')

// chineses, Mulher, com o menor salario

const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const pais = e => e.pais === 'China'
const genero = e => e.genero === 'F'
const menorSalario = (funcionario1, funcionario2) => {
    return funcionario1.salario < funcionario2.salario ? funcionario1 : funcionario2
}

axios.get(URL)
.then(response=> {    
    const funcionarios = response.data
    const resultado = funcionarios.filter(pais).filter(genero).reduce(menorSalario)
    console.log(resultado)
})

// console.log(axios)


