
const produtos = [
  { id: 1, nome: "camisa Branca teste", preco: 89.90, categoria: "camisetas",
    imagem: "./imagens/camisaBranca.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["P","M","G","GG","XG"] },
    
  { id: 2, nome: "Camiseta Preta teste", preco: 99.90, categoria: "camisetas",
   imagem: "./imagens/camisaPreta.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["P","M","G","GG","XG"] },
    
  { id: 3, nome: "Camiseta Branca teste02", preco: 109.90, categoria: "camisetas",
   imagem: "./imagens/camisaBranca.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["P","M","G","GG","XG"] },
    
  { id: 4, nome: "Calça Cargo teste", preco: 149.90, categoria: "calcas",
   imagem: "./imagens/calcaPreta.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["P","M","G","GG","XG"] },
    
  { id: 5, nome: "Bermuda teste", preco: 139.90, categoria: "calcas",
   imagem: "./imagens/bermuda.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["P","M","G","GG","XG"] },
    
  { id: 6, nome: "Bermuda teste02", preco: 159.90, categoria: "calcas",
   imagem: "./imagens/bermuda.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["P","M","G","GG","XG"] },
    
  { id: 7, nome: "Bone preto teste", preco: 299.90, categoria: "tenis",
   imagem: "./imagens/bonePreto.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["38","39","40","41","42","43"] },
    
  { id: 8, nome: "Relogio preto teste", preco: 279.90, categoria: "tenis",
   imagem: "./imagens/relogioPreto.jpeg",
    descricao: "Breve descrição a gosto.",
    tamanhos: ["38","39","40","41","42","43"] },
    
  { id: 9, nome: "Relogio preto teste02", preco: 319.90, categoria: "tenis",
    descricao: "Breve descrição a gosto.",
       imagem: "./imagens/relogioPreto.jpeg",
    tamanhos: ["38","39","40","41","42","43"] }
    
];

// Número do WhatsApp
const whatsapp = "5584992035664";

// Renderizar produtos por categoria
function renderizarProdutos() {
  const categorias = document.querySelectorAll(".produtos-categoria");

  categorias.forEach(container => {
    const categoria = container.dataset.categoria;
    container.innerHTML = "";

    produtos
      .filter(p => p.categoria === categoria)
      .forEach(produto => {
        const div = document.createElement("div");
        div.classList.add("produto-detalhes");

        div.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
          <label for="tamanho-${produto.id}">Tamanho:</label>
          <select id="tamanho-${produto.id}">
            ${produto.tamanhos.map(t => `<option value="${t}">${t}</option>`).join("")}
          </select>
          <button onclick="fazerPedido(${produto.id})">Fazer pedido</button>
        `;

        container.appendChild(div);
      });
  });
}

// Função para enviar pro WhatsApp
function fazerPedido(id) {
  const produto = produtos.find(p => p.id === id);
  const tamanho = document.getElementById(`tamanho-${id}`).value;

  const mensagem = `Olá, quero fazer um pedido:%0A` +
                   `Produto: ${produto.nome}%0A` +
                   `Preço: R$ ${produto.preco.toFixed(2)}%0A` +
                   `Tamanho: ${tamanho}`;

  window.open(`https://wa.me/${whatsapp}?text=${mensagem}`, "_blank");
}

// SLIDE AUTOMÁTICO
let slideIndex = 0;
function mostrarSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}
setInterval(mostrarSlides, 4000); // troca a cada 4s

renderizarProdutos();