var carro = {
    marca : "uno",
    modelo : "hb20",
    ano : 1993
}

console.log(carro.marca , carro.modelo, carro.ano);

console.log(carro.marca);

carro["ano"] = 2025

var novaPropriedade = "cor"
carro[novaPropriedade] = "vermelho"

var pessoa = {
    nome: "Cleber",
    idade: 54,
    eu: function(){
        console.log("Meu nome é ", pessoa.nome, "E eu tenho ", pessoa.idade, " Anos");
        
    }
}

pessoa.eu()
