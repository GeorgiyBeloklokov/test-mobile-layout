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

    let buttonRestore = document.querySelector(".header__buttons-restore");
    buttonRestore.innerText = `${this.local["Restore"]}`;

    let sectionTitle = document.querySelector(".section__title");
    sectionTitle.innerHTML = `<h1 class="section__title-first">${this.local["Unlimited Access<br>to All Features"]}</h1>`;

    let detailSpanFirst = document.querySelector(
      ".section__details-span_first"
    );
    detailSpanFirst.innerText = `${this.local["Unlimited documents"]}`;

    let detailSpanSecond = document.querySelector(
      ".section__details-span_second"
    );
    detailSpanSecond.innerText = `${this.local["Count mode"]}`;

    let detailSpanThird = document.querySelector(
      ".section__details-span_third"
    );
    detailSpanThird.innerText = `${this.local["Text recognition (OCR)"]}`;

    let sectionOffer = document.createElement("section");
    sectionOffer.classList.add("section__offer");

    let containerLeftOffer = document.createElement("div");
    containerLeftOffer.classList.add("section__offer-left");

    let priceToMustache = this.local["{{price}}/month"];
    let string = this.local["<strong>{{price}}</strong><br>per month"];
    let data = {
      price: "$9.99",
    };
    let offerTitle = mustache(string, data);

    containerLeftOffer.innerHTML = `<h2 class="section__offer-left_title">${this.local["Monthly"]}
    </h2><h2 class="section__offer-left_price">${offerTitle}</h2>`;

    let rectangleFree = document.createElement("div");
    rectangleFree.classList.add("section__offer-rectangle");

    rectangleFree.innerHTML = `<h2 class="section__offer-left_rectangle_title">${this.local["3 DAYS FREE"]}!
    </h2>`;

    containerLeftOffer.append(rectangleFree);

    let price = document.createElement("div");
    price.classList.add("section__offer-price");

    let offerPrice = mustache(priceToMustache, data);

    price.innerHTML = `<h2 class="section__offer-left_price">${offerPrice}</h2>`;

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

    containerRightOffer.innerHTML = `<h2 class="section__offer-left_title">${this.local["Annually"]}
    </h2><h2 class="section__offer-left_price">${offerTitleRight}</h2>`;

    let rectangleFreeRight = document.createElement("div");
    rectangleFreeRight.classList.add("section__offer-rectangle");

    rectangleFreeRight.innerHTML = `<h2 class="section__offer-left_rectangle_title">${this.local["MOST POPULAR"]}
    </h2>`;

    containerRightOffer.append(rectangleFreeRight);

    let priceRight = document.createElement("div");
    priceRight.classList.add("section__offer-price");

    let priceMonth = mustache(priceMonthToMustache, dataMonthToMustache);

    priceRight.innerHTML = `<h2 class="section__offer-left_price">${priceMonth}</h2>`;

    containerRightOffer.append(priceRight);

    let redRoundedPrice = document.createElement("div");
    redRoundedPrice.classList.add("section__offer-price_rounded");
    redRoundedPrice.innerHTML = `<h2 class="section__offer-left_price_title">${this.local["-83%"]}</h2>`;

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
    button.classList.add("section__button");
    button.innerHTML = `<h3 class="section__button-title">${this.local["Continue"]}</h3>`;

    main.append(button);

    let footer = document.createElement("section");
    footer.classList.add("section__footer");
    footer.innerHTML = `<div><p class="section__footer-terms">${this.local["Auto-renewable. Cancel anytime."]}</p></div>
    <div><a class="section__footer-link_left" href="#">
    ${this.local["Terms of Use"]}<a/><a class="section__footer-link_right" href="#">${this.local["Privacy Policy"]}<a/></div>`;

    main.append(footer);

    let indicator = document.createElement("section");
    indicator.classList.add("section__indicator");
    indicator.innerHTML = `<div class="section__indicator-item"></div>`;

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
