document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Valider les champs de paiement
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const donationAmount = document
      .getElementById("donationAmount")
      .value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (
      !fullName ||
      !email ||
      !phone ||
      !donationAmount ||
      !cardNumber ||
      !expiryDate ||
      !cvv
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification du montant du don
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Veuillez entrer un montant de don valide.");
      return;
    }

    // Validation avancée des champs de carte
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      alert("Veuillez entrer un numéro de carte valide.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      alert("Veuillez entrer une date d'expiration valide (MM/YY).");
      return;
    }

    if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
      alert("Veuillez entrer un CVV valide.");
      return;
    }

    // Confirmation de paiement
    if (confirm(`Confirmez-vous votre don de ${donationAmount} TND ?`)) {
      alert("Paiement réussi ! Merci pour votre don.");
      // Redirection vers une page de confirmation ou plateforme de paiement
      window.location.href =
        "https://votre-plateforme-paiement.com/confirmation";
    }
  });
