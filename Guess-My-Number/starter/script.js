'use strict';
console.log('MaT3aa Game ..');
const number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);


  if (!guess) {
    displayMessage('⛔️ No Number');
  } else {
    if (score <= 0) {
      displayMessage('💥 You Lost');
      document.querySelector('body').style.backgroundColor = '#e74c3c';
    } else if (number === guess) {
      highScore = Math.max(highScore, score);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.highscore').textContent = highScore;
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = number;
    } else {
      displayMessage(number < guess ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  number = Math.floor(Math.random() * 10) + 1;
});
