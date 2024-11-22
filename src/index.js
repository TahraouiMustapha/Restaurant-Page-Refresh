import { initialPageLoad }  from "./initialPage.js";
import { menuPageLoad } from "./menuPage.js";
import { aboutPageLoad } from "./aboutPage.js";
import "./style.css";
import initialBackground from '../assets/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg';


document.body.style.backgroundImage = `url(${initialBackground})`;
let myContentDiv = document.querySelector('#content');
myContentDiv.appendChild( initialPageLoad() );

//add event listener to each btn in header
const btns = document.querySelectorAll('nav button');
const [ homeBtn, menuBtn ,aboutBtn  ] = btns;

homeBtn.addEventListener('click', () => {
    myContentDiv.innerHTML = '';
    myContentDiv.appendChild( initialPageLoad() )
})

menuBtn.addEventListener('click', () => {
    myContentDiv.innerHTML = '';
    myContentDiv.appendChild( menuPageLoad() );
})

aboutBtn.addEventListener('click', () => {
    myContentDiv.innerHTML = '';
    myContentDiv.appendChild( aboutPageLoad() );
})