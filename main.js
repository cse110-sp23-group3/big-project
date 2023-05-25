window.addEventListener('DOMContentLoaded', init());

function init() {
  initFormHandler();
}

function initFormHandler() {
  const messageForm = document.getElementById('message-form');
  messageForm.addEventListener('submit', function() {
    let messageText = document.getElementById('message').value;
    const messageHolder = document.createElement('article');
    const messageInnerText = document.createElement('p');
    const chatHistory = document.querySelector('.chat-history');
    if (messageText !== '') {
      messageInnerText.innerText = messageText;
      messageHolder.appendChild(messageInnerText);
      chatHistory.appendChild(messageHolder);
    }
  });
}

