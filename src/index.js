import { homeComponent } from "./home/home";
import "./styles.css";

const elements = {
  content: document.querySelector("#content"),
  homeButton: document.querySelector(".home"),
  menuButton: document.querySelector(".menu"),
  contactButton: document.querySelector(".contact"),
};

const loadHome = () => elements.content.appendChild(homeComponent(loadMenu, loadContact));
const loadMenu = () => console.log("menu");
const loadContact = () => console.log("contact");

loadHome();
