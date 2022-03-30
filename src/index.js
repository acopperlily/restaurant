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

if (page == 'home') {
  const main = document.createElement('main');
  main.appendChild(createHeadline());
  main.appendChild(createHero());
  main.appendChild(createFeatures());

  div.appendChild(main);

  const tabs = document.querySelectorAll('li');
  console.log(tabs);
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const link = e.path[0].id;
      console.log(link);
      if (link != page) {
        page = link;
        main.textContent = '';
      }
    });
  });
}
