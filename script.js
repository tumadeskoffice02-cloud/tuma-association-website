const translations = {
  en: {
    home: "Home",
    about: "About",
    activities: "Activities",
    events: "Events",
    membership: "Membership",
    contact: "Contact Us",
    discover: "Discover TUMA",
    explore: "Explore Our Activities",
    headline: "One association. Many possibilities.",
    description: "The United Minds Association brings people together through education, service, teamwork and purposeful community activities.",
    who: "Who We Are",
    unity: "Unity",
    education: "Education",
    service: "Service",
    progress: "Progress"
  },
  ha: {
    home: "Gida",
    about: "Game da Mu",
    activities: "Ayyuka",
    events: "Shirye-shirye",
    membership: "Mambobi",
    contact: "Tuntuɓe Mu",
    discover: "Gano TUMA",
    explore: "Duba Ayyukanmu",
    headline: "Ƙungiya ɗaya. Damammaki da dama.",
    description: "Ƙungiyar The United Minds Association tana haɗa mutane ta hanyar ilimi, hidima, haɗin kai da ayyukan al'umma masu amfani.",
    who: "Su Wane Ne Mu?",
    unity: "Haɗin Kai",
    education: "Ilimi",
    service: "Hidima",
    progress: "Ci Gaba"
  }
};

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-translate]").forEach(element => {
    const key = element.dataset.translate;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  localStorage.setItem("tuma-language", language);
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("tuma-language") || "en");
});￼Enter
