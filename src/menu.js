import { buildElement, makeElement } from './buildElement';
import catFood from './catFoodSmallest.jpg';

const menuItems = {
  apps: [
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
      desc: "Yes, you can haz cheez! At home you're lucky to get a ninja nibble, but here you'll get the whole slice."
    }
  ],

  entrées: [
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
  ],

  treats: [
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
      desc: "Don't let your lactose intolerance get in the way of enjoying this tasty beverage"
    }
  ],
};

function createMenuItems(menuItems, main) {

  const menuInfo = {
    tag: 'div',
    className: 'menuItems'
  };

  const menu = buildElement(menuInfo, main);

  const tags = ['div', 'h3', 'p', 'p'];
  let i = 0;

  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    for (let prop in item) {
      const tag = document.createElement(tags[i]);
      tag.classList.add(prop);
      if (prop == 'photo') {
        tag.style.backgroundColor = item.photo;
      } else {
        tag.textContent = item[prop];
      }
      menuItem.appendChild(tag);
      i++;
    }

    i = 0;
    menu.appendChild(menuItem);
  });

  return menu;
};


function buildMenu(div, main, footer) {
  const titleInfo = {
    tag: 'h1',
    className: 'pageTitle',
    text: 'Om Nom Noms'
  };

  const subtitleInfo = {
    tag: 'h2',
    text: "Enjoy unlimited trips to our Water Fountain with purrrchase of any entrée"
  };

  const heroInfo = {
    tag: 'div',
    id: 'menuHero',
    src: catFood
  };

  const creditInfo = {
    tag: 'p',
    className: 'credit',
    text: 'Photo by Anastasiia Rozumna on Unsplash'
  };

  [titleInfo, subtitleInfo, heroInfo, creditInfo].forEach(obj => {
    buildElement(obj, main);
  });

  for (let menu in menuItems) {
    const menuTitle = {
      tag: 'h2',
      className: 'menuTitle',
      text: menu
    };
    buildElement(menuTitle, main);
    main.appendChild(createMenuItems(menuItems[menu], main));
  }
  div.insertBefore(main, footer);
}

export default buildMenu;