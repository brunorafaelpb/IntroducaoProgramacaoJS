const dog = {
    nome: "Rangel",
    peso: 10,
    estoqueRacaoG: 10000,
}

let racaoRecomendadaPorDia = calcularRacaoDiaria(dog.peso)
let diaEstoque = calcularDuracaoEstoque(racaoRecomendadaPorDia, dog.estoqueRacaoG)

console.log("============= Calculadora de Ração Diária ===============")
console.log(`Nome: ${dog.nome}`)
console.log(`Peso: ${dog.peso}Kg`)
console.log(`Ração diária recomendada: ${racaoRecomendadaPorDia}g`)
console.log(`Duração do estoque: ${diaEstoque} dias`)

function calcularRacaoDiaria(peso){
    return (peso*30)
}

function calcularDuracaoEstoque(racaoRecomendadaPorDia, estoque){
    return (estoque/racaoRecomendadaPorDia)
}