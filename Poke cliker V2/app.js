//Menu hambuerger -> Index.html (homepage)

let button = document.querySelector('#burger');
let croix = document.querySelector('#croix');
let body = document.querySelector('body');

button.addEventListener('click', () => {
  body.classList.toggle('open');
});

croix.addEventListener('click', () => {
    body.classList.toggle('open');
  });
