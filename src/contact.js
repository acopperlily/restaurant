import { buildElement, makeElement } from "./buildElement.js";

const BuildContact = ((div, main, footer) => {

  const titleInfo = {
    tag: 'h1',
    className: 'pageTitle',
    text: 'Contact Us'
  };
  buildElement(titleInfo, main);

  const formTitleInfo = {
    tag: 'h2',
    text: "We'd love to hear from you!"
  };
  buildElement(formTitleInfo, main);

  const form = buildElement({ tag: 'form' }, main);
  const fields = [
    {
      tag: 'input',
      id: 'name',
      stuff: {
        name: 'Name',
        placeholder: 'Jorts the Cat',
        type: 'text'
      }
    },
    {
      tag: 'input',
      id: 'email',
      stuff: {
        name: 'Email',
        placeholder: 'dogssuck@meow.com',
        type: 'email'
      }
    },
    {
      tag: 'textarea',
      id: 'message',
      stuff: {
        name: 'Message',
        placeholder: 'Tell us how awesome we are!',
      }
    },
  ];

  let count = 1;

  fields.forEach(field => {
    const inputDivInfo = {
      tag: 'div',
      className: 'userInput',
      id: `userInput${count}`
    };
    const inputDiv = buildElement(inputDivInfo, form);
    count++;

    const labelInfo = {
      tag: 'label',
      id: field.id,
      text: field.stuff.name,
      stuff: {
        for: field.stuff.name
      }
    };
    buildElement(labelInfo, inputDiv);
    buildElement(field, inputDiv);

  });

  const buttonInfo = {
    tag: 'button',
    text: 'Submit'
  };

  const button = buildElement(buttonInfo, form)
  button.addEventListener('click', e => {
    e.preventDefault();
    alert('This is not a real form, but thanks for playing!');
  });

  const containerInfo = {
    tag: 'div',
    id: 'formContainer'
  };
  const containerDiv = buildElement(containerInfo, main);
  containerDiv.appendChild(form);

  div.insertBefore(main, footer);
});

export default BuildContact;