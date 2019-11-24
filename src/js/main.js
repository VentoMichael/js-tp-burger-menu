//Le principe général est celui-ci :

//Si JavaScript n'est pas activé ou si le navigateur est ancien, la navigation s'affiche simplement dans le flux, de façon accessible.

//Sur petit écran (maxi 544px), main s'affiche par dessus navigation et le bouton de navigation nav-button apparaît.

//JavaScript s'occupe de l'action touch en ajoutant/retirant la classe .is-opened sur main.

//Sur grand écran (mini 545px), navigation est simplement placée dans le flux en haut de main.
//Dans 1 premier temps, nous vous demandons de vérifier la présence des méthodes querySelector et addEventListener. Dans un deuxième temps, je vous invite à lire ceci : polyfill.io.

//if JS ACTIVATE
document.documentElement.classList.add('js-enabled');

// Select
var main = document.querySelector('.main');
var menu = document.querySelector('.nav-button');



if ( menu ) {
    menu.addEventListener('click',function (event) {
            main.classList.toggle('is-opened');
            event.preventDefault();
        });
}