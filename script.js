document.addEventListener("DOMContentLoaded", () => {
  /*** *******     Mobile Navbar        ****** ***/

  const showMenu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".close-menu");
  const navLinks = document.querySelector(".nav-links");

  showMenu.addEventListener("click", () => {
    navLinks.classList.add("nav-mbl-active");
    showMenu.style.display = "none";
    closeMenu.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("nav-mbl-active");
    showMenu.style.display = "block";
    closeMenu.style.display = "none";
  });

  function hideMobileMenu() {
    navLinks.classList.remove("nav-mbl-active");
    showMenu.style.display = "block";
    closeMenu.style.display = "none";
  }

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A" || event.target.tagName === "BUTTON") {
      hideMobileMenu();
    }
  });
});
