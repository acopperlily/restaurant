const buildElement = (elementObj, parent) => {
  let newElement;
  if (elementObj.src) {
    newElement = new Image();
    newElement.setAttribute("src", elementObj.src);
  }

  if (elementObj.tag) {
    newElement = document.createElement(elementObj.tag);
  }
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

  parent.appendChild(newElement);
  return newElement;
};

export default buildElement;
