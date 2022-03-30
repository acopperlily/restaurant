import './style.css';
import './heroCat.jpg';
import {
  createHeader,
  createHeadline,
  createHero,
  createFeatures
} from './home';

let page = 'home';
const div = document.getElementById('content');
div.appendChild(createHeader());
const main = document.createElement('main');

function buildHome() {
  main.appendChild(createHeadline());
  main.appendChild(createHero());
  main.appendChild(createFeatures());
  div.appendChild(main);
}

if (page == 'home') {
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
      } else {
        buildHome();
      }
    });
  });
}
