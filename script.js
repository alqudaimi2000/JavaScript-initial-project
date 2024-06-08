'use strict';
'note :highlight a keyword, press F2, change and then press enter - this changes al';
/**
 guess the number game 
 */
//random secret number variable betweeb 1 to 20
let secret = Math.trunc(Math.random() * 20 + 1);
//score 20 and it gets decremented evey time you guess wrong per turn
let score = 20;
//highscore to keep track of your previous best games
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//event listner for guess button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // if there is no guess
  if (!guess) {
    displayMessage(' NO Number');
  }
  //if you guess correctly
  else if (guess === secret) {
    //show the secret number
    document.querySelector('.number').textContent = secret;
    displayMessage(' CORRECT!! WEHOO');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //make the check button disappear so you can't keep guessing
    document.querySelector('.check').style.display = 'none';

    //if you win and your current score is higher than highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secret) {
    if (score > 1) {
      score--;
      displayMessage(guess > secret ? ' Too high!' : ' Too low!');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
    }
  }
});

//event listner for when you press the again button
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  secret = Math.trunc(Math.random() * 20 + 1);
});
