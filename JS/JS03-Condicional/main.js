let atividadeEntregue = true
let diaFinalEntrega = 19
if(atividadeEntregue == true){
    console.log("Uffa, finalmente acabou")
    if(diaFinalEntrega <= 13){
        console.log('entregou atividade na data e sua nota é 10!')
    }
    else{
        console.log('perdeu 2 ponto de besta')
    }
}
else if(atividadeEntregue == false){
    console.log('Opa, parece que você ainda não entregou a atividade')
}
else{
    console.log('você inseriu uma informação invalida')
}
