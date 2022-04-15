const buildElement = (elementObj, parent) => {
  const element = document.createElement(elementObj.tag);
  if (elementObj.stuff) {
    for (let prop in elementObj.stuff) {
      element.setAttribute(prop, elementObj.stuff[prop]);
    }
  }
  if (elementObj.id) {
    element.setAttribute("id", elementObj.id);
  }
  if (elementObj.className) {
    element.classList.add(elementObj.className);
  }
  if (elementObj.text) {
    element.textContent = elementObj.text;
  }
  if (elementObj.src) {
    const img = new Image();
    img.setAttribute("src", elementObj.src);
    element.appendChild(img);
  }
  parent.appendChild(element);
  return element;
};

const makeElement = (tag) => {
  const newElement = document.createElement(tag);
  console.log("new:", newElement);

  const getTags = () => newElement;

  const addText = (text) => {
    newElement.textContent = text;
  };

  const addClass = (className) => {
    newElement.classList.add(className);
  };

  const addClasses = (...classNames) => {
    classNames.forEach((className) => {
      newElement.classList.add(className);
    });
  };

  const addAttribute = (property, value) => {
    newElement.setAttribute(property, value);
  };

  const addAttributes = (attributes) => {
    for (let prop in attributes) {
      console.log(prop, attributes[prop]);
      newElement.setAttribute(prop, attributes[prop]);
    }
  };

  const addImage = (image) => {
    const newImage = new Image();
    newImage.src = image;
    newElement.appendChild(newImage);
  };

  const attachElement = (parent) => {
    console.log("parent:", parent instanceof HTMLElement);
    if (!(parent instanceof HTMLElement)) {
      parent = parent.getTags();
    }
    parent.appendChild(newElement);
  };

  return {
    getTags,
    addText,
    addClass,
    addClasses,
    addAttribute,
    addAttributes,
    addImage,
    attachElement,
  };
};

export { buildElement, makeElement };
