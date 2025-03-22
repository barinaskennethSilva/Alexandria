
let artificialData = [];
//Alexandria memory storage
fetch("http://localhost:8158/.env/data.txt").then(response =>response.json()).then( data=>{
  artificialData = data;
}).catch(error=>userInput.error("error loading chatData:",error));



function sendMessage(){
  const textInput = document.getElementById('text-input');
  document.getElementById('container-text').style.display = "block";
  document.getElementById('Info-Data').style.display = "none";
  let message = textInput.value.trim();
  if(message === "") return;
  //alert("hello world")
   addMessage("user",message);
    textInput.value = '';
  processMessage(message);
    

}
function addMessage(sender,text){
 const containerText = document.getElementById('container-text');
  const smsText = document.createElement('div');
    smsText.classList.add('userInput',sender + "-message");
    smsText.textContent = text;
    containerText.appendChild(smsText);
    containerText.scrollTop = containerText.scrollHeight;
}



function similarity(str1,str2){
  const words1 = str1.toLowerCase().split(/\W+/);
  const words2 = str2.toLowerCase().split(/\W+/);
  let common = 0;
  words1.forEach(word=>{
    if(word && words2.includes(word)) common++;
  });
  return common;
}
function processMessage(message) {
      let bestMatch = null;
      let highestScore = 0;

      // Loop through each conversation pair in chatData.
      artificialData.forEach(pair => {
        let score = similarity(message, pair.input);
        if (score > highestScore) {
          highestScore = score;
          bestMatch = pair;
        }
      });

      // If no match is found (score is zero), use a default response.
      if (highestScore === 0 || !bestMatch) {
        addMessage("bot", "I'm not sure how to respond to that.");
      } else {
        addMessage("bot", bestMatch.response);
      }
    }
