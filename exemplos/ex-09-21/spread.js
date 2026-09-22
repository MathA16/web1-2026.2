// Spread Operator - operador de espalhamento
const trimestre1 = ["jan", "fev", "mar"];
const trimestre2 = ["abr", "mai", "jun"];

const copiaTrimetre1 = [...trimestre1]; // copia o array usando o spread operator

const semestre1 = [...trimestre1, ...trimestre2]; // junção de arrays usando o spread operator

console.log(semestre1);

const carro = {
    motor: "1.0 Aspirado",
    marca: "Fiat",
    modelo: "Argo",
    ano: 2018,
    km: 80000
}

const copiaCarro = { ...carro, km: 90000 }; // copia
const anuncio = { ...carro, valor: 52000, local: "Tauá-CE" }