document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica del Menú Móvil ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Cerrar menú móvil al hacer clic en un enlace
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // --- Lógica del Cambio de Tema (Claro/Oscuro) ---
  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  const htmlEl = document.documentElement;

  // Función para aplicar el tema
  const applyTheme = (theme) => {
    if (theme === "dark") {
      htmlEl.classList.add("dark");
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      htmlEl.classList.remove("dark");
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  };

  // Al cargar la página, comprobar el tema guardado o el preferido por el sistema
  const storedTheme = localStorage.getItem("theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const initialTheme = storedTheme || preferredTheme;
  applyTheme(initialTheme);
  if (initialTheme === "dark") htmlEl.classList.add("dark");

  themeToggle.addEventListener("click", () => {
    const isDark = htmlEl.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });

  // --- Lógica del Chat de NexiBot ---
  const nexibotButton = document.getElementById("nexibot-button");
  const nexibotChat = document.getElementById("nexibot-chat");
  const closeChatButton = document.getElementById("close-chat-button");

  nexibotButton.addEventListener("click", () => {
    nexibotChat.classList.toggle("hidden");
  });

  closeChatButton.addEventListener("click", () => {
    nexibotChat.classList.add("hidden");
  });
});
