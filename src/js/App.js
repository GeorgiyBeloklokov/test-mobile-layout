import en from "../assets/locales/en.json";
import es from "../assets/locales/es.json";
import fr from "../assets/locales/fr.json";
import ja from "../assets/locales/ja.json";
import nl from "../assets/locales/nl.json";
import ru from "../assets/locales/ru.json";
import zh from "../assets/locales/zh.json";

import mustache from "./helpers";
export default class App {
  constructor() {
    this.local = null;
  }
  start() {
    const languages = {
      en,
      es,
      fr,
      ja,
      nl,
      ru,
      zh,
    };

    ///Getting locale from query
    let queryString = window.location.search.slice(6);

    ///Getting locale from user system
    let lang = navigator.language || navigator.userLanguage;

    ///Assign default locale
    const defaultLanguage = lang === languages[lang] ? languages[lang] : en;

    ///Assign locale from query or default
    this.local = languages[queryString] ?? defaultLanguage;

    let main = document.querySelector("main");

    let buttonRestore = document.querySelector(".header__button-restore");
    buttonRestore.innerText = `${this.local["Restore"]}`;

    let sectionTitle = document.querySelector(".title");
    sectionTitle.innerHTML = `<h1 class="title__title-first">${this.local["Unlimited Access<br>to All Features"]}</h1>`;

    let detailSpanFirst = document.querySelector(
      ".details__span-first"
    );
    detailSpanFirst.innerText = `${this.local["Unlimited documents"]}`;

    let detailSpanSecond = document.querySelector(
      ".details__span-second"
    );
    detailSpanSecond.innerText = `${this.local["Count mode"]}`;

    let detailSpanThird = document.querySelector(
      ".details__span-third"
    );
    detailSpanThird.innerText = `${this.local["Text recognition (OCR)"]}`;

    let sectionOffer = document.createElement("section");
    sectionOffer.classList.add("offer");

    let containerLeftOffer = document.createElement("div");
    containerLeftOffer.classList.add("offer__offer-left");

    let priceToMustache = this.local["{{price}}/month"];
    let string = this.local["<strong>{{price}}</strong><br>per month"];
    let data = {
      price: "$9.99",
    };
    let offerTitle = mustache(string, data);

    containerLeftOffer.innerHTML = `<h2 class="offer__offer_title">${this.local["Monthly"]}
    </h2><h2 class="offer__offer-price">${offerTitle}</h2>`;

    let rectangleFree = document.createElement("div");
    rectangleFree.classList.add("offers__offer-rectangle");

    rectangleFree.innerHTML = `<h2 class="offer__offer-rectangle-title">${this.local["3 DAYS FREE"]}!
    </h2>`;

    containerLeftOffer.append(rectangleFree);

    let price = document.createElement("div");
    price.classList.add("offer__offer-price");

    let offerPrice = mustache(priceToMustache, data);

    price.innerHTML = `<h2 class="offer__offer-price">${offerPrice}</h2>`;

    //containerLeftOffer.innerHTML = '<a href="#"><a/>'

    containerLeftOffer.append(price);

    containerLeftOffer.addEventListener("click", () => {
      containerLeftOffer.classList.remove("inactive");
      containerRightOffer.classList.add("inactive");
    });

    sectionOffer.append(containerLeftOffer);

    ///////////////////////////////////Right part of offers//////////////////////////////////////////////////

    let containerRightOffer = document.createElement("div");
    containerRightOffer.classList.add("section__offer-right");

    let priceMonthToMustache = this.local["{{price}}/month"];
    let titleRightToMustache =
      this.local["<strong>{{price}}</strong><br>per year"];
    let dataTitleRight = {
      price: "$19.99",
    };
    let dataMonthToMustache = {
      price: "$1.66",
    };
    let offerTitleRight = mustache(titleRightToMustache, dataTitleRight);

    containerRightOffer.innerHTML = `<h2 class="offer__offer_title">${this.local["Annually"]}
    </h2><h2 class="offer__offer-price">${offerTitleRight}</h2>`;

    let rectangleFreeRight = document.createElement("div");
    rectangleFreeRight.classList.add("offers__offer-rectangle");

    rectangleFreeRight.innerHTML = `<h2 class="offer__offer-rectangle-title">${this.local["MOST POPULAR"]}
    </h2>`;

    containerRightOffer.append(rectangleFreeRight);

    let priceRight = document.createElement("div");
    priceRight.classList.add("offer__offer-price");

    let priceMonth = mustache(priceMonthToMustache, dataMonthToMustache);

    priceRight.innerHTML = `<h2 class="offer__offer-price">${priceMonth}</h2>`;

    containerRightOffer.append(priceRight);

    let redRoundedPrice = document.createElement("div");
    redRoundedPrice.classList.add("offer__offer-price-rounded");
    redRoundedPrice.innerHTML = `<h2 class="offer__offer-price-title">${this.local["-83%"]}</h2>`;

    containerRightOffer.append(redRoundedPrice);

    containerRightOffer.addEventListener("click", () => {
      containerRightOffer.classList.remove("inactive");
      containerLeftOffer.classList.add("inactive");
    });

    document.addEventListener("DOMContentLoaded", () => {
      containerRightOffer.classList.add("inactive");
    });

    sectionOffer.append(containerRightOffer);

    main.append(sectionOffer);

    let button = document.createElement("section");
    button.classList.add("button");
    button.innerHTML = `<h3 class="button__title">${this.local["Continue"]}</h3>`;

    main.append(button);

    let footer = document.createElement("section");
    footer.classList.add("footer");
    footer.innerHTML = `<div><p class="footer__footer-terms">${this.local["Auto-renewable. Cancel anytime."]}</p></div>
    <div><a class="footer__footer-link-left" href="#">
    ${this.local["Terms of Use"]}<a/><a class="footer__footer-link-right" href="#">${this.local["Privacy Policy"]}<a/></div>`;

    main.append(footer);

    let indicator = document.createElement("section");
    indicator.classList.add("indicator");
    indicator.innerHTML = `<div class="indicator__indicator-item"></div>`;

    main.append(indicator);

    button.addEventListener("click", (e) => {
      let el = document.querySelector(".section__offer-right");
      let isActive = el.classList.contains("inactive");
      if (isActive) {
        window.location.replace("https://apple.com/");
      } else {
        window.location.replace("https://google.com/");
      }
    });
  }
}
