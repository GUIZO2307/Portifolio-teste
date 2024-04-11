const botaoMostraProjetos = document.querySelector('.btn-mostra-projetos');

botaoMostraProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
})

function mostrarMaisProjetos() {
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
    projetosInativos.forEach(projeto => {
        projeto.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostraProjetos.classList.add("remover");
}