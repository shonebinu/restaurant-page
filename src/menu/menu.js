import menuItems from "../data/menuData";
import "./menu.css";

const createCard = (menuItem) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const itemImage = new Image();
  itemImage.src = menuItem.img;
  cardDiv.appendChild(itemImage);

  const itemName = document.createElement("p");
  itemName.textContent = menuItem.name;
  cardDiv.appendChild(itemName);

  const itemPrice = document.createElement("p");
  itemPrice.textContent = menuItem.price;
  cardDiv.appendChild(itemPrice);

  return cardDiv;
};

const menuComponent = () => {
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards");

  menuItems.forEach(item => cardsContainer.appendChild(createCard(item)));

  return cardsContainer;
};

export { menuComponent };
