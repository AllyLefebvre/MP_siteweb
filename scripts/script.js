// Fonction pour envoyer le formulaire
document.querySelector(".form-container").addEventListener("submit", function(event) {
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
        member: document.getElementById("member").checked ? "Oui" : "Non"
    };

    // Filtrer les valeurs vides des cases à cocher
    formData = Object.fromEntries(Object.entries(formData).filter(([key, value]) => value !== ""));

    // Envoi de l'email via EmailJS
    emailjs.send("service_29wrzro", "template_bic9v5k", formData)
        .then(function(response) {
            // Réactivation du bouton et message de succès
            submitButton.disabled = false;
            submitButton.innerText = "S'inscrire";
            alert("Inscription réussie!");
            document.querySelector(".form-container").reset();
        }, function(error) {
            // Réactivation du bouton et message d'erreur
            console.log(error)
            submitButton.disabled = false;
            submitButton.innerText = "S'inscrire";
            alert("Erreur lors de l'inscription. Veuillez réessayer.");
        });
});
