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
  const strong = document.createElement('strong');
  strong.textContent = 'Fat Cat Café';
  h2.textContent = "Whether Illegally Smol or Heckin' Chonker, from Fine Boi to Absolute Unit, you'll fit in at ";
  h2.appendChild(strong);
  h2.classList.add('headline');
  return h2;
}

function createWords() {
  const words = document.createElement('div');
  words.setAttribute('id', 'words');

  const features = [
    "No microchip features here!",
    "All noms served on a flat dish to avoid whisker fatigue",
    "Unlimited access to water fountain with purchase of any entrée"
  ];

  features.forEach(feature => {
    const p = document.createElement('p');
    p.textContent = feature;
    p.classList.add('feature');
    words.appendChild(p);
  });
  return words;
}

export { createHeader, createHeadline, createWords };