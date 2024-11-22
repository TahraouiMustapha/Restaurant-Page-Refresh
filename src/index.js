import { initialPageLoad }  from "./initialPage.js";
import { menuPageLoad } from "./menuPage.js";
import { aboutPageLoad } from "./aboutPage.js";


let myContentDiv = document.querySelector('#content');
myContentDiv.appendChild( aboutPageLoad() );