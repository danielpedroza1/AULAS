console.log("OI");

// Com array

var alunos = ["Pedro", "Tiago", "João"]
var media = [7,8,6]

console.log("O aluno: ", alunos[1], "teve media: ", media[1]);

// Com objeto
var estudante = {
    nome : "Cristiano",
    nota1 : 8,
    nota2 : 9,
    media : 8.5
}

console.log(estudante.nome);
console.log(estudante.nota1);
console.log(estudante.nota2);
console.log(estudante.media);

var pincel = {
    tamanho : 15,
    cor : "violeta",
    material : "Aço",
    funcao : "pincelar"
}

console.log(pincel.nome, "tem cor de: ", pincel.cor);

// criando um objeto vazio
var garrafa = {}
console.log(garrafa)

// Adicionando novas propriedades
// em um objeto já existente
garrafa.preco = 430
garrafa.cor = "Amarelo"
garrafa.tamanho = 2.5
garrafa["validade"] = "1 ano"

console.log(garrafa)

// Alterando o valor de uma propriedade
// que já existe
garrafa.preco = 429.99
garrafa["validade"] = "2 ano"
console.log(garrafa);

// Criar uma nova propriedade
var novaPropriedade = "apelido"
garrafa[novaPropriedade] = "Aristóteles"
console.log(garrafa.apelido);

// Criar funções
var animal = {
    // Variáveis = propriedades
    nome: "Luke",
    especie: "Lagarto",
    raca: "adidas",
    // Função = método
    andar: function(){
        console.log("Estou andando");
        
    },
    latir: function(){
        console.log(lato);
        
    }
}

console.log("O nome é: ", animal.nome);

animal.andar()
animal.lato()