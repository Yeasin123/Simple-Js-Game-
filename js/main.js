'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
let showNumber = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);
  if (!userNumber) {
    showNumber(' No Number');
  } else if (userNumber === secretNumber) {
    showNumber(' You win the game');
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
    let guessNumber = (document.querySelector('.number').textContent =
      secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (userNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        userNumber > secretNumber ? 'To High number' : 'To low number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showNumber('You loss the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  showNumber('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
