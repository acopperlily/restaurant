import { buildElement, makeElement } from "./buildElement.js";

const BuildHeader = () => {
  const header = makeElement("header");
  const nav = makeElement("nav");
  const ul = makeElement("ul");
  const tabs = ["home", "Menu", "Contact"];

  tabs.forEach((tab) => {
    const li = makeElement("li");
    li.addAttribute("id", tab.toLowerCase());
    li.addClass("tab");
    if (tab === "home") {
      li.addText("Fat Cat Café");
    } else {
      li.addText(tab);
    }
    li.attachElement(ul);
  });

  ul.attachElement(nav);
  nav.attachElement(header);

  return header.getTags();
};

const BuildFooter = () => {
  const footer = makeElement("footer");
  const text = makeElement("p");

  text.addText("Made with ❤️ by April Copley");
  text.attachElement(footer);

  return footer.getTags();
};

export { BuildHeader, BuildFooter };
