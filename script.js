// Hamburger menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
};

// Scroll animation
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

// Theme toggle (basic)
const themeToggle = document.getElementById("themeToggle");
let dark = true;

themeToggle.onclick = () => {
  document.body.style.background = dark ? "#fff" : "#000";
  document.body.style.color = dark ? "#000" : "#fff";
  dark = !dark;
};
