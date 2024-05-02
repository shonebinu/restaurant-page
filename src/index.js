import { homeComponent } from "./home/home";
import { menuComponent } from "./menu/menu";
import "./styles.css";

// encapsulate loadhome and functions like that, alongside data into an IIFE, and call these fns from there only

const content = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

const displayHome = () => {
  content.innerHTML = "";
  content.appendChild(homeComponent(displayMenu, displayContact));
};

const displayMenu = () => {
  content.innerHTML = "";
  content.appendChild(menuComponent());
};

const displayContact = () => console.log("contact");

displayMenu();
