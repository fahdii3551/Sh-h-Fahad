// Smooth scroll functionality
const navLinks = document.querySelectorAll("nav ul li a");

for (const link of navLinks) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Highlight current nav link
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY || window.pageYOffset;
  document.querySelectorAll("section").forEach(section => {
    if (
      section.offsetTop <= scrollPos + 100 &&
      section.offsetTop + section.offsetHeight > scrollPos + 100
    ) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
