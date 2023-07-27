import Dish1 from "./dishe1.jpg";
import Dish2 from "./dishe2.jpg";
import Dish3 from "./dishe3.jpg";
import Dish4 from "./dishe4.jpg";

export function menupg() {
  const element = document.createElement("div");
  element.classList.add("menu");
  const titulo = document.createElement("h1");
  titulo.classList.add("tituloMenu");
  titulo.innerHTML = "Dishes";

  //Pratos
  //div do cardapio
  const cardapio = document.createElement("div");

  cardapio.classList.add("cardapio");
  //div prato 1 com a sua imagem
  const divDish1 = document.createElement("div");
  divDish1.classList.add("prato");
  const dish1 = new Image();
  dish1.src = Dish1;
  const textoDish1 = document.createElement("p");
  textoDish1.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing eLorem .";
  divDish1.appendChild(dish1);
  divDish1.appendChild(textoDish1);
  //div prato 2 com a sua imagem
  const divDish2 = document.createElement("div");
  divDish2.classList.add("prato");
  const dish2 = new Image();
  dish2.src = Dish2;
  const textoDish2 = document.createElement("p");
  textoDish2.innerHTML = "Um prato vegano numero 2";
  divDish2.appendChild(dish2);
  divDish2.appendChild(textoDish2);
  //div prato 3
  const divDish3 = document.createElement("div");
  divDish3.classList.add("prato");
  const dish3 = new Image();
  dish3.src = Dish3;
  const textoDish3 = document.createElement("p");
  textoDish3.innerHTML = "Um prato vegano numero 3";
  divDish3.appendChild(dish3);
  divDish3.appendChild(textoDish3);

  //div prato4
  const divDish4 = document.createElement("div");
  divDish4.classList.add("prato");
  const dish4 = new Image();
  dish4.src = Dish4;
  const textoDish4 = document.createElement("p");
  textoDish4.innerHTML = "Um prato vegano numero 4";
  divDish4.appendChild(dish4);
  divDish4.appendChild(textoDish4);

  cardapio.appendChild(divDish1);
  cardapio.appendChild(divDish2);
  cardapio.appendChild(divDish3);
  cardapio.appendChild(divDish4);
  element.appendChild(titulo);
  element.appendChild(cardapio);
  return element;
}
