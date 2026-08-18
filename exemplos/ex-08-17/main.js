// seleção de elementos do DOM
const imgPreferencia = document.getElementById("imgPreferencia");
const formCadastro = document.getElementById("formCadastro");
const sectionDados = document.getElementById("sectionDados");

function cadastrarDados(evento) {
    evento.preventDefault(); // previne o carregamento da pagina

    let nome = formCadastro.getElementsById("nome").value;
    let email = formCadastro.getElementsById("email").value;
    let senha = formCadastro.getElementsById("senha").value;
    let datanascimento = Number(formCadastro.getElementsById("datanascimento").value);
    let urlImagem = formCadastro.getElementsById("urlImagem").value;

    alert("Opa, virus detectado!")
}

formCadastro.addEventListener("submit", cadastrarDados);