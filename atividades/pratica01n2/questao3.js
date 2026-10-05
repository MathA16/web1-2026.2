// npm init -y
// npm install ejs

import http from "node:http";
import ejs from "ejs";

const produtos = [
    {
        id: 1,
        titulo: "Super Metroid",
        plataforma: "SNES",
        preco: 180
    },
    {
        id: 2,
        titulo: "Chrono Trigger",
        plataforma: "SNES",
        preco: 250
    },
    {
        id: 3,
        titulo: "God of War II",
        plataforma: "PS2",
        preco: 120
    },
    {
        id: 4,
        titulo: "The Legend of Zelda",
        plataforma: "NES",
        preco: 200
    }
];

const server = http.createServer(async (req, res) => {

    if (req.url === "/produtos") {

        const html = await ejs.renderFile(
            "./views/produtos.ejs",
            { produtos }
        );

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(html);

        return;
    }

    res.writeHead(404);
    res.end("Página não encontrada");
});

server.listen(3000, () => {
    console.log("Servidor: http://localhost:3000");
});