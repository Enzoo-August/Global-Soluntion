document.addEventListener("DOMContentLoaded", function () {
  const colorMenu = document.getElementById("colorMenu");
  const colorBox = document.getElementById("colorBox");

  // Mostrar ou esconder colorBox ao passar o mouse
  colorMenu.addEventListener("mouseenter", function () {
    colorBox.classList.remove("hidden");
  });

  // Esconde o colorBox quando o mouse sai dele
  colorBox.addEventListener("mouseleave", function () {
    colorBox.classList.add("hidden");
  });

  // Altera o fundo com getElementById
  document.getElementById("color1").addEventListener("click", function () {
    document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
  });

  document.getElementById("color2").addEventListener("click", function () {
    document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
  });

  document.getElementById("color3").addEventListener("click", function () {
    document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
  });
});
