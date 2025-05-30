function geradorDeTagsDeIdentificacao(nomePet){
    return nomePet.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte){
    if(idade == 1 && porte === "M"){
        return true;
    }
    return false;
}

function calcularConsumoDeRacao(nome, idade, peso) {
    const consumoKg = 300;
    let consumoDia = peso * consumoKg;
    return consumoDia;
}

function decidirTipoDeAtividadePorPorte(porte){
    let porteUpperCase = porte.toUpperCase()
    switch(porteUpperCase){
        case 'PEQUENO':
            return "brincar dentro de casa"
            break
        case 'MEDIO':
            return "brincar na rua"
            break
        case 'GRANDE':
            return "adestrar"
            break
    }
}


async function buscarDadoAsync(){
    const palavra = "Pipoca"
    return new Promise((resolve) => {
        setTimeout(() => {resolve(palavra)}, 1500);
    });
}

export{
    geradorDeTagsDeIdentificacao, verificarSePodeSerAdotado, calcularConsumoDeRacao, decidirTipoDeAtividadePorPorte, buscarDadoAsync
}