const BuildHeader = ((div) => {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    const tabs = ['Fat Cat Café', 'Menu', 'Contact'];

    tabs.forEach(tab => {
        const li = document.createElement('li');
        li.textContent = tab;
        if (tab == 'Fat Cat Café') {
            li.setAttribute('id', 'home');
        } else {
            li.setAttribute('id', tab.toLowerCase());
        }
        ul.appendChild(li);
    });
    header.appendChild(ul);
    div.appendChild(header);
});

export { BuildHeader };