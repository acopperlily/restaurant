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

const BuildFooter = (div) => {
  const footerInfo = {
    tag: "footer",
    id: "butt",
    className: "footer",
  };

  const footerText = {
    tag: "p",
    id: "mine",
    className: "mine",
    text: "Made with ❤️ by April Copley ",
  };

  const icon = {
    tag: "span",
    id: "icon",
    text: "",
  };

  const footer = buildElement(footerInfo, div);
  [footerText, icon].forEach((obj) => {
    buildElement(obj, footer);
  });
};

export { BuildHeader, BuildFooter };
