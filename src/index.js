import './style.css';
import './microchip.jpg';
// import './heroCat.jpg';
import './catFoodSmallest.jpg';
import {
  createHeader,
  createHeadline,
  createHero,
  createFeatures,
  createFooter
} from './home';
import {
  createTitle,
  createH2,
  createMenuHero
} from './menu';

let page = 'home';
const div = document.getElementById('content');
div.appendChild(createHeader());
div.appendChild(createFooter());
const footer = document.getElementsByTagName('footer')[0];
console.log(footer);
const main = document.createElement('main');


function buildHome() {
  main.appendChild(createHeadline());
  main.appendChild(createHero('homeHero'));
  main.appendChild(createFeatures());
  // div.appendChild(main);
  div.insertBefore(main, footer);
}

function buildMenu() {
  main.appendChild(createTitle());
  main.appendChild(createH2());
  // main.appendChild(createHero('menuHero'));
  main.appendChild(createMenuHero());
  const hero = document.getElementById('menuHero');

  const credit = document.createElement('p');
  credit.textContent = 'Photo by Anastasiia Rozumna on Unsplash';
  credit.classList.add('credit');
  hero.appendChild(credit);
  div.insertBefore(main, footer);
}


buildHome();

const tabs = document.querySelectorAll('li');
console.log(tabs);
tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    const link = e.path[0].id;
    console.log(link);
    if (link != page) {
      page = link;
      main.textContent = '';
      if (link == 'menu') {
        buildMenu();
      } else if (link == 'contact') {
        console.log('nope');
      } else {
        buildHome();
      }
    } else {
      console.log('same page');
    }
  });
});

