const BuildContact = ((div, main, footer) => {
    const createTitle = () => {
        const title = document.createElement('h1');
        title.textContent = 'Contact Us';
        title.classList.add('pageTitle');
        return title;
    };

    const createLabel = (name) => {
        const label = document.createElement('label');
        label.setAttribute('for', name.toLowerCase());
        label.textContent = name;
        return label;
    }

    const createField = (field) => {
        const input = document.createElement(field.field);
        if (field.type) {
            input.setAttribute('type', field.type);
        }
        input.setAttribute('name', field.name.toLowerCase());
        return input;
    }

    const createForm = () => {
        const form = document.createElement('form');
        const fields = [
            {
                name: 'Name',
                field: 'input',
                type: 'text'
            },
            {
                name: 'Email',
                field: 'input',
                type: 'email'
            },
            {
                name: 'Message',
                field: 'textarea',
            }
        ];
        fields.forEach(field => {
            form.appendChild(createLabel(field.name));
            form.appendChild(createField(field));
        });
        const button = document.createElement('button');
        button.textContent = 'Submit';
        form.appendChild(button);
        return form;
    }

    const contactFunctions = [
        createTitle,
        createForm
    ];

    contactFunctions.forEach(func => main.appendChild(func()));

    // main.appendChild(createTitle());
    div.insertBefore(main, footer);
});

export { BuildContact };