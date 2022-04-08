import { buildElement, makeElement } from "./buildElement.js";

const BuildHeader = ((div) => {
  const header = buildElement({ tag: 'header' }, div);
  const ul = buildElement({ tag: 'ul' }, header);
  const tabs = ['home', 'Menu', 'Contact'];

  tabs.forEach(tab => {
    const tabInfo = {
      tag: 'li',
      id: tab.toLowerCase(),
      className: 'tab',
      text: tab,
    }

    const li = buildElement(tabInfo, ul);
    if (tab == 'home') {
      li.textContent = 'Fat Cat Café';
    }
  });
});

const BuildFooter = ((div) => {

  const footerInfo = {
    tag: 'footer',
    id: 'butt',
    className: 'footer',
  };

  const footerText = {
    tag: 'p',
    id: 'mine',
    className: 'mine',
    text: 'Made with ❤️ by April Copley ',
  };

  const icon = {
    tag: 'span',
    id: 'icon',
    text: '',
  };

  const footer = buildElement(footerInfo, div);
  [footerText, icon].forEach(obj => {
    buildElement(obj, footer);
  });
});

export { BuildHeader, BuildFooter };