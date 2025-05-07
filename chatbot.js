const chatbotData = [
  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hello! How can I help you with your wheelchair questions today?"
  },
  {
    keywords: ["manual", "manual wheelchair"],
    answer: "Manual wheelchairs are propelled by the user or caregiver. They are available in lightweight, sport, or heavy-duty designs."
  },
  {
    keywords: ["electric", "power wheelchair"],
    answer: "Power wheelchairs use motors and are controlled with joysticks. They include folding, reclining, and heavy-duty models."
  }
];

function sendMessage() {
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-container");
  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div><strong>You:</strong> ${text}</div>`;

  const response = findAnswer(text);
  chat.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

function findAnswer(input) {
  const lower = input.toLowerCase();
  for (let rule of chatbotData) {
    for (let keyword of rule.keywords) {
      if (lower.includes(keyword)) return rule.answer;
    }
  }
  return "Sorry, I don't understand. Try asking something else!";
}
