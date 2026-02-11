window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(11,17,32,0.95)";
  } else {
    navbar.style.background = "rgba(11,17,32,0.8)";
  }
});
