export function headerBuild() {
  const element = document.createElement("div");
  element.classList.add("Header");

  const nome = document.createElement("h1");
  nome.innerHTML = "Ari's Cantina";

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const btnHome = document.createElement("BUTTON");
  const btnMenu = document.createElement("button");
  const btnAbout = document.createElement("button");

  btnHome.innerHTML = "Home";
  btnMenu.innerHTML = "Menu";
  btnAbout.innerHTML = "About";

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
