//tipos primitivos

//bollean
var vOUf = false
console.log(vOUf)
console.log(typeof(vOUf))

//nummber
var numero = 2
console.log(numero)
console.log(typeof(numero))


//string
var txt = 'qualquer texto'
console.log(txt)
console.log(typeof(txt))


//tipos de variáveis
var variavel = "Diana"
 variavel = "Martine"
console.log(variavel)


let variavel2 ="Martine"
 variavel2 ="Diana"
console.log(variavel2)

const variavel3 ="Diana Martine , pois não pde ser mudado"
console.log(variavel3)


//escopo
var escopoGlobal ="global"
function escopoglobal(){
    let escopoLocalInterno = "Local"
    console.log(escopoLocalInterno)
}


//diferença entre atriuição comparação e comparação ideêntica
//atribuição
var atribuição = "Diana"
console.log(atribuição)

//compaaração
var comparação = "0" == 0
console.log('var comparação = "0" == 0 ' + comparação)

//comparação idêntica
var comparaçãoIdentica = "0" === 0
console.log('var comparaçãoIdentica = "0" === 0 '+ comparaçãoIdentica)


//operadores aritméticos
var soma = 1+1
console.log(soma)

var subtração = 23-4
console.log(subtração)


var multiplicação = 22*8
console.log(multiplicação)

 
var divisao = 2/4
console.log(divisao)


var modulo = 353%2
console.log(modulo)


var potencia = 2**100
console.log(potencia)


//operadores relacionais
var maiorOUigual = 42 >= 33
console.log(maiorOUigual)

var menorOUIgual = 93 <=39
console.log(menorOUIgual)

//operadores lógicos
var condicionalE = true && false
console.log(condicionalE)

var condicionlOu = true || true
console.log(condicionlOu)