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

export { createHeader };