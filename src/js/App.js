import en from "../assets/locales/en.json";
import es from "../assets/locales/es.json";
import fr from "../assets/locales/fr.json";
import ja from "../assets/locales/ja.json";
import nl from "../assets/locales/nl.json";
import ru from "../assets/locales/ru.json";
import zh from "../assets/locales/zh.json";
//import(filename).then(module => {})
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
    let queryString = window.location.search.slice(6);

    let lang = navigator.language || navigator.userLanguage;
    const defaultLanguage = en;
    //this.local = languages[lang];

    this.local = languages[queryString] ?? defaultLanguage;

    let main = document.querySelector("main");

    let buttonRestore = document.querySelector(".header__buttons-restore");
    buttonRestore.innerText = `${this.local["Restore"]}`;

    let sectionTitle = document.createElement("section");

    sectionTitle.classList.add("section__title");
    sectionTitle.innerHTML = `<h1 class="section__title-first">${this.local["Unlimited Access<br>to All Features"]}</h1>`;
    main.append(sectionTitle);

    let sectionDetails = document.createElement("section");
    sectionDetails.classList.add("section__details");

    let containerInfinity = document.createElement("div");
    containerInfinity.classList.add("section__details-infinity");
    containerInfinity.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15">
    <g fill="none" fill-rule="evenodd">
        <g fill-rule="nonzero" stroke="#FFF" stroke-width="2.258">
            <g>
                <g>
                    <path d="M5.833 0c2.148 0 4.093 1.944 5.834 5.833-1.741 3.89-3.686 5.834-5.834 5.834C2.612 11.667 0 9.055 0 5.833 0 2.612 2.612 0 5.833 0zM17.5 0c3.222 0 5.833 2.612 5.833 5.833 0 3.222-2.611 5.834-5.833 5.834-2.148 0-4.092-1.945-5.833-5.834C13.407 1.944 15.352 0 17.5 0z" transform="translate(-86.000000, -333.000000) translate(87.333333, 324.000000) translate(0.000000, 10.424731)"/>
                </g>
            </g>
        </g>
    </g>
