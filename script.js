// ===== RVG: comportamento do site =====

// --- Menu em telas pequenas ---
const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
});

// --- Consumo da API ViaCEP ---
const campoCep = document.getElementById("cep");
const avisoCep = document.getElementById("avisoCep");

function mostrarAviso(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = "aviso " + tipo;
}

// Coloca o traço enquanto a pessoa digita: 00000-000
campoCep.addEventListener("input", () => {
  const numeros = campoCep.value.replace(/\D/g, "").slice(0, 8);
  campoCep.value = numeros.length > 5
    ? numeros.slice(0, 5) + "-" + numeros.slice(5)
    : numeros;
});

async function buscarCep() {
  const cep = campoCep.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    mostrarAviso(avisoCep, "Digite um CEP com 8 números.", "erro");
    return;
  }

  mostrarAviso(avisoCep, "Buscando endereço...", "");

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      mostrarAviso(avisoCep, "CEP não encontrado. Confira os números.", "erro");
      return;
    }

    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = `${dados.localidade}/${dados.uf}`;
    mostrarAviso(avisoCep, "Endereço encontrado pela API ViaCEP.", "ok");
  } catch (erro) {
    mostrarAviso(avisoCep, "Não foi possível consultar o CEP. Verifique a internet e tente de novo.", "erro");
  }
}

document.getElementById("buscarCep").addEventListener("click", buscarCep);
campoCep.addEventListener("blur", () => {
  if (campoCep.value.length === 9) buscarCep();
});

// --- Formulário de contato ---
const form = document.getElementById("formContato");
const avisoForm = document.getElementById("avisoForm");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    mostrarAviso(avisoForm, "Preencha nome, e-mail e mensagem.", "erro");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    mostrarAviso(avisoForm, "Digite um e-mail válido.", "erro");
    return;
  }

  // Site de demonstração: a mensagem não é enviada para nenhum servidor.
  mostrarAviso(avisoForm, `Mensagem registrada. Obrigado, ${nome}! (demonstração)`, "ok");
  form.reset();
});
