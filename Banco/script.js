var entrar = prompt("Antes de começar as operações digite a senha: ");
var senha = "777";
var saldo = 1000;
var escolha;
banco();
function banco() {
  if ((entrar == senha)) {
    console.log("iremos prosseguir então", saldo);
    prompt("seu saldo atual é de: "+ saldo);
    var operacao = prompt(
      "Digite a operação que deseje realizar(saque) ou (depósito)"
    );

    if (operacao == "saque") {
      var sacado = prompt("Digite o valor a ser sacado");
      saldo = saldo - sacado;
      prompt(
        "Ok, valor liberado, você está atualmente com : ",
        saldo,
        "na conta"
      );
    } else if (operacao == "depósito") {
      var depositado = prompt("Digite o valor a ser depositado: ");
      var deposito = saldo + depositado;
      prompt(
        "Ok, valor liberado, você está atualmente com : ",
        deposito,
        "na conta"
      );
    }
  } else {
    prompt("Senha incorreta operação finalizada");
  }

  prompt("Deseja finalizar a operação ou continua? ");
  if ((escolha == "finalizar")) {
  } else {
    banco();
  }
}
