'use strict';

//selecting elements
const player0El = document.getElementById('score--0');
const player1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');
const newGamebtn = document.querySelector('.btn--new');
const curScore0 = document.getElementById('current--0');
const curScore1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

document.getElementById('name--0').textContent = prompt('Player 1, Enter your name');
document.getElementById('name--1').textContent = prompt(
  'Player 2, Enter your name'
);

player0El.textContent = 0;
player1El.textContent = 0;

dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

rollbtn.addEventListener('click', function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');

  dice.src = `dice-${diceValue}.png`;

  if (diceValue !== 1) {
    currentScore += diceValue;
    console.log('palyer ', activePlayer);

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    console.log(currentScore);
  } else {
    console.log(`You Get 1 Now user switched`);

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    document
      .querySelector(`.player--${Number(!activePlayer)}`)
      .classList.add('player--active');
    console.log(`active 2 = ${activePlayer}`);

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    currentScore = 0;
  }
});

holdbtn.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  document
    .querySelector(`.player--${Number(!activePlayer)}`)
    .classList.add('player--active');

  document.getElementById(`score--${activePlayer}`).textContent =
    Number(document.getElementById(`score--${activePlayer}`).textContent) +
    currentScore;

  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  currentScore = 0;
  dice.classList.add('hidden');
});

newGamebtn.addEventListener('click', function () {
  dice.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
  document.getElementById(`current--${0}`).textContent = 0;
  document.getElementById(`current--${1}`).textContent = 0;
  document.querySelector(`.player--${0}`).classList.add('player--active');
  player0El.textContent = 0;
  player1El.textContent = 0;
});
