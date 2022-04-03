import Fountain from './fountain.jpg';
import No from './no.png';

function createHeader() {
  const header = document.createElement('header');
  const ul = document.createElement('ul');
  const links = ['Fat Cat Café', 'Menu', 'Contact'];
  const ids = ['home', 'menu', 'contact'];

  for (let i = 0; i < links.length; i++) {
    const li = document.createElement('li');
    li.textContent = links[i];
    li.setAttribute('id', ids[i]);
    ul.appendChild(li);
  }

  header.appendChild(ul);
  return header;
}

function createHeadline() {
  const h1 = document.createElement('h1');
  const headline = ['Whether ', ' or ', ', from ', ' to ', " – you'll fit in at "];
  const cats = ['Illegaly Smol', "Heckin' Chonker", 'Fine Boi', 'Absolute Unit', 'Fat Cat Café'];

  let text;

  let i;
  for (i = 0; i < cats.length; i++) {
    const span = document.createElement('span');
    span.textContent = cats[i];
    span.classList.add(cats[i].toLowerCase().split(' ')[1]);
    text = document.createTextNode(headline[i]);
    h1.appendChild(text);
    h1.appendChild(span);
  }

  // text = document.createTextNode(headline[i]);
  // h1.appendChild(text);

  // const strong = document.createElement('strong');
  // strong.textContent = 'Fat Cat Café';
  // h1.appendChild(strong);
  h1.classList.add('headline');
  return h1;
}

function createHero(id) {
  const hero = document.createElement('div');
  hero.setAttribute('id', id);
  return hero;
}

function createFeatures() {
  const features = document.createElement('div');
  features.setAttribute('id', 'features');
  const images = [No, No, Fountain];
  const ids = ['no', 'dish', 'fountain'];

  const featureHeadlines = [
    "Microchip Feeders Prohibited",
    "No Whisker Fatigue",
    "Unlimited Drinks"
  ];

  const details = [
    "We encourage you to eat as little or as much as you please",
    "For your comfort, all noms are served on a flat dish",
    "Enjoy fresh, running water thoughtfully placed far away from your meal"
  ]

  for (let i = 0; i < images.length; i++) {
    const icon = document.createElement('div');
    icon.setAttribute('id', ids[i]);

    const img = new Image();
    img.src = images[i];
    icon.appendChild(img);
    const featureHeadline = document.createElement('h3');
    featureHeadline.textContent = featureHeadlines[i];
    const feature = document.createElement('div');
    feature.classList.add('feature');

    const detail = document.createElement('p');
    detail.textContent = details[i];
    feature.appendChild(icon);
    feature.appendChild(featureHeadline);
    feature.appendChild(detail);
    features.appendChild(feature);
  }

  return features;
}

function createFooter() {
  const footer = document.createElement('footer');
  const cc = document.createElement('p');
  const icon = document.createElement('span');

  cc.textContent = 'Made with ❤️ by April Copley';
  icon.textContent = 'O';
  footer.appendChild(cc);
  return footer;
}

function buildHome(div, main, footer) {
  main.appendChild(createHeadline());
  main.appendChild(createHero('homeHero'));
  main.appendChild(createFeatures());
  div.insertBefore(main, footer);
}

export { createHeader, createFooter, buildHome };