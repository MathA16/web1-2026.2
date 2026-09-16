const notas = [7.7, 9.2];
const [n1, n2] = notas; // destructuring
console.log(n1);
console.log(n2);

//Desestruturação de objetos
const pessoa = [{
  nome: "Matheus",
  idade: 24,
  peso: 78.75175,
},
{
    nome: "Lucas",
    idade: 30,
    peso: 80.5
}];

const idadesAtualizadas = pessoa.map(({ idade }) => ++idade);

//const { idade } = pessoa;

console.log(idadesAtualizadas);
