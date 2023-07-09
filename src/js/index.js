const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => { 
    personagem.addEventListener('mouseenter', () => { 

        if(window.innerWidth < 450) { window.scrollTo({top: 0, behavior: 'smooth'}); }
        
        removerSelecaoDePersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarPersonagemSelecionado(personagem);

        alterarDescricaoDePersonagem(personagem);


    })

})

function alterarDescricaoDePersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDePersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

