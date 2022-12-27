// let button = document.querySelector('button');
// let darkPokeball = document.querySelector('#darkPokeball');

// button.addEventListener('button', () => {
//     darkPokeball.style.transform = '20deg';
// });


// FORMULAIRE NON-REMPLIE

let input = document.querySelector('input');
let error = document.querySelector('small');
let formulaire = document.querySelector('form');
let button = document.querySelector('button')
let test;

error.style.display = "none";


// Cacher le texte d'erreur
/*
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
      // Afficher le message d'erreur
      error.style.display = "inline";
    }
    else {
      // Cacher le message d'erreur
      error.style.display = "none";
    }
  });
*/



document.cookie = input.value;
  
  if(localStorage.getItem('Username')) {
    // SE LANCE si une valeur est stocker dans Username
    window.location = './game.html';
  }
  else{
    formulaire.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('Username', input.value)
    });

}