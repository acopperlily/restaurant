function createHeader() {
  const header = document.createElement('header');
  const ul = document.createElement('ul');
  const links = ['Fat Cat Café', 'Home', 'Menu', 'Contact'];

  links.forEach(link => {
    const li = document.createElement('li');
    li.textContent = link;
    ul.appendChild(li);
  });

  ul.firstElementChild.classList.add('brand');

  header.appendChild(ul);
  return header;
}

function createHeadline() {
  const h2 = document.createElement('h2');
  const headline = ['Whether ', ' or ', ', from ', ' to ', " – you'll fit in at "];
  const cats = ['Illegaly Smol', "Heckin' Chonker", 'Fine Boi', 'Absolute Unit'];

  let text;

  let i;
  for (i = 0; i < cats.length; i++) {
    const span = document.createElement('span');
    span.textContent = cats[i];
    span.classList.add(cats[i].toLowerCase().split(' ')[1]);
    text = document.createTextNode(headline[i]);
    h2.appendChild(text);
    h2.appendChild(span);
  }

  text = document.createTextNode(headline[i]);
  h2.appendChild(text);



  const strong = document.createElement('strong');
  strong.textContent = 'Fat Cat Café';
  h2.appendChild(strong);
  h2.classList.add('headline');
  return h2;
}

function createHero() {
  const hero = document.createElement('div');
  hero.setAttribute('id', 'hero');
  return hero;
}

function createFeatures() {
  const features = document.createElement('div');
  features.setAttribute('id', 'features');
  const icons = ['❌', '❌', '✅'];

  const details = [
    "No microchip feeders here!",
    "All noms served on a flat dish to avoid whisker fatigue",
    "Unlimited access to water fountain with purchase of any entrée"
  ];

  for (let i = 0; i < icons.length; i++) {
    const icon = document.createElement('span');
    icon.textContent = icons[i];
    const detail = document.createElement('p');
    detail.textContent = details[i];
    const feature = document.createElement('div');
    feature.classList.add('feature');
    feature.appendChild(icon);
    feature.appendChild(detail);
    features.appendChild(feature);
  }

  return features;
}

export { createHeader, createHeadline, createFeatures, createHero };