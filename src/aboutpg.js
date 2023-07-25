import Gatos from "./Gatos.jpeg";

export function aboutpg() {
  const element = document.createElement("div");
  const titulo = document.createElement("h1");
  titulo.innerHTML = "About Ari's Cantina";
  const conteudoAbout = document.createElement("div");
  //texto e foto da Ari
  const divAri = document.createElement("div");
  const textAri = document.createElement("p");
  textAri.innerHTML = "The one and only Ari the Creator, the visionary";
  divAri.appendChild(textAri);
  conteudoAbout.appendChild(divAri);
  //texto e foto dos gatos
  const divGatos = document.createElement("div");
  const textGatos = document.createElement("p");
  const gatos = new Image();
  gatos.src = Gatos;
  textGatos.innerHTML = "Guardians of  Ari's Cantina";
  divGatos.appendChild(textGatos);
  divGatos.appendChild(gatos);
  conteudoAbout.appendChild(divGatos);
  element.appendChild(titulo);
  element.appendChild(conteudoAbout);
  return element;
}
