/**
 * 
    Sintaxe CommonJS:
        module.exports = {} / require('')

    ESM - Ecmascript Standard Modules
        export {} / import


 */
// exibirNomePet('Rangel')
// exibirNomePet('Amora')
// exibirNomePet('Hulk')


function exibirNomePet(paramNomePet){
    console.log(`O nome do pet é ${paramNomePet}`)
}



export{
    exibirNomePet
}