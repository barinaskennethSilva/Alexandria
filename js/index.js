document.addEventListener('DOMContentLoaded', async () => {
//Element Id
 const containerText = document.getElementById('container-text')
  const textInput = document.getElementById('text-input');
  
 document.getElementById('send-btn').addEventListener("click",()=>{
   const sms = textInput.value.toLowerCase().trim();
   if (!sms) return;
 //  
 document.getElementById('video').pause();
 containerText.style.display = "block";
  document.getElementById('Info-Data').style.display = "none";
  //
  DisplaySms('User',sms);
  DisplaySms('Alexandria-message',sms);
 });
 
 function DisplaySms(sender,sms) {
   const message = document.createElement('div');
   message.classList.add(sender === 'User'? 'user-sms': 'Alexandria-message');
   message.textContent = `${sender}:${sms}`;
   if (sender === 'User') {
    message.className = 'User';
  } else {
    message.className = 'Alexandria-message';
  }
   containerText.appendChild(message);
   
 }
});


    
