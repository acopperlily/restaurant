function createHeader() {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    const links = ['Fat Cat Café', 'Home', 'Menu', 'Contact'];
    for (let i = 0; i < links.length; i++) {
        const li = document.createElement('li');
        li.textContent = links[i];
        ul.appendChild(li);
    }
    ul.firstElementChild.classList.add('brand');

    header.appendChild(ul);
    return header;
}

function createHeadline() {
    const h2 = document.createElement('h2');
    h2.textContent = "Whether Illegally Smol or Heckin' Chonker, from Fine Boi to Absolute Unit, you'll fit in at Fat Cat Cafe";
    h2.classList.add('headline');
    return h2;
}

export { createHeader, createHeadline };