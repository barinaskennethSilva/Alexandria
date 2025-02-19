document.addEventListener('DOMContentLoaded', function () {
const sendBtn = document.getElementById('send-btn');
const textInput = document.getElementById('text-input');
const containerText = document.getElementById('container-text');

function sendMessage(){
  const message = textInput.value.trim();
    
let smsSave = JSON.parse(localStorage.getItem('smsData')) || [];             
      smsSave.push(message);      
  localStorage.setItem('smsData',JSON.stringify(smsSave));    
  if(message !== ''){
 
    const smsText = document.createElement('div');
    smsText.classList.add('userInput');
smsText.textContent = message;
containerText.appendChild(smsText);
containerText.scrollTop = containerText.scrollHeight;
textInput.value = '';
document.getElementById('Info-Data').style.display = "none";
containerText.style.display = "block"
  }
}

sendBtn.addEventListener('click',sendMessage);
});

