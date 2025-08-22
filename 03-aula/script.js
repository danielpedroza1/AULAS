console.log("VAMO QUE VAMO")

// LAÇOS DE REPETIÇÃO

// PARA = FOR

for(var i = 0; i<5; i++){
    console.log("Ainda estoy ahí")
    console.log("Ainda estoy ahí");
    
}

console.log("Acabou de repetir");

// ENQUANTO = WHILE 

var contagem = 0
while(contagem <10){
      console.log("Estou repetindo infinitamente")
      contagem++
}

var contagem = prompt("Digite o numero: ")
for(var i = 0; i<contagem; i++){
    console.log("contagem: " , i+1);
    
}

var senha = "0"
var senhaCorreta = "3"

while(senha != senhaCorreta){
    var senha = prompt("Digite a senha: dica: a senha é um  numero que fica entre 2 e 4")
    
    
}

    console.log("entrou")
   
// FUNÇÕES

// Cria a função
function bemVindo(){
        var nome = prompt("Nome: ")
        console.log("Olá, ", nome)
}

// Chama a função
bemVindo()

// Função com parametros
function calcularIdade(idade){
    alert("Sua idade é: " + idade)
}

calcularIdade(18)
calcularIdade(100)

var n1 = prompt("Digite numero 1:")
var n2 = prompt("Digite numero 2:")
function Maior(n1, n2){
    if(n1 > n2){
        console.log("O numero: ", n1, "é maior");
        
    }

    else if(n2>n1){
        console.log("O numero: ", n2, "é maior q o primeiro");
        
    }

    else{
        console.log("Os números tem msm valor");
        
    }
}

Maior(n1, n2)

// FUNÇÕES COM RETORNO

function soma(valor1, valor2){
   let resultado = valor1 + valor2
   return resultado
}

var ValorSomado = soma(7,6)

console.log("A soma deu: ", valorSomado);