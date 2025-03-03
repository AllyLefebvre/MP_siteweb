// Fonction pour envoyer le formulaire
window.addEventListener(
  "load",
  toggleLanguage(localStorage.getItem("language"))
);

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

// Fonction pour changer la langue
function toggleLanguage(lang) {
  localStorage.setItem("language", lang);

  // Traductions
  const translations = {
    en: {
      title: "2nd Edition of the 5th Regiment Military Police Ball 2025",
      intro:
        "You are cordially invited to the 2nd Edition of the 5th Military Police Regiment Ball 2025, which will take place on May 23, 2025, at the Manoir Montmorency, located at 2490 Ave Royale, Quebec City, Quebec G1C 1S1. This ball is in the finest military tradition.",
      origin:
        "The origin of military balls dates back to 1895. During a military ball, participants would honor prisoners of war and soldiers missing in action. It was also important that they raised toasts to military leaders and respected traditional military customs.",
      joke: "But don't worry, there will be no prisoners of war at the event.",
      include:
        "The event includes a cocktail, dinner, and dance party. Military balls have many traditions that vary depending on the military branches. If this is your first time attending, it is wise to familiarize yourself with the traditions and etiquette in place.",
      accueil: "Home",
      habillement: "Clothing",
      menu: "Menu",
      formulaire: "Form",
      accomodement: "Accommodation",
      contact: "Contact",
      francais: "French",
      anglais: "English",
      habillement1:
        "The dress code for soldiers from Sgt to Adjuc as well as officers will be Mess Dress 2D. For those who do not have Mess Dress, the attire will be Mess Dress 2B. To view the outfits, please click on the tab below.",
      habillement2:
        "The suggestion for civilians is to wear a tie and suit for men and a cocktail dress for women.",
      habillement3:
        "The event includes a cocktail reception, dinner, and dancing. Military balls have many traditions that vary by military branch. If this is your first time attending, it is wise to familiarize yourself with the traditions and etiquette.",
      accomodement1:
        "There is accommodation for those who wish to stay in the region. We have added a place that might interest you.",
      accomodement2: "Naval Reserve Point at Carcy.",
      accomodement3:
        "However, it is your choice to choose your own place if you wish.",
      "1e-service": "1st Service",
      potage: "SOUP",
      potage2: "Soup of the moment according to the chef’s inspiration",
      plat: "Main Courses",
      plat1: "Chicken fillets with grilled orange sauce",
      plat2: "Roast salmon fillet with creamy lobster bisque sauce",
      plat3:
        "Manicotti with butternut squash and ricotta cheese with fresh tomato basil sauce",
      advertise:
        "*All main dishes are served with asparagus, vegetable ratatouille, vegetable puree, and roasted Gabrielle potatoes.",
      "3e-service": "Master Charcutier",
      charcuterie1: "Slate of charcuterie and smoked meats chosen by the chef",
      charcuterie2:
        "Example of a charcuterie slate composition: Genoa salami, Lyon rosette, Parma ham, Porchetta, ham, turkey roast",

      "contact-title": "Contact us",
      "contact-message": "If you have any questions or would like to discuss anything related to the ball, feel free to contact Yves Dureau at the following address:",
    },

    fr: {
      title: "2e Édition du Bal du 5e Régiment de la Police Militaire 2025",
      intro:
        "Vous êtes cordialement invité à la 2e Édition du bal du 5e Régiment de la Police Militaire 2025, qui aura lieu le 23 mai 2025 au Manoir Montmorency, situé au 2490 Ave Royale, Québec City, Québec G1C 1S1. Ce bal se déroule dans la plus pure tradition militaire.",
      origin:
        "L’origine des bals militaires remonte à 1895. Lors d'un bal militaire, les participants honoraient les prisonniers de guerre et les soldats portés disparus au combat. Il était également important qu'ils portent des toasts aux chefs militaires et qu'ils respectent les coutumes militaires traditionnelles.",
      joke: "Mais ne vous en faites pas, il n’y aura pas de prisonniers de guerre lors de la soirée.",
      include:
        "L'événement comprend un cocktail, un dîner et une soirée dansante. Les bals militaires ont de nombreuses traditions qui varient selon les branches militaires. Si c'est la première fois que vous y assistez, il est donc judicieux de vous familiariser avec les traditions et l'étiquette en vigueur.",
      accueil: "Accueil",
      habillement: "Habillement",
      menu: "Menu",
      formulaire: "Formulaire",
      accomodement: "Accomodement",
      contact: "Contact",
      francais: "Francais",
      anglais: "Anglais",
      habillement1:
        "L’habillement consistera pour les militaires de Sgt à Adjuc ainsi que les officiers à la tenue de Mess 2D. Pour ceux qui n'ont pas de tenue de mess, la tenue sera tenue de mess 2B. Afin de voir les tenues, veuillez cliquer sur l’onglet ci-dessous.",
      habillement2:
        "La suggestion pour les personnes civiles est de porter une tenue avec cravate pour les hommes et une robe de cocktail pour les femmes.",
      habillement3:
        "L'événement comprend une réception cocktail, un dîner et de la danse. Les bals militaires ont de nombreuses traditions qui varient selon la branche militaire. Si c'est votre première fois, il est sage de vous familiariser avec les traditions et l'étiquette.",
      accomodement1:
        "Il y a de l’accomodation pour ceux qui désirent rester dans la région. Nous avons ajouté un endroit qui pourrait vous intéresser.",
      accomodement2: "Réserve Navale Point à Carcy.",
      accomodement3:
        "Cependant, il est de votre choix de choisir votre propre endroit, si vous le désirez.",
      "1e-service": "1er Service",
      potage: "POTAGE",
      potage2: "Velouté du moment selon l’inspiration du chef",
      plat: "Plats Principaux",
      plat1: "Aiguillettes de poulet à la sauce à l’orange grillée",
      plat2: "Pavé de saumon rôti, sauce crémeuse à la bisque de homard",
      plat3:
        "Manicotti à la courge musquée et au fromage ricotta avec une sauce tomate fraîche au basilic",
      advertise:
        "*Tous les plats principaux sont servis avec des asperges, une ratatouille de légumes, une purée de légumes et des pommes de terre Gabrielle rôties.",
      "3e-service": "Maître Charcutier",
      charcuterie1:
        "Ardoise de charcuteries et de viandes fumées au choix du chef",
      charcuterie2:
        "Exemple d’une composition d’ardoise de charcuteries : Salami de Gênes, rosette de Lyon, jambon de Parme, Porchetta, jambon, rôti de dinde",
      "contact-title": "Contactez-nous",
      "contact-message": "Si vous avez des questions ou si vous souhaitez discuter de tout autre sujet lié au bal, n'hésitez pas à contacter Yves Dureau à l'adresse suivante:",
    },
  };
  // Alterner entre les langues
  currentLang = localStorage.getItem("language") || "fr";

  // Mettre à jour tous les éléments avec un attribut data-key
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}
