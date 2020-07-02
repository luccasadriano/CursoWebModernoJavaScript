/*
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f //xor é OR indiferente
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f
!f -> v
*/

function compras (trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2     // OR const compraTv32 = !!(trabalho1 ^ trabalho) // bitwise xor
    const manterSaudavel = !compraSorvete // operador unário

return {compraSorvete, comprarTv50, comprarTv32, manterSaudavel} //Objeto, lembrando que o objeto é a coleção de chave e valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))