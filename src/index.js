import _ from "lodash";
import "./style.css";
import { headerBuild, footerBuild } from "./header";
import { homepg } from "./homepg";
import { menupg } from "./menupg";
import { aboutpg } from "./aboutpg";

function pageLoader() {
  const dive = document.createElement("div");
  document.body.appendChild(dive);
  dive.appendChild(headerBuild(dive));
  dive.appendChild(homepg());
  dive.appendChild(footerBuild());
}
pageLoader();
/* dive.appendChild(headerBuild());
dive.appendChild(aboutpg());
dive.appendChild(footerBuild()); */
