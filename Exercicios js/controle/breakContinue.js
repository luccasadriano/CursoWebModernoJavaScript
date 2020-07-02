const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){//break ele faz o desviu de funções fora do laço sai do mesmo
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){//continue ele interrompi o laço e continua apos pular 1 elemento
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//não utilizar isso ai embaixo (for com rotulo), faz dentro de uma função a parte do segundo for por exemplo, mas não deixa o codigo muito confuso
externo:
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`par = ${a}, ${b}`)
    }
}
