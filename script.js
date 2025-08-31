// Seleciona o botão
const btn = document.getElementById('acessibilidadeBtn');

// Adiciona evento de clique
btn.addEventListener('click', () => {
    // Alterna a classe no body
    document.body.classList.toggle('acessibilidade-ativa');
});
