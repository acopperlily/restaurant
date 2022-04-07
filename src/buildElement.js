const buildElement = (elementObj, parent) => {
  const element = document.createElement(elementObj.tag);
  if (elementObj.id) {
    element.setAttribute('id', elementObj.id);
  }
  if (elementObj.className) {
    element.classList.add(elementObj.className);
  }
  if (elementObj.text) {
    element.textContent = elementObj.text;
  }
  if (elementObj.src) {
    const img = new Image();
    img.setAttribute('src', elementObj.src);
    element.appendChild(img);
  }
  parent.appendChild(element);
  return element;
};

export default buildElement;