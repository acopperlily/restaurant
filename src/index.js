import './style.css';
// import './heroCat.jpg';
// import './catFoodSmallest.jpg';
import {
  createHeader,
  createHeadline,
  createHero,
  createFeatures
} from './home';
import {
  createTitle,
  createH2
} from './menu';

let page = 'home';
const div = document.getElementById('content');
div.appendChild(createHeader());
const main = document.createElement('main');

function buildHome() {
  main.appendChild(createHeadline());
  main.appendChild(createHero('homeHero'));
  main.appendChild(createFeatures());
  div.appendChild(main);
}

function buildMenu() {
  main.appendChild(createTitle());
  main.appendChild(createH2());
  main.appendChild(createHero('menuHero'));
  const hero = document.getElementById('menuHero');
  const credit = document.createElement('p');
  credit.textContent = 'Photo by Anastasiia Rozumna on Unsplash';
  credit.classList.add('credit');
  hero.appendChild(credit);
  div.appendChild(main);
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

