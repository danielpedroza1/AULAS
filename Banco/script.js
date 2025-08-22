var saldo = prompt("Antes de começar as operações digite a senha: ")
var senha = "777"
var saldo = Number(1000)
var escolha
banco()
function banco(){
if (senha = "777") {
    console.log("iremos prosseguir então")
    prompt("se saldo atual é de: ", saldo)
    var operacao = prompt("Digite a operação que deseje realizar(saque) ou (depósito)")

    if (operacao == "saque"){
        var sacado = prompt("Digite o valor a ser sacado")
        var sacar = saldo - sacado
        prompt("Ok, valor liberado, você está atualmente com : ", sacar, "na conta");
        
    }

    else if(operacao == "depósito"){
        var depositado = prompt("Digite o valor a ser depositado: ")
        var deposito = saldo + depositado
        prompt("Ok, valor liberado, você está atualmente com : ", deposito, "na conta");
    }
}

else{
    prompt("Senha incorreta operação finalizada")
}

    prompt("Deseja finalizar a operação ou continua? ")
    if(escolha = "finalizar"){

    }
    else{
        banco()
    }
}