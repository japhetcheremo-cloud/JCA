console.log("POWERFUL PORTFOLIO LOADED");

/* MENU */
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* TYPING */
const typing = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "Creative Designer",
  "JavaScript Expert",
  "UI Engineer",
  "Future Tech Founder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

  const current = words[wordIndex];

  if (!deleting) {

    typing.textContent =
      current.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }

  } else {

    typing.textContent =
      current.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(type, deleting ? 60 : 120);
}

type();

/* LOADER */
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1200);
});

/* SCROLL BAR */
window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  document.getElementById("progressBar")
    .style.width = progress + "%";
});

/* ACTIVE NAV */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
});

/* SMOOTH REVEAL */
const revealElements =
document.querySelectorAll(
  ".project-card, .skill-card, .contact-card"
);

window.addEventListener("scroll", reveal);

function reveal(){

  const trigger =
    window.innerHeight / 1.2;

  revealElements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if(top < trigger){
      el.classList.add("show");
    }
  });
}

reveal();