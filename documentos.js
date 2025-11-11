document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("docForm");
  const lista = document.getElementById("listaDocumentos");
  const ul = document.getElementById("documentosSalvos");
  const limparBtn = document.getElementById("limparLista");

  let documentos = JSON.parse(localStorage.getItem("documentos")) || [];
  atualizarLista();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nomeArquivo").value.trim();
    const arquivo = document.getElementById("arquivo").files[0];

    if (!nome || !arquivo) {
      alert("Por favor, preencha o nome e selecione um arquivo.");
      return;
    }

    const doc = {
      nome: nome,
      arquivo: arquivo.name,
      data: new Date().toLocaleString("pt-BR")
    };

    documentos.push(doc);
    localStorage.setItem("documentos", JSON.stringify(documentos));

    form.reset();
    atualizarLista();
  });

  function atualizarLista() {
    ul.innerHTML = "";

    if (documentos.length === 0) {
      lista.style.display = "none";
      return;
    }

    lista.style.display = "block";

    documentos.forEach((doc, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${doc.nome} — <small>${doc.arquivo}</small> <br><small>${doc.data}</small></span>
        <button class="excluir" data-index="${index}">Excluir</button>
      `;
      ul.appendChild(li);
    });

    document.querySelectorAll(".excluir").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = e.target.dataset.index;
        documentos.splice(i, 1);
        localStorage.setItem("documentos", JSON.stringify(documentos));
        atualizarLista();
      });
    });
  }

  limparBtn.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja limpar todos os registros?")) {
      localStorage.removeItem("documentos");
      documentos = [];
      atualizarLista();
    }
  });
});

