// interação com o usúario via prompt
var nome = prompt("Digite seu nome: ")

alert("Seu nome é: " + nome)

//CONDICIONAIS

// SE, SENÃO SE, SENÃO
// IF, IF ELSE, ELSE

var estaVivo = true

if(estaVivo == true){
    console.log("Parabéns, você está vivo")
}

else if (estaVivo == false){
    console.log("Infelizmente, estás muerto 💀!!!")
}

else{
    console.log("Você não tá nada, virou sei lá")
}


// ESCOLHA / CASO
// SWITCH / CASE

var corCamisa = ("Amarela")

switch(corCamisa){
    case "Azul":
        console.log("Você ganhou um voucher")
    break
    case "Amarela":
        console.log("Você ganhou um carro sem rodas")
    break
     case "vermelha":
        console.log("Você ganhou um dia de cristiano ronaldo, vulgo")
    break
    default:
        console.log("Cor de camisa inválida")
}

// var numero = prompt("Digite sua nota: ")

// if(numero <= 4.9){
//     console.log("Reprovado");
    
// }

// else if(numero > 4.9 && numero < 6){
//     console.log("RECUPERAÇÃO");
    
// }

// else{
//         console.log("passou");
// }

var idade = prompt("Digite sua idade amiga 1")
var ingresso1, ingresso2
if(idade >=60){
    ingresso1 = 20
    
}

else if(idade < 17){
   ingresso1 = 15
   
}

else{
    ingresso1 = 30
    
}


var idade2 = prompt("Digite sua idade amiga 2")
if(idade2 >=60){
    ingresso1 = 20
    
}

else if(idade2 < 17){
   ingresso2 = 15
   
}

else{
    ingresso2 = 30
    
}

var valorFinal = ingresso1 + ingresso2

console.log("O preço final foi: " + valorFinal)

alert("O preço final foi: " + valorFinal)