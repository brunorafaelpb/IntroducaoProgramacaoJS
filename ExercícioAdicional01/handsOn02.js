const texto = "bruno rafael";
console.log(`Quantidade de vogais no texto: ${contVogais(texto)}`);

function contVogais(texto) {
    const vogais = ['a','e','i','o','u']
    let qtdVogais = 0
    for(let i = 0; i<=texto.length; i++){
        if(vogais.includes(texto[i])){
            qtdVogais++
        }
    }
    return qtdVogais
}