document.addEventListener('DOMContentLoaded', function () {
const sendBtn = document.getElementById('send-btn');
const textInput = document.getElementById('text-input');
const containerText = document.getElementById('container-text');

const Data = "Artificial Intelligence (AI) is a rapidly evolving technology that enables machines to simulate human intelligence, including learning, reasoning, and problem-solving. It has the potential to revolutionize industries by automating tasks, enhancing decision-making, and unlocking new innovations, but it also raises ethical and societal challenges that require careful consideration.";


function sendMessage(){
  const message = textInput.value.trim();
    
                
            
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

