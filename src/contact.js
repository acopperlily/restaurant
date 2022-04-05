const BuildContact = ((div, main, footer) => {
  const createTitle = () => {
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.classList.add('pageTitle');
    return title;
  };

  const createFormTitle = () => {
    const formTitle = document.createElement('h2');
    formTitle.textContent = "We'd love to hear from you!";
    return formTitle;
  }

  const createContainer = () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'formContainer');
    container.appendChild(createForm());
    return container;
  }

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
    input.setAttribute('placeholder', field.placeholder);
    input.setAttribute('id', field.name.toLowerCase());
    return input;
  }

  const createButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.addEventListener('click', e => {
      e.preventDefault();
      alert('This is not a real form, but thanks for playing!');
    });
    return button;
  }

  const createForm = () => {
    const form = document.createElement('form');
    const fields = [
      {
        name: 'Name',
        placeholder: 'Jorts the Cat',
        field: 'input',
        type: 'text'
      },
      {
        name: 'Email',
        placeholder: 'dogssuck@meow.com',
        field: 'input',
        type: 'email'
      },
      {
        name: 'Message',
        placeholder: 'Tell us how awesome we are!',
        field: 'textarea',
      },
    ];

    let count = 1; // For numbering div ids
    fields.forEach(field => {
      const div = document.createElement('div');
      div.classList.add('userInput');
      div.setAttribute('id', `userInput${count}`);
      count++;
      div.appendChild(createLabel(field.name));
      div.appendChild(createField(field));
      form.appendChild(div);
    });

    form.appendChild(createButton());
    return form;
  }

  const contactFunctions = [
    createTitle,
    createFormTitle,
    createContainer
  ];

  contactFunctions.forEach(func => main.appendChild(func()));
  div.insertBefore(main, footer);
});

export default BuildContact;