</svg><span class="section__details-infinity_span" >${this.local["Unlimited documents"]}</span>`;
    sectionDetails.append(containerInfinity);

    let containerArrow = document.createElement("div");
    containerArrow.classList.add("section__details-infinity");
    containerArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
    <g fill="none" fill-rule="evenodd">
        <g fill-rule="nonzero" stroke="#FFF" stroke-width="2.258">
            <g>
                <g>
                    <path d="M17.346 1.152l-1.97 12.84-2.736-2.77c-3.906.836-7.61 3.423-11.058 7.849l-.298.387-.015-.104c-.127-1.04.02-2.295.352-3.68l.087-.35c.787-3.055 2.43-6.674 5.32-9.524h0L4.136 2.63l13.21-1.478z" transform="translate(-89.000000, -360.000000) translate(87.333333, 324.000000) translate(2.333333, 36.241935)"/>
                </g>
            </g>
        </g>
    </g>
</svg><span class="section__details-infinity_span" >${this.local["Count mode"]}</span>`;
    sectionDetails.append(containerArrow);

    let containerOCR = document.createElement("div");
    containerOCR.classList.add("section__details-infinity");
    containerOCR.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
    <g fill="none" fill-rule="evenodd">
        <g fill="#FFF" fill-rule="nonzero">
            <g>
                <g>
                    <g>
                        <path d="M1.167 12.858c.644 0 1.166.523 1.166 1.167v2.414c0 1.23.998 2.228 2.228 2.228h2.566c.644 0 1.166.522 1.166 1.166 0 .645-.522 1.167-1.166 1.167H4.56C2.04 21 0 18.958 0 16.44v-2.415c0-.644.522-1.167 1.167-1.167zm18.666-.046c.645 0 1.167.522 1.167 1.166v2.461C21 18.96 18.958 21 16.44 21h-2.448c-.644 0-1.166-.522-1.166-1.167 0-.644.522-1.166 1.166-1.166h2.447c1.23 0 2.228-.998 2.228-2.228v-2.46c0-.645.522-1.167 1.166-1.167zm-3.394 1.082c.469 0 .849.38.849.848 0 .469-.38.849-.849.849H4.561c-.469 0-.849-.38-.849-.849 0-.468.38-.848.849-.848h11.878zm0-4.242c.469 0 .849.38.849.848 0 .469-.38.848-.849.848H4.561c-.469 0-.849-.38-.849-.848 0-.469.38-.848.849-.848h11.878zm0-9.652C18.96 0 21 2.042 21 4.56v3.448c0 .644-.522 1.166-1.167 1.166-.644 0-1.166-.522-1.166-1.166V4.56c0-1.23-.998-2.228-2.228-2.228h-2.536c-.645 0-1.167-.522-1.167-1.166 0-.645.522-1.167 1.167-1.167h2.536zM7.101 0c.644 0 1.167.522 1.167 1.167 0 .644-.523 1.166-1.167 1.166H4.56c-1.23 0-2.228.998-2.228 2.228v2.613c0 .645-.522 1.167-1.166 1.167C.522 8.34 0 7.819 0 7.174V4.561C0 2.04 2.042 0 4.56 0H7.1zm9.338 5.41c.469 0 .849.379.849.848 0 .468-.38.848-.849.848H4.561c-.469 0-.849-.38-.849-.848 0-.469.38-.849.849-.849h11.878z" transform="translate(-88.000000, -389.000000) translate(87.333333, 324.000000) translate(1.166667, 0.000000) translate(0.000000, 65.500000)"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg><span class="section__details-infinity_span">${this.local["Text recognition (OCR)"]}</span>`;

    sectionDetails.append(containerOCR);
    main.append(sectionDetails);

    let sectionOffer = document.createElement("section");
    sectionOffer.classList.add("section__offer");

    let containerLeftOffer = document.createElement("div");
    containerLeftOffer.classList.add("section__offer-left");
    let priceString = this.local["{{price}}/month"];
    let string = this.local["<strong>{{price}}</strong><br>per month"];
    let data = {
      price: "$9.99",
    };

    const mustache = (string, data = {}) =>
      Object.entries(data).reduce(
        (res, [key, value]) =>
          res.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value),
        string
      );
    let newString = mustache(string, data);

    containerLeftOffer.innerHTML = `<h2 class="section__offer-left_title">${this.local["Monthly"]}
    </h2><h2 class="section__offer-left_price">${newString}</h2>`;

    let rectangleFree = document.createElement("div");
    rectangleFree.classList.add("section__offer-rectangle");

    rectangleFree.innerHTML = `<h2 class="section__offer-left_rectangle_title">${this.local["3 DAYS FREE"]}!
    </h2>`;

    containerLeftOffer.append(rectangleFree);

    let price = document.createElement("div");
    price.classList.add("section__offer-price");

    let priceIsMustached = mustache(priceString, data);

    price.innerHTML = `<h2 class="section__offer-left_price">${priceIsMustached}</h2>`;

    containerLeftOffer.append(price);

    containerLeftOffer.addEventListener("click", () => {
      containerLeftOffer.classList.remove("inactive");
      containerRightOffer.classList.add("inactive");
    });

    sectionOffer.append(containerLeftOffer);

    /////////////////////////////////////////////////////////////////////////////////////

    let containerRightOffer = document.createElement("div");
    containerRightOffer.classList.add("section__offer-right");

    let priceMonthString = this.local["{{price}}/month"];
    let stringRight = this.local["<strong>{{price}}</strong><br>per year"];
    let dataRight = {
      price: "$19.99",
    };
    let dataMonthRight = {
      price: "$1.66",
    };

    const mustached = (string, data = {}) =>
      Object.entries(data).reduce(
        (res, [key, value]) =>
          res.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value),
        string
      );
    let newStringRight = mustached(stringRight, dataRight);

    containerRightOffer.innerHTML = `<h2 class="section__offer-left_title">${this.local["Annually"]}
    </h2><h2 class="section__offer-left_price">${newStringRight}</h2>`;

    let rectangleFreeRight = document.createElement("div");
    rectangleFreeRight.classList.add("section__offer-rectangle");

    rectangleFreeRight.innerHTML = `<h2 class="section__offer-left_rectangle_title">${this.local["MOST POPULAR"]}
    </h2>`;

    containerRightOffer.append(rectangleFreeRight);

    let priceRight = document.createElement("div");
    priceRight.classList.add("section__offer-price");

    let priceMustached = mustached(priceMonthString, dataMonthRight);

    priceRight.innerHTML = `<h2 class="section__offer-left_price">${priceMustached}</h2>`;

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
  }
}
