document.addEventListener("DOMContentLoaded", () => {
  /*** *******     Mobile Navbar        ****** ***/

  const showMenu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".close-menu");
  const navLinks = document.querySelector(".nav-links");

  function showMobileMenu() {
    navLinks.classList.add("nav-mbl-active");
    showMenu.style.display = "none";
    closeMenu.style.display = "block";
  }

  function hideMobileMenu() {
    navLinks.classList.remove("nav-mbl-active");
    showMenu.style.display = "block";
    closeMenu.style.display = "none";
  }

  closeMenu.addEventListener("click", hideMobileMenu);
  showMenu.addEventListener("click", showMobileMenu);

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A" || event.target.tagName === "BUTTON") {
      hideMobileMenu();
    }
  });
});
