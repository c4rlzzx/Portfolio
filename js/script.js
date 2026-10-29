// Teste de conexão com o console
console.log("Olá! O JavaScript está funcionando");

// Variáveis e captura da hora atual do sistema
const nome = "Carlos";
// ==========================================
// 1. SAUDAÇÃO DINÂMICA (Apenas na página index)
// ==========================================
const hora = new Date().getHours();
let saudacao;

if (hora < 12) {
  saudacao = "Bom dia";
} else if (hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

const elementoTitulo = document.querySelector("#titulo-boas-vindas");
if (elementoTitulo) {
  elementoTitulo.textContent = `${saudacao}! Bem-vindo ao meu portfólio`;
}

// ==========================================
// 2. MODO TERMINAL / CYBERPUNK (Todas as páginas)
// ==========================================
const botaoTema = document.querySelector("#btn-tema");
if (botaoTema) {
  botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-matrix");

    if (document.body.classList.contains("modo-matrix")) {
      botaoTema.textContent = "[ Modo: Cyberpunk ]";
    } else {
      botaoTema.textContent = "[ Modo: Terminal ]";
    }
  });
}

// ==========================================
// 3. LISTA DINÂMICA DE GOSTOS (Apenas na página sobre)
// ==========================================
const gostos = ["Animes", "Rock", "Filosofia", "Hacking"];
const lista = document.querySelector("#gostos");

if (lista) {
  // Limpa qualquer conteúdo residual antes de inserir
  lista.innerHTML = "";

  for (const gosto of gostos) {
    const item = document.createElement("li");
    item.textContent = gosto;
    lista.appendChild(item);
  }
}

