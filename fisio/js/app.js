const translations = {
  pt: {
    // Sidebar
    "nav-dash": "Dashboard",
    "nav-clients": "Clientes",
    "nav-pro": "Profissionais",
    "nav-agenda": "Agendamentos",
    "nav-check": "Check-in",
    "nav-medical": "Prontuários",
    "nav-fin": "Mensalidades",
    "nav-reports": "Relatórios",
    "nav-config": "Configurações",
    // Configurações
    "txt-config-title": "Preferências do Sistema",
    "txt-dark-label": "Modo Escuro",
    "txt-lang-label": "Idioma do Sistema",
    "btn-save-config": "Salvar Alterações",
    // Relatórios
    "txt-reports-title": "Central de Inteligência",
    "btn-generate": "Gerar Relatório"
  },
  en: {
    // Sidebar
    "nav-dash": "Dashboard",
    "nav-clients": "Clients",
    "nav-pro": "Professionals",
    "nav-agenda": "Schedules",
    "nav-check": "Check-in",
    "nav-medical": "Medical Records",
    "nav-fin": "Billing",
    "nav-reports": "Reports",
    "nav-config": "Settings",
    // Settings
    "txt-config-title": "System Preferences",
    "txt-dark-label": "Dark Mode",
    "txt-lang-label": "System Language",
    "btn-save-config": "Save Changes",
    // Reports
    "txt-reports-title": "Intelligence Center",
    "btn-generate": "Generate Report"
  },
  es: {
    // Sidebar
    "nav-dash": "Panel",
    "nav-clients": "Clientes",
    "nav-pro": "Profesionales",
    "nav-agenda": "Agendas",
    "nav-check": "Check-in",
    "nav-medical": "Historiales",
    "nav-fin": "Mensualidades",
    "nav-reports": "Informes",
    "nav-config": "Ajustes",
    // Ajustes
    "txt-config-title": "Preferencias del Sistema",
    "txt-dark-label": "Modo Oscuro",
    "txt-lang-label": "Idioma del Sistema",
    "btn-save-config": "Guardar Cambios",
    // Informes
    "txt-reports-title": "Centro de Inteligencia",
    "btn-generate": "Generar Informe"
  }
};

function applyLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
  
  Object.keys(translations[lang]).forEach(id => {
    const elements = document.querySelectorAll(`#${id}`);
    elements.forEach(el => {
      if (el.tagName === "INPUT" && el.type !== "checkbox") {
        el.placeholder = translations[lang][id];
      } else {
        el.innerText = translations[lang][id];
      }
    });
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'pt';
  const langSelect = document.getElementById('language-select');
  
  if (langSelect) {
    langSelect.value = savedLang;
  }
  
  applyLanguage(savedLang);

  // Lógica de Dark Mode (Persistente)
  const darkToggle = document.getElementById('darkToggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if (darkToggle) darkToggle.checked = true;
  }

  if (darkToggle) {
    darkToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  }
});