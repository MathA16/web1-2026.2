const listaProdutos = document.getElementById("lista-produtos");

async function buscarProdutos() {
    try {
        const resposta = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os produtos.");
        }

        const produtos = await resposta.json();

        listarProdutos(produtos);
    } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);

        listaProdutos.innerHTML = "";

        const mensagem = document.createElement("p");
        mensagem.className = "mensagem erro";
        mensagem.textContent =
            "Ocorreu um erro ao carregar os produtos. Tente novamente.";

        listaProdutos.appendChild(mensagem);
    }
}

function listarProdutos(produtos) {
    listaProdutos.innerHTML = "";

    produtos.forEach(produto => {
        // Card principal
        const card = document.createElement("article");
        card.className = "card-produto";

        // Imagem
        const areaImagem = document.createElement("div");
        areaImagem.className = "imagem-produto";

        const imagem = document.createElement("img");
        imagem.src = produto.image;
        imagem.alt = produto.title;
        imagem.loading = "lazy";

        areaImagem.appendChild(imagem);

        // Informações do produto
        const informacoes = document.createElement("div");
        informacoes.className = "info-produto";

        const categoria = document.createElement("span");
        categoria.className = "categoria";
        categoria.textContent = produto.category;

        const titulo = document.createElement("h3");
        titulo.className = "titulo-produto";
        titulo.textContent = produto.title;

        const descricao = document.createElement("p");
        descricao.className = "descricao-produto";
        descricao.textContent = produto.description;

        const preco = document.createElement("p");
        preco.className = "preco-produto";
        preco.textContent = produto.price.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "USD"
            }
        );

        // Botão de compra demonstrativo
        const botao = document.createElement("button");
        botao.className = "botao-comprar";
        botao.textContent = "Adicionar ao carrinho";
        botao.type = "button";

        botao.addEventListener("click", () => {
            alert(`"${produto.title}" selecionado!`);
        });

        // Montagem do card
        informacoes.append(
            categoria,
            titulo,
            descricao,
            preco,
            botao
        );

        card.append(areaImagem, informacoes);
        listaProdutos.appendChild(card);
    });
}

buscarProdutos();