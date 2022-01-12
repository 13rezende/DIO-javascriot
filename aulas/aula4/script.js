var jogador1 = 0
var jogador2 = 1
var placar;




//if (jogador1 !=-1 || jogador2 !=-1 ){
//if ternario para fazer uma verificao em uma linha ex:condição ? instrução1 : instrução2
    jogador1 != -1 &&jogador2 != -1 ? console.log('os jogsdores são válidos') :console.log("os jogadores são inválidos");

    if (jogador1 > 0 && jogador2<0 ){
        console.log("o jogador 1 marcou um ponto")
    placar = jogador1> jogador2
    } else if (jogador2 >0 && jogador1<0){
        console.log("o jogador 2 marcou pontos")
        placar = jogador2 >jogador1
    } else{
        console.log("ninguem marcou ponto")
    }
//}


//switch case ex:switch($(expressão))
//  case 1: 
//  $ (instrução)
//  break 
//  cae 2:...

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 está ganhando')
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 1 está ganhando')
        break;
    default:
        console.log('ocorreu um erro')

}


//estruturas de repetição for funciona como uma repetiçãode uma instruçãoaté que a condição seja falsa ex:for(expressão ,condição , incremento)

var array = ["valor1" ,'valor2', 'valor3','valor4','valor5']
let object = {
    propriedade1: "valor1", propriedade2:'valor2', propriedade3:'valor3'
}
for(let i=0 , i < array.length , i++){
    console.log(i)
}
//outra forma o IN
for (index in array){
    console.log(index)
}
for (index in object){
    console.log(index)
}
//repetiçõ a partir de um vlor 
for(i of array){
    console.log(i)
}
//for of não funciona com objetos pois as propriedades variam , diferentes índices em um array que sempre serão números inteiros  .mas se eu quiser pegar o velor mesmo assim?
//for(i of object.propriedade){
//    console.log(i)
//} . mas cada carácter será dentro de uma linha separada



//while executa enqunto a condição for verdadeira , a verificaçlõ é feita ntes d execução
var a = 0
while(a<10){
    a++
    console.log(a)
}


//do ehile executa primeiro e depois verifica
do{
    let b = 0
    b++
    console.log(b)
}while(b<10)