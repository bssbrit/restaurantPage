import _ from "lodash";
import "./style.css";
import { headerBuild, footerBuild } from "./header";
import { homepg } from "./homepg";
import { menupg } from "./menupg";
import { aboutpg } from "./aboutpg";

function pageLoader() {
  const dive = document.createElement("div");
  dive.classList.add("content");
  dive.appendChild(headerBuild(dive));
  dive.appendChild(menupg());
  dive.appendChild(footerBuild());
  document.body.appendChild(dive);
}
pageLoader();
/* dive.appendChild(headerBuild());
dive.appendChild(aboutpg());
dive.appendChild(footerBuild()); */
