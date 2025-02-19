import Game from './script.js'; // Correct import for the default export from script.js

// Load translations from JSON
const loadTranslations = async () => {
  try {
    const response = await fetch('languages.json');
    const translations = await response.json();
    return translations;
  } catch (error) {
    console.error("Error loading languages:", error);
  }
};

// Update text content based on selected language
const updateLanguage = (lang, translations) => {
  if (translations && translations[lang]) {

    document.querySelector("h1").textContent = translations[lang].title;
    document.querySelector(".between").textContent = translations[lang].between;
    document.querySelector(".btn.again").textContent = translations[lang].again;
    document.querySelector(".number").textContent = translations[lang].number;
    document.querySelector(".guess").setAttribute("placeholder", translations[lang].guessInputPlaceholder);
    document.querySelector(".btn.check").textContent = translations[lang].checkButton;
    document.querySelector(".message").textContent = translations[lang].startGuessing;
    document.querySelector(".label-score").innerHTML = translations[lang].scoreLabel + " <span class='score'>" + this.currentScore + "</span>";
    document.querySelector(".label-highscore").innerHTML = translations[lang].highscoreLabel + " <span class='highscore'>" + this.currentHighScore + "</span>";
    
  }
};

// Detect language selection (when a flag is clicked)
document.querySelectorAll(".flag").forEach(flag => {
  flag.addEventListener("click", async (e) => {
    const lang = e.target.getAttribute("data-lang");
    const translations = await loadTranslations();
    updateLanguage(lang, translations);
  });
});

// Initialize the game when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(); // Create a new instance of the game
});