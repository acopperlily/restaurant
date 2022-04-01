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

function createItems() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menuItems');
  // const h2 = document.createElement('h2');
  // h2.textContent = 'Your choice of chicken, beef, or fish';
  // menu.appendChild(h2);

  const food = ['Paté', 'Meaty Bits', 'Shreds'];

  let i;
  for (i = 0; i < food.length; i++) {
    const dish = document.createElement('div');
    dish.classList.add('dish');
    const img = document.createElement('div');
    img.setAttribute('id', 'item');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = food[i];
    dish.appendChild(img);
    dish.appendChild(h3);
    menu.appendChild(dish);
  }
  return menu;
}

export { createTitle, createH2, createMenuHero, createItems };