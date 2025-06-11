// "A" caracter
// "Olá" Texto - String

var texto1 = "olá IOS"
          //0 1 2 3 4 5 6
var resultado1 = texto1.charAt(6)

console.log(resultado1)

var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(lorem.length)

//console.log(lorem.length >= 500)

console.clear();

var texto2 = "OLÁ TEC DE TECNOLOGIA"
var texto3 = "olá, meu nome é ia, seu amigo"
//tipo 1
var resultado2 = texto2.toLowerCase()

console.log(resultado2)
//tipo 2
console.log(texto3.toUpperCase()) 


var texto4 = 'mozilla'

console.log(texto4.substring(1, 3));
//oz
console.log(texto4.substring(2));
//zilla

var texto5 = 'Bem vindo a microsoft'
let novaMensagem = texto5.replace('a microsoft', 'ao IOS')

console.log(novaMensagem);

//retirar espaços em branco

let textarea = '       olá mundo, sofrendo aprendendo javascript       '

console.log(textarea.trim())


