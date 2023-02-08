// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

//TODO Milestone 1:
//TODO Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.

//TODO Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//TODO Milestone 2:
//TODO Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

//TODO BONUS 1:
//TODO Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

//TODO BONUS 2:
//TODO Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

//TODO BONUS 3:
//TODO Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
let activeImage = 0;

//  TROVO GLI ELEMENTI DEL DOM DA USARE
const myCarouselrEl = document.querySelector(".my-carousel");
// console.log(myCarouselrEl);
const mythumbnailEl = document.querySelector(".my-thumbnail");
// console.log(mythumbnailEl);
const buttonPrevEl = document.querySelector(".carousel-control-prev");
// console.log(buttonPrevEl);
const buttonNextEl = document.querySelector(".carousel-control-next");
// console.log(buttonNextEl);

array.forEach((slide, index) => {});
myCarouselrEl.innerHTML += `<div class="slide ${
  index == activeImage ? "active" : ""
}">
            <img src="./${slide.image}" alt="" />
            <div class="my-text-area me-3">
              <h2 class="text-end">${slide.title}</h2>
              <p class="text-end">${slide.title}</p>
            </div>
            `;
