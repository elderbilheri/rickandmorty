const tabela = document.getElementById("tabela");

function novaLinha(personagem) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdEsp = document.createElement("td");
  tdSex = document.createElement("td");
  tdImg = document.createElement("td");

  inputBtn = document.createElement("input");
  inputBtn.setAttribute("type", "button");
  inputBtn.setAttribute("value", "Visualizar");

  inputBtn.addEventListener("click", () => {
    let secModal = document.querySelector(".modal-container");
    secModal.classList.toggle("modal-hide");

    let spanID = document.getElementById("id-modal");
    let spanNome = document.getElementById("nome-modal");
    let spanEspecie = document.getElementById("especie-modal");
    let spanSexo = document.getElementById("sexo-modal");
    let imgPersonagem = document.getElementById("img-personagem");

    spanID.innerText = personagem.id;
    spanNome.innerText = personagem.name;
    spanEspecie.innerText = personagem.species;
    spanSexo.innerText = personagem.gender;
    imgPersonagem.src = personagem.image;
  });

  img = document.createElement("img");

  tdId.innerText = personagem.id;
  tdNome.innerText = personagem.name;
  tdEsp.innerText = personagem.species;
  tdSex.innerText = personagem.gender;
  img.src = personagem.image;

  inputBtn.appendChild(img);
  tdImg.appendChild(inputBtn);

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  linha.appendChild(tdEsp);
  linha.appendChild(tdSex);
  linha.appendChild(tdImg);

  // Função Fechar Modal

  const fecharBotao = document.querySelector("#fechar");

  fecharBotao.addEventListener("click", () => {
    let modalFechar = document.querySelector(".modal-container");
    modalFechar.classList.add("modal-hide");
  });

  // Função Imprimir Modal

  const impressao = document.getElementById("imprimir");

  impressao.addEventListener("click", () => {
    const modalPrint = document.querySelector(".modal-container").innerHTML;
    tela_impressao = window.open("about:blank");
    tela_impressao.document.write(modalPrint);
    tela_impressao.window.print();
    tela_impressao.window.close();
  });

  return linha;
}

function buscarDados() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((body) => {
      const personagens = body.results;

      personagens.forEach((element) => {
        let linha = novaLinha(element);
        tabela.appendChild(linha);
      });
    });
}

buscarDados();
