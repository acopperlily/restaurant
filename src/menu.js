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

function createMenuItems() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menuItems');

  const menuItems = [
    {
      photo: 'blue',
      dish: 'Paté',
      price: '$2',
      desc: 'Solid mold of protein, straight from the can'
    },
    {
      photo: 'yellow',
      dish: 'Chunks',
      price: '$3',
      desc: 'Hearty bits of protein smothered in a savory gravy'
    },
    {
      photo: 'purple',
      dish: 'Shreds',
      price: '$4',
      desc: 'Finely shredded meat swimming in a savory gravy'
    }
  ];

  const tags = ['div', 'h3', 'p', 'p'];
  let i = 0;

  menuItems.forEach(item => {
    console.log(item);
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    for (let key in item) {
      const tag = document.createElement(tags[i]);
      console.log(key);
      console.log(`${key}`);
      tag.classList.add(key);
      if (key == 'photo') {
        console.log(key == 'photo');
        tag.style.backgroundColor = item.photo;
      } else {
        tag.textContent = item[key];
      }
      menuItem.appendChild(tag);
      i++;
    }

    i = 0;
    menu.appendChild(menuItem);

  });

  return menu;
}

export { createTitle, createH2, createMenuHero, createMenuItems };