
import { level2, level3, level4, level5, level6, level7, level8 } from "/js/levels/levels.js";

let currentLevel = 1; 

function cleanPass() {
  currentLevel++; 
  responserDiv.style.display = 'none';
}

function wrongAnswer() {
  const wrongAnswer = document.getElementById('wrongAnswer');
  const responserDiv = document.getElementById('responserDiv');
  responserDiv.style.display = 'none';
  wrongAnswer.style.display = 'flex';
}

function timer() {
  const wrongAnswer = document.getElementById('wrongAnswer');
  setTimeout(() => {
    wrongAnswer.style.display = 'none';
  }, 1000);
}

function youWon() {
  const youWon = document.getElementById('youWon');
  responserDiv.style.display = 'none';
  youWon.style.display = 'flex'
  youWon.style.flexDirection = 'column';
  youWon.style.alignItems = 'center';
  document.getElementById('answerBtn').disabled = true;
}

export function checkAnswer() {
  const input1 = document.getElementById('man').value.toLowerCase();
  const input2 = document.getElementById('woman').value.toLowerCase();

  switch (currentLevel) {
    case 1:
      if (input1 === 'clyde' && input2 === 'bonnie') {
        level2();
        cleanPass()
      } else {
        wrongAnswer()
        timer()
      }
      break;
    case 2:
      if (input1 === 'romeo' && input2 === 'juliet') {
        level3();
        cleanPass()
      } else {
        wrongAnswer()
        timer()
      }
      break;
    case 3: 
      if (input1 === 'adam' && input2 === 'eve') {
        level4();
        cleanPass()
      } else {
        wrongAnswer()
        timer()
      }
      break;
    case 4: 
      if (input1 === 'tom' && input2 === 'zendaya') {
        level5();
        cleanPass()
      } else {
        wrongAnswer()
        timer()
      }
      break;
    case 5: 
      if (input1 === 'barack' && input2 === 'michelle') {
        level6();
        cleanPass()
      } else {
        wrongAnswer()
        timer()
      }
      break;
    case 6: 
      if (input1 === 'jack' && input2 === 'rose') {
        level7();
        cleanPass()
      } else {
        wrongAnswer()
        timer()
      }
      break;
    case 7: 
      if (input1 === 'cosmo' && input2 === 'wanda') {
        level8();
        cleanPass()
      } else {
        wrongAnswer()
        timer()
      }
      break;
    case 8: 
      if ((input1 === 'me' && input2 === 'you') || (input1 === 'you' && input2 === 'me')) {
        youWon()
      } else {
        wrongAnswer()
        timer()
      }
      break;
  }  
}


