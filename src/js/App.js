import locale from "../assets/locales/en.json";
export default class App {
  constructor() {}
  start() {
    let main = document.querySelector("main");
    let section = document.createElement("section");
    section.innerHTML = `<h1 class="main__title">${locale["Unlimited Access<br>to All Features"]}</h1>`;
    main.append(section);
  }
}
