var canvas;
var gameState, contestantCount, database, quiz, question,contestant;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
