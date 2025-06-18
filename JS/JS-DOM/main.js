// window.setTimeout(mensagem, 2500)
// 1s > 1000
// 2.5s > 2500
function Mensagem(){
    alert("Aprendendo DOM com js")
    alert(Date())
}


document.createElement("h1")

let tagH1 = document.createElement("h1")
tagH1.innerHTML = 'hello world, criei vc'
//Falo de quem ela será filho, a quem ela vai pertencer
document.body.appendChild(tagH1)