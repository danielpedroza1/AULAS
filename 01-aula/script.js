

//console.log = escreva do portugol
console.log("UMA MENSAGEM TOP AQUI") //Tá comentado
//Cria uma janela de alerta na pagina
//alert("Testa ai e vê")

var nome = "Cris"
console.log("O nome é:" + nome)

//cadeia = String
var texto = "Santos"
console.log(typeof(texto))

// inteiro = number, int
var numero = 1989
console.log(typeof(numero))

// real = number, float
var quebrado = 1.9
console.log(typeof(quebrado))

// lógico = bool
var VouF = true
console.log(typeof(VouF))

//Valor nulo
var nulo = null
console.log(typeof(nulo))

//Variável sem valor iniciado
var indefinido = undefined
console.log(typeof(indefinido))

//operadores aritiméticos
// +,-,*,/,%

var a = 10
var b = 3

console.log("O resultado da multiplicação de 10 * 3 é igual á:", a*3)
console.log("O resultado da subtração de 10 - 3 é igual a:", a-b)
console.log("O resultado da adição de 10 + 3 é igual a:", a+b)
console.log("O resultado da divisão de 10 por 3 é igual a:", a/b)
console.log("O resultado da porcentagem de 10 por 3 é igual a:", a%b)

// Operadores lógicos
// e, ou, nao
// &&, ||, ! = not

var verdade = true //V
var mentira = false //F

//Comparação E
console.log( verdade && mentira)

//Comparação com OU
console.log( verdade || mentira)

//Comparação com negação
console.log( verdade && !mentira)

//Operadores Relacionais
// >, <, >=, <=, ==, !=, ===, !==

var v1=7
var v2=15
var v3="7"

console.log(v1 > v2)
console.log(v1 < v2)
console.log(v1 >= v2)
console.log(v1 <= v2)
console.log(v1 == v2)
console.log(v1 != v2)

console.log(v1 == v3) //Compara só valor
console.log(v1 === v3) //Compara valor e tipo
console.log(v1 !== v3) //Compara valor e tipos

// Interação com o usuário via comando prompt
var numero = prompt("Digite um número")
var numero2 = prompt("Digite outro número")

var resultado = Number(numero) + Number(numero2)

console.log(resultado);

alert("O resultado é:"+(resultado))