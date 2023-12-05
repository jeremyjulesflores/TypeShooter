import { startGame } from "./game";
document.addEventListener('DOMContentLoaded', function (){

 
 

  document.getElementById('startButton').addEventListener('click', startGame);

  startGame();

  
});

