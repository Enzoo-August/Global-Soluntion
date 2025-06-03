document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const mensagemInput = document.getElementById("mensagem");

  function validarEmail(email) {
    const partes = email.split("@");
    if (partes.length !== 2) return false;

    const [usuario, dominio] = partes;
    if (!usuario || !dominio) return false;

    if (!(dominio.endsWith(".com") || dominio.endsWith(".com.br"))) return false;

    if (usuario.includes(" ") || dominio.includes(" ")) return false;

    return true;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (!validarEmail(email)) {
      alert("Por favor, insira um e-mail válido terminando com .com ou .com.br");
      emailInput.focus();
      return;
    }

    if (mensagem.length === 0) {
      alert("Por favor, escreva uma mensagem antes de enviar.");
      mensagemInput.focus();
      return;
    }

    alert("Enviado!");

    form.reset();
  });
});