import http from "node:http";

const produtos = [
    {
        id: 1,
        nome: "Teclado Mecânico",
        categoria: "Periféricos",
        preco: 250
    },
    {
        id: 2,
        nome: "Mouse Gamer",
        categoria: "Periféricos",
        preco: 150
    },
    {
        id: 3,
        nome: "Monitor 24",
        categoria: "Monitores",
        preco: 900
    }
];

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/produtos") {

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
        <h1>Produtos</h1>
        <p>Lista de produtos disponíveis: ${produtos.lenth = produtos.length}</p>
        <ul>
          ${produtos.map(produto => `<li>${produto.nome} - ${produto.categoria} - R$ ${produto.preco}</li>`).join("")}
        </ul>
        <p>Produtos maiores que 500: ${produtos.filter(produto => produto.preco > 500).length}</p>`);

    return;
  }
});

server.listen(3000, () => {
  console.log("API executando em http://localhost:3000");
});