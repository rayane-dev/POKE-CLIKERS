var username;

let input = document.querySelector('input');
let error = document.querySelector('small');
let formulaire = document.querySelector('form');
let button = document.querySelector('button')
let test;

error.style.display = "none";

document.cookie = input.value;
button.disabled = true;

//Disable button while nothing is written in the form input, enable it when something is written
input.addEventListener('keyup', () => {
    if(input.value.length == 0) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
        formulaire.addEventListener('submit', (e) => {
                e.preventDefault();
                username = input.value;
                sessionStorage.setItem('Username', username);
        window.location = 'game.html';
      });
    }
});
