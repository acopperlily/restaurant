function createTitle() {
  const h1 = document.createElement('h1');
  h1.classList.add('cat');
  h1.textContent = 'Om Nom Noms';
  return h1;
}

function createH2() {
  const h2 = document.createElement('h2');
  h2.textContent = 'Enjoy unlimited trips to our water fountain with purchase of any entrée'
  return h2;
}

export { createTitle, createH2 };