import './style.css';
import './microchip.jpg';
// import './heroCat.jpg';
import './catFoodSmallest.jpg';
import { BuildHeader, BuildFooter } from './page.js';
import { buildHome } from './home.js';
import { buildMenu } from './menu.js';
import { buildContact } from './contact.js';

let page = 'home';
const div = document.getElementById('content');
BuildHeader(div);
BuildFooter(div);
// div.appendChild(createFooter());
const footer = document.getElementsByTagName('footer')[0];
const main = document.createElement('main');

buildHome(div, main, footer);

const tabs = document.querySelectorAll('li');
tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    const link = e.path[0].id;
    if (link != page) {
      document.getElementById(page).classList.remove('highlight');
      page = link;
      document.getElementById(page).classList.add('highlight');
      main.textContent = '';
      if (link == 'menu') {
        buildMenu(div, main, footer);
      } else if (link == 'contact') {
        buildContact(div, main, footer);
      } else {
        buildHome(div, main, footer);
      }
    } else {
      console.log('same page');
    }
  });
});

