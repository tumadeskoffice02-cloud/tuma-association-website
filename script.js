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
// TUMA Association - Supabase Connection
const SUPABASE_URL = "https://hhmegtbfgyjbsiuwozpq.supabase.co";
const SUPABASE_KEY = "sb_publishable_dTyN0hMfFisKrO965XCN1g_ARyIKyCX";

const tumaSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// TUMA Membership Application
const membershipForm = document.getElementById("membershipForm");

if (membershipForm) {
  membershipForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const message = document.getElementById("formMessage");

    const application = {
      full_name: document.getElementById("fullName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim() || null,
      position: document.getElementById("position").value
    };

    message.textContent = "Submitting your application...";

    try {
      const { error } = await tumaSupabase
        .from("applications")
        .insert([application]);

      if (error) {
        throw error;
      }

      message.textContent =
        "Your TUMA membership application was submitted successfully!";

      membershipForm.reset();
    } catch (error) {
      console.error("TUMA application error:", error);
      message.textContent =
        "Submission failed. Please check your connection and try again.";
    }
  });
}
