document.addEventListener("DOMContentLoaded", function () {
  const colorMenu = document.getElementById("colorMenu");
  const colorBox = document.getElementById("colorBox");
  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const color3 = document.getElementById("color3");

  colorMenu.addEventListener("mouseenter", () => {
    colorBox.classList.remove("hidden");
  });

  colorBox.addEventListener("mouseleave", () => {
    colorBox.classList.add("hidden");
  });

  colorMenu.addEventListener("click", () => {
    colorBox.classList.toggle("hidden");
  });

  color1.addEventListener("click", function () {
    document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
  });

  color2.addEventListener("click", function () {
    document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
  });

  color3.addEventListener("click", function () {
    document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
  });

  const slides = [
    "./images/SlideS1.png",
    "./images/SlideS2.png",
    "./images/SlideS3.png"
  ];

  const captions = [
    "Buzzer",
    "Leds",
    "Sensor ultrassônico"
  ];

  let currentIndex = 0;
  const section2 = document.getElementById("section2");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");

  // Cria a imagem do slide e insere antes da seta direita
  const slideImage = document.createElement("img");
  slideImage.id = "slideImage";
  slideImage.src = slides[currentIndex];
  slideImage.alt = captions[currentIndex];
  slideImage.style.width = "100%";
  slideImage.style.height = "auto";
  section2.insertBefore(slideImage, rightArrow);

  // Cria a legenda e insere logo abaixo da imagem (antes da seta direita)
  const slideCaption = document.createElement("p");
  slideCaption.id = "slideCaption";
  slideCaption.innerText = captions[currentIndex];
  section2.insertBefore(slideCaption, rightArrow);

  function showSlide(index) {
    slideImage.src = slides[index];
    slideImage.alt = captions[index];
    slideCaption.innerText = captions[index];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  leftArrow.addEventListener("click", prevSlide);
  rightArrow.addEventListener("click", nextSlide);
});

// Fazendo botão "Voltar ao Início" funcionar
document.getElementById("volteAoInicio").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



