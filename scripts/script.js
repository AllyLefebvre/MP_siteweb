// Fonction pour envoyer le formulaire
window.addEventListener(
  "load",
  toggleLanguage(localStorage.getItem("language"))
);

document.getElementById("documentDownload").addEventListener("click", downloadDocument);

function downloadDocument() {


  if (localStorage.getItem("language") === 'fr') {
    const fichierUrl = 'pdf/FormulaireC320pour202025.doc'
    const a = document.createElement("a");
    a.href = fichierUrl;
    a.download = "FormulaireC320pour202025.doc"; // Nom du fichier à la sauvegarde
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    const fichierUrl = 'pdf/English20Bal202025.doc'
    const a = document.createElement("a");
    a.href = fichierUrl;
    a.download = "English20Bal202025.doc"; // Nom du fichier à la sauvegarde
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
// Fonction pour changer la langue
function toggleLanguage(lang) {
  console.log(lang)
  if (lang === null) {
    localStorage.setItem("language", 'fr');
  }
  else{
    localStorage.setItem("language", lang);
  }
  

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
      habillement: "Dress Code",
      menu: "Menu",
      formulaire: "Form",
      accomodement: "Accommodation",
      contact: "Contact",
      photo: "Photos",
      francais: "Francais",
      anglais: "English",
      habillement1:
        "The dress code for soldiers from Sgt to Adjuc as well as officers will be Mess Dress 2D. For those who do not have Mess Dress, the attire will be Mess Dress 2B. To view the outfits, please click on the tab below.",
      habillement2:
        "The suggestion for civilians is to wear evening dress (tailcoat, jacket, tie, evening gown, etc.). Unfortunately, we cannot suggest that women wear dresses or adhere to gender stereotypes. For example, a woman may wish to wear a tailcoat instead of a dress as suggested.",
      habillement3:
        "The event includes a cocktail reception, dinner, and dancing. Military balls have many traditions that vary depending on the military branch. If this is your first time, it's wise to familiarize yourself with the traditions and etiquette. Reference: https://www.canada.ca/content/dam/themes/defence/caf/militaryhistory/dhh/popular/coutumes-traditions-forces-canadiennes-ch-1-7.pdf",
      habillement4:
        "Soldier and master corporal: It is strongly recommended to wear the military uniform as shown in the photo, but the choice to wear it with a bow tie (not a tie) is optional.",
      accomodement1:
        "There is accommodation for those who wish to stay in the region. We have added a place that might interest you.",
      accomodement2: "Naval Reserve Point at Carcy.",
      accomodement3:
        "However, you are free to choose your own location if you wish.",
      "1e-service": "Appetizer",
      potage: "SOUP",
      potage2: "Soup of the moment according to the chef’s inspiration",
      plat: "Choice of main courses",
      plat1: "Chicken fillets with grilled orange sauce",
      plat2: "Roast salmon fillet with creamy lobster bisque sauce",
      plat3:
        "Manicotti with butternut squash and ricotta cheese with fresh tomato basil sauce",
      advertise:
        "*All main dishes are served with asparagus, vegetable ratatouille, vegetable puree, and roasted Gabrielle potatoes.",
      "3e-service": "Charcuterie",
      charcuterie1: "Slate of charcuterie and smoked meats chosen by the chef",
      charcuterie2:
        "Example of a charcuterie slate composition: Genoa salami, Lyon rosette, Parma ham, Porchetta, ham, turkey roast",

      "contact-title": "Contact us",
      "contact-message":
        "If you have any questions or would like to discuss anything related to the ball, feel free to contact Yves Dureau at the following address:",
      programme: "Evening Program",
      discours: "📢 Speech",
      "discours-heure": "7:00 PM",
      souper: "🍽️ Dinner",
      "souper-heure": "7:15 PM - 9:00 PM",
      bal: "💃 Ball",
      "bal-heure": "9:00 PM",
      arriver: "🕕 Guest Arrival",
      "arriver-heure": "6:00 PM",
      titleForm: "📄 Download the file to fill out:",
      download: "📥 Download the template",
      fileNotEmpty: "📤 Upload your completed file:",
      chooseFile: "Choose a file",
      noFile: "No file selected",
      cheque: "Don't forget to send your check or money order to our financial service at the address below, made payable to MESS Diner PM.",
      send: "Send"
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
      habillement: "Code Vestimentaire",
      menu: "Menu",
      formulaire: "Formulaire",
      accomodement: "Accommodation",
      contact: "Contact",
      photo: "Photos",
      francais: "Francais",
      anglais: "English",
      habillement1:
        "Pour les militaires du grade de Sergent à Adjudant-chef ainsi que pour les officiers qui possèdent une tenue de mess 2D, nous encourageons le port de celle-ci. Pour ceux qui n'en possèdent pas, la tenue sera la tenue de mess 2B. Veuillez-vous référez aux images ci-dessous pour un visuel.",
      habillement2:
        "La suggestion pour les personnes civiles est de porter la tenue de soirée (Habit, veston, cravate, robe du soir, etc.) Nous ne pouvons malheureusement pas suggérer aux femmes de porter des robes ni d'entrer dans les stéréotypes de genre. Par exemple, une femme voulant porter un habit au lieu d'une robe tel que suggéré.",
      habillement3:
        "L'événement comprend une réception cocktail, un dîner et de la danse. Les bals militaires ont de nombreuses traditions qui varient selon la branche militaire. Si c'est votre première fois, il est sage de vous familiariser avec les traditions et l'étiquette. Référence: https://www.canada.ca/content/dam/themes/defence/caf/militaryhistory/dhh/popular/coutumes-traditions-forces-canadiennes-ch-1-7.pdf",
      habillement4:
        "Pour les militaires du grade de Soldat à Caporal-chef : Il est fortement recommandé de porter l'uniforme militaire tel que montré sur l'image, mais le choix de le porter avec un nœud papillon, et non une cravate, reste libre.",
      accomodement1:
        "Il y a de l’accomodation pour ceux qui désirent rester dans la région. Nous avons ajouté un endroit qui pourrait vous intéresser.",
      accomodement2: "Réserve Navale Point à Carcy.",
      accomodement3:
        "Cependant, vous êtes libres de choisir votre propre endroit, si vous le désirez.",
      "1e-service": "Entrée",
      potage: "Potage",
      potage2: "Velouté du moment selon l’inspiration du chef",
      plat: "Plats principaux au choix",
      plat1: "Aiguillettes de poulet à la sauce à l’orange grillée",
      plat2: "Pavé de saumon rôti, sauce crémeuse à la bisque de homard",
      plat3:
        "Manicotti à la courge musquée et au fromage ricotta avec une sauce tomate fraîche au basilic",
      advertise:
        "*Tous les plats principaux sont servis avec des asperges, une ratatouille de légumes, une purée de légumes et des pommes de terre Gabrielle rôties.",
      "3e-service": "Charcuterie",
      charcuterie1:
        "Ardoise de charcuteries et de viandes fumées au choix du chef",
      charcuterie2:
        "Exemple d’une composition d’ardoise de charcuteries : Salami de Gênes, rosette de Lyon, jambon de Parme, Porchetta, jambon, rôti de dinde",
      "contact-title": "Contactez-nous",
      "contact-message":
        "Si vous avez des questions ou si vous souhaitez discuter de tout autre sujet lié au bal, n'hésitez pas à contacter Yves Dureau à l'adresse suivante:",
      programme: "Programme de la Soirée",
      discours: "📢 Discours",
      "discours-heure": "19h00",
      souper: "🍽️ Souper",
      "souper-heure": "19h15 - 21h00",
      bal: "💃 Bal",
      "bal-heure": "21h00",
      arriver: "🕕 Arrivée des invités",
      "arriver-heure": "18h00",
      titleForm: "📄 Téléchargez le fichier à remplir :",
      download: "📥 Télécharger le modèle",
      fileNotEmpty: "📤 Déposez votre fichier rempli :",
      chooseFile: "Choisir un fichier",
      noFile: "Aucun fichier sélectionné",
      cheque: "N’oubliez pas d’envoyer votre chèque ou mandat poste a notre service financier, a l’adresse ci- dessous, au nom de MESS Diner PM",
      send: "Envoyer"
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
