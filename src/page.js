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

const BuildFooter = ((div) => {
    const footer = document.createElement('footer');
    const cc = document.createElement('p');
    const icon = document.createElement('span');

    cc.textContent = 'Made with ❤️ by April Copley';
    footer.appendChild(cc);
    div.appendChild(footer);
});

export { BuildHeader, BuildFooter };