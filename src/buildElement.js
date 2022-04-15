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

export default buildElement;
