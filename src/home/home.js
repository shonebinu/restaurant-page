import "./home.css";

const homeComponent = (onMenuClick, onReserveClick) => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("home-container");

  const h1 = document.createElement("h1");
  h1.textContent = "ODIN RESTAURANT";
  containerDiv.appendChild(h1);

  const hr = document.createElement("hr");
  containerDiv.appendChild(hr);

  const h2 = document.createElement("h2");
  h2.textContent = "Tasty and Affordable!";
  containerDiv.appendChild(h2);

  const buttonContainer = document.createElement("div");
  const menuButton = document.createElement("button");
  menuButton.textContent = "MENU";
  menuButton.addEventListener("click", onMenuClick);
  buttonContainer.appendChild(menuButton);

  const reserveButton = document.createElement("button");
  reserveButton.textContent = "RESERVE";
  reserveButton.addEventListener("click", onReserveClick);
  buttonContainer.appendChild(reserveButton);

  containerDiv.appendChild(buttonContainer);

  return containerDiv;
};

export { homeComponent };
