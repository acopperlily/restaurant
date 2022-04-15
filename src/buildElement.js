const buildElement = (elementObj, parent) => {
  const newElement = document.createElement(elementObj.tag);
  if (elementObj.properties) {
    for (let prop in elementObj.properties) {
      newElement.setAttribute(prop, elementObj.properties[prop]);
    }
  }
  if (elementObj.id) {
    newElement.setAttribute("id", elementObj.id);
  }
  if (elementObj.className) {
    newElement.classList.add(elementObj.className);
  }
  if (elementObj.text) {
    newElement.textContent = elementObj.text;
  }
  if (elementObj.src) {
    const img = new Image();
    img.setAttribute("src", elementObj.src);
    newElement.appendChild(img);
  }

  parent.appendChild(newElement);
  return newElement;
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
