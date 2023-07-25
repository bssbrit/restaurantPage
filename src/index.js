import _ from "lodash";
import "./style.css";
import { headerBuild, footerBuild } from "./header";
import { homepg } from "./homepg";
import { menupg } from "./menupg";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}
document.body.appendChild(headerBuild());
//document.body.appendChild(menupg());
document.body.appendChild(footerBuild());
