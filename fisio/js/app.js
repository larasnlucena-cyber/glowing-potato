document.addEventListener("DOMContentLoaded", () => {

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  // CADASTRO
  const cadastroForm = document.getElementById("cadastroForm");
  if (cadastroForm) {
    cadastroForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html";
    });
  }

});