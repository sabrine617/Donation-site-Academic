// Action du bouton de paiement
document.getElementById("payButton").addEventListener("click", function () {
  // Remplace le lien avec l'URL fournie par le service de paiement
  const paymentUrl = "https://paymee.tn/link-to-payment"; // Lien de paiement Paymee ou autre

  // Redirection vers la page de paiement
  window.open(paymentUrl, "_blank");
});
// Réponse automatique du chatbot
/*function addChatbotReply() {
  const replyElement = document.createElement("p");
  replyElement.textContent = "Je suis un chatbot, comment puis-je vous aider ?";
  chatMessages.appendChild(replyElement);
}*/

// Après avoir envoyé le message de l'utilisateur, afficher une réponse du chatbot
sendMessageButton.addEventListener("click", () => {
  const userMessage = userMessageInput.value.trim();
  if (userMessage) {
    const messageElement = document.createElement("p");
    messageElement.textContent = userMessage;
    chatMessages.appendChild(messageElement);
    userMessageInput.value = ""; // Réinitialiser le champ de texte

    // Ajouter une réponse du chatbot après 1 seconde
    setTimeout(addChatbotReply, 1000);
  }
});
function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
    chatWindow.style.display = "block";
  } else {
    chatWindow.style.display = "none";
  }
}
