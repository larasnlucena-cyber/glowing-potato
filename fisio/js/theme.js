document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("darkToggle");

  // aplica tema salvo em TODAS as páginas
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    if (toggle) toggle.checked = true;
  }

  // alternar tema (só se existir switch)
  if (toggle) {
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  }
});