// Fonction pour envoyer le formulaire
document
  .querySelector(".form-container")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.init("8PvYDU8X1AOHUMZK9");

    // Désactivation du bouton de soumission pour éviter plusieurs envois
    const submitButton = document.querySelector("button");
    submitButton.disabled = true;
    submitButton.innerText = "Envoi en cours...";

    // Récupérer les données du formulaire
    var formData = {
      nom: document.getElementById("nom").value,
      allergie: document.getElementById("allergie").value,
      vegetarien: document.getElementById("vegetarien").value,
      // Récupérer les cases à cocher sélectionnées
      air: document.getElementById("air").checked ? "Air" : "",
      mer: document.getElementById("mer").checked ? "Mer" : "",
      terre: document.getElementById("terre").checked ? "Terre" : "",
      cd: document.getElementById("cd").checked ? "CD" : "",
      mmm: document.getElementById("mmm").checked ? "MMM" : "",
      autre: document.getElementById("autre").value || "", // Si "Autre" est renseigné, récupérer sa valeur
      member: document.getElementById("member").checked ? "Oui" : "Non",
    };

    // Filtrer les valeurs vides des cases à cocher
    formData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );

    // Envoi de l'email via EmailJS
    emailjs.send("service_29wrzro", "template_bic9v5k", formData).then(
      function (response) {
        // Réactivation du bouton et message de succès
        submitButton.disabled = false;
        submitButton.innerText = "S'inscrire";
        alert("Inscription réussie!");
        document.querySelector(".form-container").reset();
      },
      function (error) {
        // Réactivation du bouton et message d'erreur
        console.log(error);
        submitButton.disabled = false;
        submitButton.innerText = "S'inscrire";
        alert("Erreur lors de l'inscription. Veuillez réessayer.");
      }
    );
  });

// script.js



// Fonction pour changer la langue
function toggleLanguage(lang) {

  // Traductions
  const translations = {
    en: {
      "title": "2nd Edition of the 5th Regiment Military Police Ball 2025",
      "intro":
        "You are cordially invited to the 2nd Edition of the 5th Military Police Regiment Ball 2025, which will take place on May 23, 2025, at the Manoir Montmorency, located at 2490 Ave Royale, Quebec City, Quebec G1C 1S1. This ball is in the finest military tradition.",
      "origin": "The origin of military balls dates back to 1895. During a military ball, participants would honor prisoners of war and soldiers missing in action. It was also important that they raised toasts to military leaders and respected traditional military customs.",
      "joke": "But don't worry, there will be no prisoners of war at the event.",
      "include": "The event includes a cocktail, dinner, and dance party. Military balls have many traditions that vary depending on the military branches. If this is your first time attending, it is wise to familiarize yourself with the traditions and etiquette in place."
    },

    fr: {
      "title": "2e Édition du Bal du 5e Régiment de la Police Militaire 2025",
      "intro":
        "Vous êtes cordialement invité à la 2e Édition du bal du 5e Régiment de la Police Militaire 2025, qui aura lieu le 23 mai 2025 au Manoir Montmorency, situé au 2490 Ave Royale, Québec City, Québec G1C 1S1. Ce bal se déroule dans la plus pure tradition militaire.",
      "origin": "L’origine des bals militaires remonte à 1895. Lors d'un bal militaire, les participants honoraient les prisonniers de guerre et les soldats portés disparus au combat. Il était également important qu'ils portent des toasts aux chefs militaires et qu'ils respectent les coutumes militaires traditionnelles.",
      "joke": "Mais ne vous en faites pas, il n’y aura pas de prisonniers de guerre lors de la soirée.",
      "include": "L'événement comprend un cocktail, un dîner et une soirée dansante. Les bals militaires ont de nombreuses traditions qui varient selon les branches militaires. Si c'est la première fois que vous y assistez, il est donc judicieux de vous familiariser avec les traditions et l'étiquette en vigueur."
    },
  };
  // Alterner entre les langues
  currentLang = lang;

  // Mettre à jour tous les éléments avec un attribut data-key
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}
