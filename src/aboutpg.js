export function homepg() {
  const element = document.createElement("div");
  const titulo = document.createElement("h1");
  titulo.innerHTML = "Shhh...it's okay";
  const textoEimg = document.createElement("div");

  const cantina = new Image();
  cantina.src = Imagem;
  const texto = document.createElement("p");
  texto.innerHTML = `"Ari's Cantina was envisioned with the purpose of providing food at accessible prices, offering affordable and cruelty-free options. It aims to be a nice and quiet place for those who are tired of their everyday lives. Ari's Cantina aspires to be a safe haven for everyone."`;
  textoEimg.appendChild(texto);
  textoEimg.appendChild(cantina);

  element.appendChild(titulo);
  element.appendChild(textoEimg);
  return element;
}
