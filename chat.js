// Définir le nom de l'utilisateur
const userName = "Madame/Mr";

// Paires de mots-clés et réponses
const pairs = [
  {
    pattern: /(.*)(bonjour|salut|coucou|hello|bonsoir)(.*)/i,
    responses: [
      `Bonjour ${userName}! Comment puis-je vous aider aujourd'hui ?`,
    ],
  },
  {
    pattern: /(.*)(donation|donner|don)(.*)/i,
    responses: [
      `Merci pour votre générosité, ${userName}! Voici le lien pour faire une donation : <a  href="index3.html">Donate</a>`,
    ],
  },
  {
    pattern: /(.*)(paiement|payer|moyens de paiement)(.*)/i,
    responses: [
      "Nous acceptons les paiements par carte bancaire, PayPal, et virement bancaire, disponible sur notre site.",
    ],
  },
  {
    pattern: /(.*)(argent|utilisation|projet|le devenir de mon don)(.*)/i,
    responses: [
      "Votre argent finance des initiatives humanitaires pour aider les victimes de la guerre morbide.",
    ],
  },
  {
    pattern: /(.*)(suivi|don)(.*)/i,
    responses: [
      `Vous pouvez suivre vos dons sur votre espace personnel, ${userName}.  Voici le lien pour faire le:<a href="site4.html">suivi</a>`,
    ],
  },
  {
    pattern: /(.*)(recu|facture)(.*)/i,
    responses: [
      "Un reçu fiscal est envoyé automatiquement à votre email après la donation.",
    ],
  },
  {
    pattern: /(.*)(probleme|aide|support)(.*)/i,
    responses: [
      "Je suis là pour vous aider. Pouvez-vous me donner plus de détails sur le problème rencontré ?",
    ],
  },
  {
    pattern: /(.*)(annuler|remboursement)(.*)/i,
    responses: [
      "Les donations ne sont généralement pas remboursables. Contactez notre support pour plus d'informations.",
    ],
  },
  {
    pattern: /(.*)(au revoir|bye|merci)(.*)/i,
    responses: [
      `Merci pour votre visite ${userName}! À bientôt sur notre plateforme.`,
    ],
  },
  {
    pattern: /(.*)/i,
    responses: [
      "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ou donner plus de détails ?",
    ],
  },
];

// Fonction pour obtenir une réponse du chatbot
function getChatbotResponse(userMessage) {
  for (const pair of pairs) {
    if (pair.pattern.test(userMessage)) {
      const responses = pair.responses;
      return responses[0];
    }
  }
}

// Bouton flottant et fenêtre de chat
const chatbotButton = document.getElementById("chatbot-button");
const chatbotWindow = document.getElementById("chatbot-window");
const closeButton = document.getElementById("close-chatbot");

// Messages et input utilisateur
const messagesContainer = document.getElementById("chatbot-messages");
const userInput = document.getElementById("user-input");
const sendMessageButton = document.getElementById("send-message");

// Toggle de la fenêtre de chat
chatbotButton.addEventListener("click", () => {
  chatbotWindow.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  chatbotWindow.classList.add("hidden");
});

// Ajouter un message dans l'interface
function addMessage(message, sender = "user") {
  const messagesContainer = document.getElementById("chatbot-messages");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.innerHTML = message; // Utiliser innerHTML pour afficher du HTML
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
// Envoyer le message avec la touche "Entrée"
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessageButton.click();
  }
});
// Envoi des messages
sendMessageButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  console.log("User message:", userMessage); // Vérifier si le message est capturé
  if (userMessage) {
    addMessage(userMessage, "user");
    const botResponse = getChatbotResponse(userMessage.toLowerCase());
    console.log("Bot response:", botResponse); // Vérifier si une réponse est générée
    setTimeout(() => addMessage(botResponse, "bot"), 500);
    userInput.value = "";
  }
});
