import catFood from './catFoodSmallest.jpg';

function createTitle() {
  const h1 = document.createElement('h1');
  h1.classList.add('cat');
  h1.textContent = 'Om Nom Noms';
  return h1;
}

function createH2() {
  const h2 = document.createElement('h2');
  h2.textContent = 'Enjoy unlimited trips to our Water Fountain with purrrchase of any entrée'
  return h2;
}

function createMenuHero() {
  const div = document.createElement('div');
  const hero = new Image();
  hero.src = catFood;
  div.setAttribute('id', 'menuHero');
  div.appendChild(hero);
  return div;
}

function createPhotoCredit(hero) {
  hero.textContent = 'Photo by Anastasiia Rozumna on Unsplash';
  hero.classList.add('credit');
}

export { createTitle, createH2, createMenuHero };