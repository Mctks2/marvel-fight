const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    // Obtém o ID do personagem selecionado
    const idSelecionado = personagem.attributes.id.value;

    
    if (idSelecionado === "ultron") return;

    atualizarJogador1(idSelecionado, personagem);

    atualizarSelecaoPersonagem(personagem);
    
  });
});

// Atualiza a imagem e o nome do jogador 1 com base no personagem selecionado
function atualizarJogador1(idSelecionado, personagem){
    const nomeSelecionado = personagem.getAttribute("data-name");

    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const personagemJogador1 = document.querySelector(".personagem-grande.personagem-jogador-1");
    // Atualiza o texto do primeiro <h2> dentro de personagemJogador1 com o nome selecionado
    personagemJogador1.getElementsByTagName("h2")[0].innerHTML = nomeSelecionado;
}

// Atualiza a seleção viusal do personagem selecionado
function atualizarSelecaoPersonagem(personagem){
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
    personagem.classList.add("selecionado");
}
