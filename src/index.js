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

div.appendChild(BuildHeader());
BuildFooter(div);
const footer = document.getElementsByTagName("footer")[0];
const main = buildElement({ tag: "main" }, div);

buildHome(div, main, footer);

const tabs = document.querySelectorAll("li");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const link = e.path[0].id;
    if (link != page) {
      document.getElementById(page).classList.remove("highlight");
      page = link;
      document.getElementById(page).classList.add("highlight");
      main.textContent = "";
      if (link == "menu") {
        buildMenu(div, main, footer);
      } else if (link == "contact") {
        BuildContact(div, main, footer);
      } else {
        buildHome(div, main, footer);
      }
    } else {
      console.log("same page");
    }
  });
});

// const test = makeElement("h1");
// console.log("test:", test);
// console.log("get tags:", test.getTags());
// test.addClass("test");
// test.addAttribute("id", "testing");
// test.addText("this is a test");
// const section = makeElement("section");
// console.log(section);
// test.attachElement(section);

// main.appendChild(section.getTags());
