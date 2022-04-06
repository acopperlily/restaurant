import catFood from './catFoodSmallest.jpg';

function createTitle() {
  const h1 = document.createElement('h1');
  h1.classList.add('pageTitle');
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

const apps = [
  {
    photo: 'pink',
    dish: 'Tableside Tuna',
    price: '$6',
    desc: "We'll open the can at your table"
  },
  {
    photo: 'red',
    dish: 'Sneaky Cheez',
    price: '$2',
    desc: 'Yes, you can haz cheez!'
  }
];

const entrees = [
  {
    photo: 'blue',
    dish: 'Classic Paté',
    price: '$2',
    desc: 'Sink your teefies into this solid mold of potted meat, straight from the can'
  },
  {
    photo: 'yellow',
    dish: 'Comfort Chunks',
    price: '$4',
    desc: 'The purrrfect combination of meaty bits and gravies'
  },
  {
    photo: 'purple',
    dish: 'Savory Shreds',
    price: '$3',
    desc: 'For those who purrrfer a little meat with their gravies'
  },
  {
    photo: 'orange',
    dish: 'Fat Cat Feast',
    price: '$5',
    desc: "Our Classic Paté topped with your choice of Comfort Chunks or Savory Shreds",
  }
];

const treats = [
  {
    photo: 'lightblue',
    dish: 'Sausage Nibbles',
    price: '$3',
    desc: 'You can have a little sausage, as a treat'
  },
  {
    photo: 'lightpink',
    dish: 'Saucer of Milk',
    price: '$1',
    desc: "We won't tell you how to live your nine lives"
  }
];

function createMenuItems(menuItems) {
  const menu = document.createElement('div');
  menu.classList.add('menuItems');

  const tags = ['div', 'h3', 'p', 'p'];
  let i = 0;

  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    for (let key in item) {
      const tag = document.createElement(tags[i]);
      tag.classList.add(key);
      if (key == 'photo') {
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

function buildMenu(div, main, footer) {
  main.appendChild(createTitle());
  main.appendChild(createH2());
  // main.appendChild(createHero('menuHero'));
  main.appendChild(createMenuHero());
  const hero = document.getElementById('menuHero');

  const credit = document.createElement('p');
  credit.textContent = 'Photo by Anastasiia Rozumna on Unsplash';
  credit.classList.add('credit');
  hero.appendChild(credit);

  main.appendChild(createMenuItems(apps));
  main.appendChild(createMenuItems(entrees));
  main.appendChild(createMenuItems(treats));
  div.insertBefore(main, footer);
}

export default buildMenu;