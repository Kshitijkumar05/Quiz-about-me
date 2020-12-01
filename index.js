var readlineSync=require('readline-sync');

var user=readlineSync.question("What's your name? : ");
console.log("Welcome "+user +" to the game.");
var score=0;
function play(question,answer){
  var userAnswer=readlineSync.question(question);

  if (userAnswer === answer){
    console.log("Right!");
    score=score+1;
  }else{
    console.log("Wrong!");
    score=score-1;
  }
  console.log("--------");
}
 
var questions = [{
  question :"What's my age?",
  answer :"21"},
{ question :"where do i live?",
answer: "Siwan"},
{question:"My school name:", 
answer:"msvm"},
{ question:"My college name:",
answer:"BBDNITM"}];


for(var i=0; i<questions.length;i++){
  var ques=questions[i];
  play(ques.question, ques.answer)
  
}
console.log("Congratulation you scored:" +score);