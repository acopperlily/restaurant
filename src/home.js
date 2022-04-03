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
  const heading = document.createElement('div');
  const headline1 = ['Whether ', 'Illegaly Smol', ' or ', "Heckin' Chonker", ','];
  const headline2 = ['from ', 'Fine Boi', ' to ', 'Absolute Unit', ' -'];
  const headline3 = ["you'll fit in at ", 'Fat Cat Café'];
  let count = 1;

  [headline1, headline2, headline3].forEach(headline => {

    const h1 = document.createElement('h1');

    for (let i = 0; i < headline.length; i++) {

      let text, cat;

      if (i % 2 == 0) { // Create normal text
        text = document.createTextNode(headline[i]);
      } else { // Create span to target fonts
        text = document.createElement('span');
        text.textContent = headline[i];
        cat = headline[i].toLowerCase().split(' ')[1];
        text.classList.add(cat);
      }
      h1.appendChild(text);
      if (i == 1 || cat == 'cat') {
        console.log(cat == 'cat');
        const lineBreak = document.createElement('br');
        if (window.innerWidth > 599) {
          lineBreak.classList.add('hide');
        }
        if (cat == 'cat') {
          h1.insertBefore(lineBreak, h1.lastElementChild);
        } else {
          h1.appendChild(lineBreak);
        }
      }
    }

    h1.setAttribute('id', `headline${count}`);
    count++;
    heading.appendChild(h1);

  });
  heading.setAttribute('id', 'headline');
  return heading;
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

let br = document.getElementsByTagName('br');
window.addEventListener('resize', e => {
  for (let i = 0; i < br.length; i++) {
    if (e.target.innerWidth < 600) {
      br[i].classList.remove('hide');
    } else {
      br[i].classList.add('hide');
    }
  }
});

export { createHeader, createFooter, buildHome };