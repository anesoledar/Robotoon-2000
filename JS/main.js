//Esta parte do código lida com as mudanças de estatística ao adicionar os pontos
    const estatistica = document.querySelectorAll("[data-estatistica]");
    const pecas = {
        "bracos": {
            "forca": 5,
            "resistencia": 2,
            "energia": -3,
            "velocidade": -2
        },

        "blindagem": {
            "forca": 2,
            "resistencia": 10,
            "energia": -3,
            "velocidade": -5
        },
        "nucleos":{
            "forca": 0,
            "resistencia": 0,
            "energia": 6,
            "velocidade": 0
        },
        "pernas":{
            "forca": 2,
            "resistencia": 2,
            "energia": -3,
            "velocidade": 10
        },
        "foguetes":{
            "forca": 10,
            "resistencia": 0,
            "energia": -3,
            "velocidade": 0
        }
    }
    const peca = document.querySelectorAll("[data-contador]")
    const controle = document.querySelectorAll("[data-controle]")

                //Quando um dos botões + ou - são clicados, muda o contador de pontos e as estatísticas
    controle.forEach(elemento => {
        elemento.addEventListener('click', (evento) => {
            gastaPontuacao(evento.target.dataset.controle, evento.target.parentNode)

                //esta funão aumenta ou diminui os pontos gastos ao clicar no botão + ou - e também chama a função modificaEstatistica para o somatório correspondente nos atributos força, resistência etc..
            function gastaPontuacao(operacao, controle) {
                const peca = controle.querySelector("[data-contador]")
            
                if(operacao === "-" && peca.value >0) {
                    peca.value = parseInt(peca.value) - 1
                    modificaEstatistica(evento.target.dataset.peca, "-")
                    
            
                } else if (operacao === "+" && peca.value <10) {
                    peca.value = parseInt(peca.value) + 1
                    modificaEstatistica(evento.target.dataset.peca, "+")
                }
            
            }
                    //Esta função quando chamada, diminui ou adiciona os status de cada item no array pecas ao seu correspondente no documento
            function modificaEstatistica(peca, operacao){
                let contador = 1;
                    estatistica.forEach( (elemento) => {
            
                        if (operacao === "-") {
                        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
                        }
                        else
                            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
                        }
                        
                    )}
    
        })
    }) 
    
// Esta parte do código lida com a mudança de robôs e seus status iniciais
   
    
  




