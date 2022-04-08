import './style.css';
import Photo from './microchip.jpg';
// import './heroCat.jpg';
import './catFoodSmallest.jpg';
import { buildElement, makeElement } from './buildElement.js';
import { BuildHeader, BuildFooter } from './page.js';
import buildHome from './home.js';
import buildMenu from './menu.js';
import BuildContact from './contact.js';

let page = 'home';
const div = document.getElementById('content');
BuildHeader(div);
BuildFooter(div);
const footer = document.getElementsByTagName('footer')[0];
const main = buildElement({ tag: 'main' }, div);

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
        BuildContact(div, main, footer);
      } else {
        buildHome(div, main, footer);
      }
    } else {
      console.log('same page');
    }
  });
});

// const test = makeElement('h1');
// console.log(test);
// test.addText('testing...');
// test.addClasses('butt', 'nope');
// test.addAttributes({ 'id': 'hole' });
// test.addImage(Photo);
// test.attachElement(main);
// console.log(test);