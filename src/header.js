import { homepg } from "./homepg";
import { menupg } from "./menupg";
import { aboutpg } from "./aboutpg";

export function headerBuild(dive) {
  const element = document.createElement("div");
  element.classList.add("header");

  const nome = document.createElement("h1");
  nome.innerHTML = "Ari's Cantina";

  const menu = document.createElement("ul");
  menu.classList.add("menuHeader");

  const btnHome = document.createElement("BUTTON");
  const btnMenu = document.createElement("button");
  const btnAbout = document.createElement("button"); /* 
  const btnHomeDiv = document.createElement("div");
  const btnMenuDiv = document.createElement("div");
  const btnAboutDiv = document.createElement("div"); */

  btnHome.innerHTML = "Home";
  btnMenu.innerHTML = "Menu";
  btnAbout.innerHTML = "About";

  btnHome.addEventListener("click", function () {
    console.log("hi");

    dive.removeChild(dive.children[1]);
    dive.removeChild(dive.children[1]);
    dive.appendChild(homepg());
    dive.appendChild(footerBuild());
  });

  btnMenu.addEventListener("click", function () {
    console.log("hi");

    dive.removeChild(dive.children[1]);
    dive.removeChild(dive.children[1]);
    dive.appendChild(menupg());
    dive.appendChild(footerBuild());
  });

  btnAbout.addEventListener("click", function () {
    console.log("hi");

    dive.removeChild(dive.children[1]);
    dive.removeChild(dive.children[1]);
    dive.appendChild(aboutpg());
    dive.appendChild(footerBuild());
  });

  menu.append(btnHome, btnMenu, btnAbout);

  element.appendChild(nome);
  element.appendChild(menu);

  return element;
}

export function footerBuild() {
  const element = document.createElement("div");

  element.innerHTML = "2023 Made by BSSB Software Solutions";
  element.classList.add("Footer");

  return element;
}
