const qtdPetiscos = 5
alimentarDog(qtdPetiscos)

function alimentarDog(qtdPetiscos){
    for(let i = 1; i<=qtdPetiscos; i++){
        console.log(`O petisco ${i} foi entregue`)
    }
    console.log("O dog está satisfeito! Os petiscos acabaram.")
}