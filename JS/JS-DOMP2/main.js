//Guardar a localização do input 
let textoNome = document.getElementById("nome")

//  ler o texto que seá digitado no input

function mostrarMensagem(){
    // ler o texto que será digitado no input
    let recebeNome = textoNome.value
    // Apresenta a mensagem na tag H1
    let tagH1 = document.getElementById("h1")

    tagH1.innerHTML = `olá ${recebeNome}, bem vindo`
}

    // TABUADA
let numeroTabuada = document.getElementById("numero")
let recebeCalculo = document.getElementById("recebeCalculo")

// Funcao de calcular a tabuada
function Calcular(){
    // ler o numero que será digitado no input
    let numero = numeroTabuada.value;

    //Apresentar a tabuada
    for(let i = 0; i <= 10; i++){
        recebeCalculo.innerHTML += `${numero} X ${i} = ${numero * i} <br>`
    }
}

// Limpar o console
function Limpar(){
    recebeCalculo.innerHTML = ''
}




// var gabriel = docment.getElementById("titulo")

// gabriel.innerHTML = 'Outro titulo'


