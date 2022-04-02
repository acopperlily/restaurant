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
  const items = [
    {
      img: 'blue',
      dish: 'Paté',
      price: '$2',
      desc: 'Solid mold of protein, straight from the can'
    },
    {
      img: 'yellow',
      dish: 'Chunks',
      price: '$3',
      desc: 'Hearty bits of protein smothered in a savory gravy'
    },
    {
      img: 'purple',
      dish: 'Shreds',
      price: '$4',
      desc: 'Finely shredded protein swimming in a savory gravy'
    }
  ];

  items.forEach(item => {
    console.log(item);
    const dish = document.createElement('div');
    dish.classList.add('dish');
    const img = document.createElement('div');
    img.classList.add('item');
    console.log(item.img);
    img.style.backgroundColor = item.img;
    const h3 = document.createElement('h3');
    h3.textContent = item.dish;
    const price = document.createElement('p');
    price.textContent = item.price;
    const desc = document.createElement('p');
    desc.textContent = item.desc;

    dish.appendChild(img);
    dish.appendChild(h3);
    dish.appendChild(price);
    dish.appendChild(desc);
    menu.appendChild(dish);
    for (let key in item) {
      console.log(`${key}: ${item[key]}`);
    }
  });

  return menu;
}

export { createTitle, createH2, createMenuHero, createItems };