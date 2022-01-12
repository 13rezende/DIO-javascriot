let array = ['string' ,1 , true]
console.log(array)

let  array2 = ['texto',2, false ["array1"] , ['array2'] , ['array3'] , ['array4']]
console.log(array2)
console.log(array2[0])
array2.forEach(function(item , index){
    console.log(item,i)
})
array2.push("novo item")
console.log(array2) 

array2.Pop()
console.log(array2)

array2.shift()
console.log(array2)

array2.unshift("novo item no inicio")
console.log(array2)

console.log(array2.indexOf[true])

let novoArray = array2.slice(0,3)
console.log(novoArray)

array2.splice(0,3)
console.log(array2)


//manipulando arrays: ao ser declarado , o array traz consigo uma série de métodos par maniipula-lós .forEach()-intera um array(uma função para cada item do arrayy) .push()-add item no final do array  .pop()-remove item no final do array .shift()-remove item no início do array .unshift()-add itam no iníci do array .indexOf()-retorna o índice de um  valor .splice()-remove ou substitui um item pelo index .slice()=retorna uma parte de um rray existênte 





//objetos: dados que possuem proriedades e valores que definemsuas características.devem ser declaradas entre chves{} ex:xicara={cor :"azul" , tamanho:"p" , função:tomarCafe() } . as propriedades so objetivo podem ser atriibuídas à variáveis, faciliando a manutençãodo objeto. chamando isso de desestruturaçãoeex:xicara={cor :"azul" , tamanho:"p" , função:tomarCafe() } . var cor = xicara.cor; var tamanho = xicara.tamanho; var função = xtomarCafe();
var objeto = {
    String:"string" , nunber:1 , Boolean:true, array3:["array3"] , objetoInterno:{
        objetoInterno:"objeto interno"
    }
}
console.log(objeto)
console.log(objeto.Boolean)
console.log(objeto,objetoInterno)

//descontruindo o objeto
var objetoString = objeto.String
console.log(objetoString)

var objetoArray = objeto.array3
console.log(objetoArray)


//outra forma de descontruir
var {
    objetoInterno , number , array3
} = objeto
console.log(String , number , array)