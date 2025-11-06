// Smooth scroll effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple text fade-in animation
window.addEventListener("load", () => {
  document.querySelector(".hero h2").style.opacity = 1;
  document.querySelector(".hero p").style.opacity = 1;
});