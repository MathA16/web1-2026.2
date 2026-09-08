let alunos = [
    { id: 1, nome: "João", idade: 20, },
    { id: 2, nome: "Maria", idade: 22, },
    { id: 3, nome: "Pedro", idade: 21, }
];

let alunosMedia = alunos.map(aluno => {
    let soma = aluno.notas.reduce((total, nota) => {
        return total + nota;
    }, 0);
    let media = soma / aluno.notas.length;
    return { nome: aluno.nome, media: media };
});

console.log("Alunos com média:");
console.log(alunosMedia);


let acimaDe7 = alunosMedia.filter(aluno => aluno.media > 7);
console.log("Alunos com média acima de 7:");
console.log(acimaDe7);

let abaixoDe3 = alunosMedia.filter(aluno => aluno.media < 3);
console.log("Alunos com média abaixo de 3:");
console.log(abaixoDe3);