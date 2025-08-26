var aluno = {
    nome : "romario",
    anoEscolar : "2°",
    turma : "c",
    notas: [6, 8, 7],
    estudar: function(){
        console.log("estou estudchapando");
        },
    // método com função interna
    media: function(n1,n2,n3){
        return((n1+n2+n3) / 3)
    } ,
    // método com função externa
    ocorrencias: listaDeOcorrencias
}
// Acessa as propriedades do objeto aluno
console.log("O aluno ", aluno.nome, "está no", aluno.escolar, " ano escolar.");
// Executa um método de dentro do objeto
aluno.estudar()
console.log("Média Final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
// Cria função externa para utilização do objeto
function listaDeOcorrencias() {
    console.log("Comeu na biblioteca");
    console.log("chamou outro estudante de macaco");
    console.log("bateu na professora");
    
}