document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const idade = form.idade.value.trim();
    const genero = form.genero.value;
    const estado = form.estado.value;
    const documento = form.documento.files[0];

    if (!nome || !idade || !genero || !estado || !documento) {
      alert("Por favor, preencha todos os campos e envie o documento.");
      return;
    }

    alert("✅ Formulário enviado com sucesso!");
    form.reset();
  });
});

