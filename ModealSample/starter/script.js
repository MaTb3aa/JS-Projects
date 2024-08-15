'use strict';

const show_modal = document.querySelectorAll('.show-modal');
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const addModel = function () {
  console.log('this is a click button');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < show_modal.length; i++)
  show_modal[i].addEventListener('click', addModel);

document.querySelector('.close-modal').addEventListener('click', hideModel);
overlay.addEventListener('click', hideModel);


document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key == 'Escape' && !model.classList.contains('hidden')){
        hideModel();
    }
});
