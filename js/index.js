document.addEventListener('DOMContentLoaded', async () => {
//Element Id
 const containerText = document.getElementById('container-text')
  const textInput = document.getElementById('text-input');
 // Info-Data
 const tokenMap = {};
 const vocab = `Chatbot is an Artificial Intelligence web bot assistant designed to help answer your questions. 
It is trained on a dataset of user inputs and responses to simulate human-like conversations. 
The chatbot can understand greetings, provide information, and assist with common tasks. 
It uses natural language processing to interpret messages and generate appropriate replies. 
As a digital assistant, it is available 24/7 to support users without human supervision. 
Chatbots can be found in customer service websites, mobile apps, and smart devices.

The main purpose of a chatbot is to make communication faster and more efficient. 
Instead of waiting for a human representative, users can interact with the chatbot and get instant responses. 
Chatbots can answer frequently asked questions, guide users through processes, or collect feedback. 
They can also be trained to provide information about products, services, events, or locations. 
Some advanced chatbots use machine learning to improve their answers over time.

There are two main types of chatbots: rule-based and AI-based. 
Rule-based chatbots follow pre-defined scripts and respond based on keywords or patterns. 
They are easy to build but limited in flexibility. 
AI-based chatbots, on the other hand, learn from data and use algorithms to understand intent and context. 
They are more intelligent and adaptable to new conversations.

A good chatbot must have a clean dataset with accurate and relevant examples. 
The data should include variations of how users ask questions and how the bot should respond. 
This helps the model recognize similar phrases and reply correctly. 
For example, if someone says “Hi,” “Hello,” or “Hey,” the bot should reply with a friendly greeting. 
Similarly, if a user asks “What’s your name?” or “Who are you?”, the bot should give a proper introduction.

Training a chatbot also involves tokenizing the text, removing unnecessary characters, and normalizing the input. 
Each word in the dataset is assigned a token ID so the AI model can understand the structure of the language. 
Once trained, the chatbot can be deployed on a website or application. 
It listens to user messages, processes them, and selects the best response from its training.

In simple cases, chatbots use exact keyword matching, but in advanced systems, they use deep learning models such as RNNs or Transformers. 
For example, the Transformer architecture allows the bot to analyze the full context of the conversation, not just the last message.

In conclusion, a chatbot is a valuable AI tool that helps users get fast, accurate, and automated answers to their questions. 
With the right dataset and proper training, your chatbot can improve over time and become smarter with every interaction.`;
//Natural language Understanding
const intents = [
  {
    tag: 'greeting',
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    responses: ['Hello there!', 'Hi! How can I help you?', 'Greetings!']
  },
  {
    tag: 'name_query',
    patterns: ['what is your name', 'who are you'],
    responses: ['I am your chatbot assistant.', 'You can call me Moonlight AI.']
  },
  {
    tag: 'thanks',
    patterns: ['thanks', 'thank you'],
    responses: ['You’re welcome!', 'Happy to help!']
  },
  {
    tag: 'goodbye',
    patterns: ['bye', 'goodbye', 'see you'],
    responses: ['Goodbye!', 'See you again soon!', 'Take care!']
  },
];
//Mapping
const vocabWords = vocab.toLowerCase().split(/\s+/);
vocabWords.forEach((word,index)=>{
  tokenMap[word] = index + 1;
});

function tokenization(input){
  return input.toLowerCase().split(/\s+/);
}
function paddSequence(sequence, maxLen=10){
const padded = Array(maxLen).fill(0);
for (let i = 0; i < Math.min(sequence.length,maxLen);i++){
 padded[i] = tokenMap[sequence[i]] || 0;
}
return padded;
}
function Vectorsize(PaddedSequence){
const embeddingDim = 4;
const embeddingMatrix = {};
Object.values(tokenMap).forEach(id=>{
  embeddingMatrix[id] = Array.from({
    length:embeddingDim},()=>parseFloat(Math.random().toFixed(2)));
});
embeddingMatrix[0] = Array(embeddingDim).fill(0);
return PaddedSequence.map(id=>embeddingMatrix[id]);
}
//positional encoding
function getPositionalEncoding(position,dModel){
  const pe = [];
  for(let i = 0; i < dModel; i++){
    if(i % 2 === 0){
  pe[i] = Math.sin(position / Math.pow(1000, i / dModel));   
    } else{
     pe[i] = Math.cos(position / Math.pow(1000, (i -1) / dModel));  
    }
  }
  return pe;
}
//sending Sms
 document.getElementById('send-btn').addEventListener("click",()=>{
   const sms = textInput.value.toLowerCase().trim();
   if (!sms) return;
 //  
 document.getElementById('video').pause();
 containerText.style.display = "block";
  document.getElementById('Info-Data').style.display = "none";
  //
  const token = tokenization(sms);
  const padding = paddSequence(token);
  const vectors = Vectorsize(padding);
 const dModel = 4;
 const positionalEncodings = vectors.map((_,pos) => getPositionalEncoding(pos,dModel));
 const combined = vectors.map((vec,i)=> vec.map((val,j)=> val + positionalEncodings[i][j] ))
  console.log(combined);
  DisplaySms('User',sms);
  const botRply = botResponse();
  DisplaySms('Alexandria',botRply);
 });
 
 function DisplaySms(sender,sms) {
   const message = document.createElement('div');
   message.classList.add(sender === 'User'? 'user-sms': 'Alexandria');
   message.textContent = `${sender}:${sms}`;
   if (sender === 'User') {
    message.className = 'User';
  } else {
    message.className = 'Alexandria-message';
  }
   containerText.appendChild(message);
   
 }
 function botResponse(){
   return "This Alexandria chatbot under developing process and part of princess Moonlight project";
 }
});


    
