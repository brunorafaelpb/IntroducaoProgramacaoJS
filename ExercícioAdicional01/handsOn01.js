const lista = [1, "Bruno", 3, "Rafael", 5, "Albuquerque", 4.23];
const listaNumeros = removerStringsDaLista(lista);
console.log(listaNumeros);

function removerStringsDaLista(lista) {
    return lista.filter(item => typeof item === 'number');
}