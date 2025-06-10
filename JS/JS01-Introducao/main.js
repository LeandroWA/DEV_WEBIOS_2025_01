var idade
const ano = 2010

// JavaScript
console.log("Hello Word")
console.clear()

// Variaveis
var numero1 = 192
console.log(numero1)


var num1 = 5
var num2 = 4
var resultado = num1 + num2
console.log(resultado)


idade = 89 // iniciar a variavel em oura parte do codigo
console.log(idade)

// Ano = 1936
const PI = 3.14

// Textos - Strings

let nome = "leandro"
const nome2 = "Leandro2"
var nome3 = "716474.4674" //Textos



// Concatenar = concatenar significa juntar dois ou mais valores (geralmente strings) em uma única string.
// Concatenar 1 ⬇⬇
console.log("olá" + " papai"); 

// Concatenar 2 ⬇⬇
console.log("aluno " + nome + " e aluno " + nome2 + ' tem um total de ' + nome3 + " dinheiros")

// Template string
// Concatenar 3 ⬇⬇
console.log(`aluno ${nome} e aluno ${nome2} Tem um total de ${nome3} Dinheiros`)


console.log(nome)
console.log(nome2)
console.log(nome3)

console.log(0 /0); // NaN = significa “Not a Number” (“não é um número”) embora seja um valor do tipo numérico




// Operadores

var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 / valor2)
console.log(valor1 * valor2)
console.log(valor1 ** valor2)

// Operadores relacionais

console.log(5 == 5)
console.log(5 > 5)
console.log(22 < 8)
console.log(22 >= 22)
console.log(22 != 23)

console.log('A' == 'A')
console.log(nome == nome2)
console.log(true === 'true') //boolean e o outrp e txt > String

//Operadores logicos

let temCamisa = false
let temCracha = true
console.log(temCamisa)
console.log(temCracha)
console.log(temCamisa == true && temCracha == true)
//              false         ==          true = true
console.log(temCamisa == true || temCracha == true)
             //    false      ou          true = true
console.log(!(temCamisa == true && temCracha == true))


//Operador de atribuição
var x = 3
var y = 2
x = x + y
//x += y ⬇Formato contraido⬇
//x = 3 + 2
console.log (x)

x = 720
console.log(x);

console.clear()
console.error("Sai intruso")
console.warn("olha vc ai dnv")

console.log("Está tudo limpo")
console.log("Olá mundo")