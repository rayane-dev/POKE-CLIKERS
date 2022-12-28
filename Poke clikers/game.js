/*COOKIE CLIKER*/

// let containerBaie = document.querySelector('#container-baie');
// setInterval(baieTimer, 1000);
// let point = 0;
// parseInt(point);
// let score = document.querySelector('#score');


// // if(localStorage.getItem('point')){
// //     // Si un score est enregistré afficher le score
// //     score.innerHTML = point;
// //  }

// containerBaie.addEventListener('click', () => {
//     point++
//     score.innerHTML = point;
//  });

// function baieTimer(){
//     point++
//     score.innerHTML = point;
//  }



 
// console.log(localStorage.getItem('Username'));
 
/*POP-UP*/

const amelioration = document.querySelector('#btn-amelioration');
const modal_amelioration = document.querySelector('#modal-container-amelioration');
const succes = document.querySelector('#btn-succes');
const modal_succes = document.querySelector('#modal-container-succes');
const parametre = document.querySelector('#btn-parametre');
const modal_parametre = document.querySelector('#modal-container-parametre');
const btn_croix1 = document.querySelector('.btn-croix1');
const btn_croix2 = document.querySelector('.btn-croix2');
const btn_croix3 = document.querySelector('.btn-croix3');

amelioration.addEventListener('click', () =>{
    modal_amelioration.classList.toggle('active');
});

btn_croix1.addEventListener('click', () =>{
    modal_amelioration.classList.remove('active');
    console.log('dkdkskdjsjd');
});

succes.addEventListener('click', () =>{
    modal_succes.classList.toggle('active');
});

btn_croix2.addEventListener('click', () =>{
    modal_succes.classList.remove('active');
});

parametre.addEventListener('click', () =>{
     modal_parametre.classList.toggle('active');
});

btn_croix3.addEventListener('click', () =>{
    modal_parametre.classList.remove('active');
});