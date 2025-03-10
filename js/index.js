document.addEventListener('DOMContentLoaded', function () {
const sendBtn = document.getElementById('send-btn');
const textInput = document.getElementById('text-input');
const containerText = document.getElementById('container-text');

let artificialData = [];
//Alexandria memory storage
fetch(".env/data.txt").then(response =>response.json()).then(data=>{
  artificialData = data;
}).catch(error=>console.error("error loading chatData:",error))



function sendMessage(){
  const message = textInput.value.trim();
    
  if(message !== ''){
 
    const smsText = document.createElement('div');
    smsText.classList.add('userInput');
    const response = document.createElement('div');
    response.classList.add('AIresponse')
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

