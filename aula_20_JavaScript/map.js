//CRIE UM ARRAY COM 5 NOMES E PECORRA UTILIZANDO
//MAP EXIBINDO O NOME DE CADA POSIÇÃO.
// EXIBA A POSIÇÃO + NOME + A QUANTIDADE DE CARACTERES.
 //UTILIZE O DOCUMENTO.WRITE()

// const list = ["Samuel","Daniel","Nasthasia","bruno","Carol"]
    
// const list_1 = list.map((i,q)=>{ 
//     document.write(`${q} ${i} ${i.length}<br/>`)
        
// })


 // CRIE UM ARRAY COM 5 NOMES E PERCORRA UTILIZANDO
        // MAP EXIBINDO O NOME DE CADA POSIÇÃO.
        // EXIBA A POSICAO + NOME + A QUANTIDADE DE CARACTERES.
        // UTILIZE O DOCUMENTO.WRITE()

        const lista = ["Jose", "Ana", "Val", "Marcio", "Alex"];
        lista.map((dado, posicao) => {
            document.write(`Seu nome é ${dado} e o total de caractere é ${dado.length} <br />`)
        });

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

        const pessoa = {
            nome: "Max",
            idade: 27,
            dependentes: [
                {
                    nome: "Thaila",
                    idade: 12
                },
                {
                    nome: "Jose",
                    idade: 2
                }
            ],
            mae: {
                nome: "Angela",
                idade: 67,
            }
        };
        pessoa.dependentes[0].nome;
        const dependentes = pessoa.dependentes;
        console.log(dependentes[0], dependentes[1]);


        pessoa.mae.nome;
        pessoa.nome = 'Marcio';
        pessoa.idade;
        console.log(pessoa.idade);


        const alunos = [
            {
                nome: "Jose",
                idade: 18,
                turma: "FS29",
                skills: [
                    "HTML", "CSS", "JS"
                ]
            },
            {
                nome: "Sarah",
                idade: 27,
                turma: "FS28",
                skills: [
                    "HTML", "CSS", "JS", "PHP"
                ]
            },
            {
                nome: "João",
                idade: 27,
                turma: "FS28",
                skills: [
                    "HTML", "CSS", "JS", "PYTHON", "JAVA"
                ]
            }
        ];
        alunos.map((item, index) => {
            document.write(`${index} - ${item.nome} - ${item.idade} - ${item.turma} <br />`);
            document.write("SKills: <br />")
           
            item.skills.map((skill, indexSkill) => {
                document.write(`${skill} <br />`)
            })
            document.write('<br />');
        });
