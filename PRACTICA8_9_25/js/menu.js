document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  // Verificamos que existan los elementos
  if (!hamburger || !mobileMenu) {
    console.warn("No se encontró el botón o el menú");
    return;
  }

  // Función para mostrar/ocultar menú
  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    const isOpen = mobileMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  };

  // Click en el botón hamburguesa
  hamburger.addEventListener("click", toggleMenu);

  // Enter/Espacio para accesibilidad
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.focus();
    }
  });

  // Cerrar al hacer click fuera del menú
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("open") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});

