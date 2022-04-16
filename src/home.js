import Fountain from "./fountain.jpg";
import No from "./no.png";
import buildElement from "./buildElement.js";

function createHeadline(main) {
  const heading = buildElement({ tag: "section" }, main);
  const headlineInfo = {
    tag: "div",
    id: "headline-container",
  };
  const headlineContainer = buildElement(headlineInfo, heading);

  const headline1 = ["Whether ", "Illegaly Smol "];
  const headline2 = [" or ", "Heckin' Chonker", ", "];
  const headline3 = [" from ", "Fine Boi "];
  const headline4 = [" to ", "Absolute Unit", "-"];
  const headline5 = ["you'll fit in at "];
  const headline6 = ["Fat Cat Café"];

  const headlines = [
    "Whether ",
    "",
    " or ",
    "",
    ", ",
    "from ",
    "",
    " to ",
    "",
    "- ",
    "you'll fit in at ",
    "",
  ];
  const cats = [
    "Illegaly Smol",
    "Heckin' Chonker",
    "Fine Boi",
    "Absolute Unit",
    "Fat Cat Café",
  ];

  let n = 0;
  let text = "";
  // const headlineTest = buildElement({ tag: "h1", headlineContainer });
  for (let i = 0; i < headlines.length; i++) {
    if (headlines[i] == "") {
      const spanInfo = {
        tag: "span",
        id: cats[n].toLowerCase().split(" ")[1],
        text: cats[n],
      };
      // const span = buildElement(spanInfo, main);

      text += cats[n];
      n++;
    } else {
      text += headlines[i];
    }
    console.log(text);
  }
  let count = 1;

  [headline1, headline2, headline3, headline4, headline5, headline6].forEach(
    (headline) => {
      const h1 = document.createElement("h1");

      for (let i = 0; i < headline.length; i++) {
        let text, cat;

        if (i % 2 == 0 && headline[i] !== "Fat Cat Café") {
          // Create normal text
          text = document.createTextNode(headline[i]);
        } else {
          // Create span to target fonts
          text = document.createElement("span");
          text.textContent = headline[i];
          cat = headline[i].toLowerCase().split(" ")[1];
          text.classList.add(cat);
        }
        h1.appendChild(text);
      }

      h1.setAttribute("id", `headline${count}`);
      count++;
      headlineContainer.appendChild(h1);
    }
  );
  heading.setAttribute("id", "headline");
  return heading;
}

const createHero = (main) => {
  const heroInfo = {
    tag: "section",
    id: "home-hero",
  };
  buildElement(heroInfo, main);
};

const createFeatures = (main) => {
  const featuresInfo = {
    tag: "section",
    id: "features",
  };

  const features = buildElement(featuresInfo, main);

  const images = [No, No, Fountain];
  const ids = ["microchip", "dish", "fountain"];

  const featureHeadlines = [
    "Microchip Feeders Prohibited",
    "No Whisker Fatigue",
    "Unlimited Drinks",
  ];

  const details = [
    "We're not here to tell you how to live your nine lives",
    "For your comfort, all noms are served on a flat dish",
    "Enjoy fresh, running water thoughtfully placed far away from your meal",
  ];

  for (let i = 0; i < images.length; i++) {
    const featureInfo = {
      tag: "div",
      className: "feature",
    };

    const feature = buildElement(featureInfo, features);

    const iconInfo = {
      tag: "div",
      id: ids[i],
    };
    const icon = buildElement(iconInfo, feature);

    buildElement({ src: images[i] }, icon);

    const featureHeadlineInfo = {
      tag: "h3",
      text: featureHeadlines[i],
    };

    const detailInfo = {
      tag: "p",
      text: details[i],
    };

    [featureHeadlineInfo, detailInfo].forEach((info) => {
      buildElement(info, feature);
    });
  }

  return features;
};

const buildHome = (main, div, footer) => {
  main.appendChild(createHeadline(main));
  createHero(main);
  createFeatures(main);
  div.insertBefore(main, footer);
};

export default buildHome;
