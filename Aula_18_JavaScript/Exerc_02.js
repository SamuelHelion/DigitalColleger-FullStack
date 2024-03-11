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
            console.log(contador)
            if(contador === 100) {
                condicao = false
            }
            contador++;
        }
        

        // ECMAScript 5
        // FUNCAO MAP, FILTER, REDUCE