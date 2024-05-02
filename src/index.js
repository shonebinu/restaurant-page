import { contactComponent } from "./contact/contact";
import { homeComponent } from "./home/home";
import { menuComponent } from "./menu/menu";
import "./styles.css";

const app = (() => {
  const contentContainer = document.querySelector("#content");
  const logoDiv = document.querySelector(".logo");
  const homeButton = document.querySelector(".home");
  const menuButton = document.querySelector(".menu");
  const contactButton = document.querySelector(".contact");

  const displayHome = () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(homeComponent(displayMenu, displayContact));
  };

  const displayMenu = () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(menuComponent());
  };

  const displayContact = () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(contactComponent());
  };

  const init = () => {
    logoDiv.addEventListener("click", displayHome);
    homeButton.addEventListener("click", displayHome);
    menuButton.addEventListener("click", displayMenu);
    contactButton.addEventListener("click", displayContact);

    displayHome();
  };

  return {
    init,
  };
})();

app.init();
