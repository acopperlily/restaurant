import './style.css';
import './microchip.jpg';
// import './heroCat.jpg';
import './catFoodSmallest.jpg';
import {
  buildHome,
  createHeader,
  createFooter
} from './home';
import { buildMenu } from './menu.js';
import { buildContact } from './contact.js';

let page = 'home';
const div = document.getElementById('content');
div.appendChild(createHeader());
div.appendChild(createFooter());
const footer = document.getElementsByTagName('footer')[0];
console.log(footer);
const main = document.createElement('main');

buildHome(div, main, footer);

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
        buildMenu(div, main, footer);
      } else if (link == 'contact') {
        console.log('nope');
        buildContact(div, main, footer);
      } else {
        buildHome(div, main, footer);
      }
    } else {
      console.log('same page');
    }
  });
});

