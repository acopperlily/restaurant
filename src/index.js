import "./style.css";
import Photo from "./microchip.jpg";
// import './heroCat.jpg';
import "./catFoodSmallest.jpg";
import { buildElement, makeElement } from "./buildElement.js";
import { BuildHeader, BuildFooter } from "./headerFooter.js";
import buildHome from "./home.js";
import buildMenu from "./menu.js";
import BuildContact from "./contact.js";

let page = "home";
const div = document.getElementById("content");
console.log(div instanceof HTMLElement);

BuildHeader(div);
BuildFooter(div);

const footer = document.getElementsByTagName("footer")[0];
const main = makeElement("main");
const mainElement = main.getTags();

buildHome(mainElement, div, footer);

const tabs = document.querySelectorAll("li");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const link = e.path[0].id;
    if (link != page) {
      document.getElementById(page).classList.remove("highlight");
      page = link;
      document.getElementById(page).classList.add("highlight");
      main.addText("");
      if (link == "menu") {
        buildMenu(mainElement, div, footer);
      } else if (link == "contact") {
        BuildContact(div, mainElement, footer);
      } else {
        buildHome(mainElement, div, footer);
      }
    } else {
      console.log("same page");
    }
  });
});
