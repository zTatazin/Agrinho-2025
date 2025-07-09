// Botão saibamais receitas

document.querySelectorAll(".receita button").forEach((button) => {
  button.addEventListener("click", () => {
    const receita = button.closest(".receita");
    const paragrafo = receita.querySelector(".paragrafo");

    if (receita.classList.contains("ativa")) {
      paragrafo.style.height = "0";
      paragrafo.style.opacity = "0";
      paragrafo.style.padding = "0 24px";
    } else {
      paragrafo.style.height = "auto";
      paragrafo.style.opacity = "1";
      paragrafo.style.padding = "24px";
    }

    receita.classList.toggle("ativa");
  });
});

// Sistema de reset da aba de acessibilidades

document.getElementById("resetAccessibility").addEventListener("click", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
});