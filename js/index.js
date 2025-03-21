
let artificialData = [];
//Alexandria memory storage
fetch(".env/data.txt").then(response =>response.json()).then(data=>{
  artificialData = data;
}).catch(error=>userInput.error("error loading chatData:",error))



function sendMessage(){
  const textInput = document.getElementById('text-input');
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
function processMessage(message){
  let bestMatch = null;
  let D1 = 0;
artificialData.forEach(pair=>{
  let D = similarity(message, pair.input);
  D1 = D;
  bestMatch = pair;
});
if (D1 === 0 || !bestMatch){
  addMessage("bot", "I'm not sure how to respond to that.");
}
else {
        addMessage("bot", bestMatch.response);
      }
}
