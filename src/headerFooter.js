import buildElement from "./buildElement.js";

const BuildHeader = (div) => {
  const header = buildElement({ tag: "header" }, div);
  console.log("header:", header);
  const nav = buildElement({ tag: "nav" }, header);
  const ul = buildElement({ tag: "ul" }, nav);
  const tabs = ["home", "Menu", "Contact"];

  tabs.forEach((tab) => {
    const liInfo = {
      tag: "li",
      id: tab.toLowerCase(),
      className: "tab",
      text: tab,
    };

    const li = buildElement(liInfo, ul);

    if (tab === "home") {
      li.textContent = "Fat Cat Café";
    }
  });
};

const BuildFooter = (div) => {
  const footer = buildElement({ tag: "footer" }, div);
  const footerTextInfo = {
    tag: "p",
    text: "Made with ❤️ by April Copley",
  };
  buildElement(footerTextInfo, footer);
};

export { BuildHeader, BuildFooter };
