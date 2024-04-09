const lista = ["Jose", "Ana", "Val", "Marcio", "Alex"];

const novaLista = lista.map((nome) => {
    nome += " Ferreira";
    return nome;
})

// FILTER
const listaFiltrada = lista.filter((nome) => {
    if(nome.length >= 4) {
        return nome;
    }
})

const listaFiltrada2 = lista.filter((nome) => nome.length >= 4);
console.log(listaFiltrada2);


