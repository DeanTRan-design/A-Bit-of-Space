// JavaScript to create random circles animation in BG
(function() {
const background = document.querySelector('.circle-background');

for (let i = 0; i < 6; i++) {
   const circle = document.createElement('div');
   circle.classList.add('circle');

    // Random size, position, and animation delay
    const size = Math.random() * 500 + 4; 
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${Math.random() * 50}vh`;
    circle.style.left = `${Math.random() * 100}vw`;
    circle.style.animationDelay = `${Math.random() * 4}s`;

   background.appendChild(circle);
}})();

// JavaScript for drawer
(function() {
const drawer = document.querySelector('.drawer-overview');
const openButton = drawer.nextElementSibling;
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => drawer.show());
})();

(function() {
const words = ["Let try this breathing technique", "Breathing into your nose 1, 2, 3, 4 and hold", "Breathing out of your nose 1, 2, 3, 4 and hold", "Again", "Breathing into your nose 1, 2, 3, 4 and hold", "Breathing out of your nose 1, 2, 3, 4 and hold", "Well done!", "Don't forget to practice everyday", "Especially when you feel emotionally challenged", "Let's try again"];
let index = 0;
const textElement = document.getElementById("animated-text");

function animateText() {
  textElement.textContent = words[index];
  textElement.classList.add("fade-in");
  
  setTimeout(() => {
    textElement.classList.remove("fade-in");
  }, 1000); 
  
  index = (index + 1) % words.length;
}

setInterval(animateText, 7500); 
})();

// JavaScript for Dialog
(function() {
const dialog = document.querySelector('.dialog-width');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');

openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());
})();

// JavaScript for Chatbox
function sendMessage() {
   const input = document.getElementById("chatInput");
   const chatBody = document.getElementById("chatBody");
 
   if (input.value) {
     const message = document.createElement("p");
     message.className = "message";
     message.innerText = input.value;
     chatBody.appendChild(message);
     input.value = ""; 
     chatBody.scrollTop = chatBody.scrollHeight; 
   }
 }