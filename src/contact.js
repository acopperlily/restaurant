function createTitle() {
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.classList.add('pageTitle');
    return title;
}

function buildContact(div, main, footer) {
    main.appendChild(createTitle());
    div.insertBefore(main, footer);
}

export { buildContact };