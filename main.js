// ======== SCROLL EFFECT FOR BACKGROUND & HEADER ========
window.addEventListener("scroll", () => {
  const body = document.body;
  const header = document.querySelector("header");

  if (window.scrollY > 100) {
    body.classList.add("scrolled");
    header.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
    header.classList.remove("scrolled");
  }
});


// ======== ACTIVE LINK HIGHLIGHT ON SCROLL ========
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// ======== THEME TOGGLE (DARK / LIGHT MODE) ========
const toggle = document.getElementById("theme-toggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});


// ======== SMOOTH SCROLL FOR NAVIGATION LINKS ========
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});


// ======== BACK TO TOP BUTTON ========
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

