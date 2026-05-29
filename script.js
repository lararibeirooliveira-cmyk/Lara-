// Mostrar informação extra
document.getElementById("maisInfo").addEventListener("click", function() {
    const info = document.getElementById("infoExtra");
    info.style.display = info.style.display === "none" ? "block" : "none";
});

// Formulário de contato
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerText = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
    this.reset();
});
