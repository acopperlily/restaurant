const BuildContact = ((div, main, footer) => {
    const createTitle = () => {
        const title = document.createElement('h1');
        console.log(title);
        title.textContent = 'Contact Us';
        title.classList.add('pageTitle');
        main.appendChild(title);
    }

    createTitle();
    div.insertBefore(main, footer);
});

export { BuildContact };