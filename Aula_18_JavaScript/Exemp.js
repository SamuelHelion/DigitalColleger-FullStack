const carros = [
    {
        modelo: "Onix",
        marca: "Chevrolet",
        cor: "vermelho",
        valor: 90000.00
    },
    {
        modelo: "Pulse",
        marca: "Fiat",
        cor: "Cinza",
        valor: 12000.00
    },
    {
        modelo: "Civic",
        marca: "Honda",
        cor: "Preto",
        valor: 150000.00
    }
];


// WHILE - ENQUANTO 
let condicao = true;
let contador = 0;
while(condicao) {
    // console.log(contador)
    if(contador === 100) {
        condicao = false
    }
    contador++;
}


// ECMAScript 5 - https://dontpad.com/fs29
// FUNCAO MAP, FILTER, REDUCE - ARRAYS
console.log(carros);

function lerPosicao(item, indice) {
    console.log(indice);
    console.log(item.modelo);
}
carros.map(lerPosicao);

carros.map(function (item, indice) {
    console.log(indice);
    console.log(item.modelo);
});

// Arrow Function
carros.map((item, indice) => {
    console.log(indice);
    console.log(item.modelo);
});

// CALLBACK
function funcaoA(funcao){
    funcao("Max")
}

function funcaoB(valor){
    alert(valor)
}

funcaoA(funcaoB);
function mapeamento(lista, callback) {
    for(let i = 0; i < lista.length; i++) {
        callback(lista[i], i);
    }
}

mapeamento(carros, (item, indice) => {
    console.log(item);
})


// FILTER

const caros = carros.filter((carro, indice) => {
    if(carro.valor >= 100) {
        return carro;
    }
});

const caros2 = carros.filter((carro, indice) => carro.valor >= 100);