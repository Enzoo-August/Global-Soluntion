document.addEventListener("DOMContentLoaded", function () {
  const colorMenu = document.getElementById("colorMenu");
  const colorBox = document.getElementById("colorBox");

  // Mostrar colorBox ao passar o mouse
  colorMenu.addEventListener("mouseenter", function () {
    colorBox.classList.remove("hidden");
  });

  // Esconder colorBox ao sair do mouse
  colorBox.addEventListener("mouseleave", function () {
    colorBox.classList.add("hidden");
  });

  // Alternar colorBox ao clicar
  colorMenu.addEventListener("click", function () {
    colorBox.classList.toggle("hidden");
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
const navLinks = document.querySelectorAll("nav a, nav button, nav li");
navLinks.forEach(function(link) {
  link.style.cursor = "pointer";
});
