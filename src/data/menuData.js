import cedarPlankSalmon from "../assets/images/food/Cedar_Plank_Salmon.jpg";
import cherryTomatoPasta from "../assets/images/food/Cherry_Tomato_Pasta.jpg";
import chickenAlfredoPasta from "../assets/images/food/Chicken_Alfredo_Pasta.jpg";
import freshStrawberryCake from "../assets/images/food/Fresh_Strawberry_Cake.jpg";
import keyLimePie from "../assets/images/food/Key_Lime_Pie.jpg";
import marinatedSpringVegetables from "../assets/images/food/Marinated_Spring_Vegetables.jpg";
import rhubarbCake from "../assets/images/food/Rhubarb_Cake.jpg";
import theUltimatePaloma from "../assets/images/food/The_Ultimate_Paloma.jpg";

function createMenuItem(name, price, img) {
  return {
    name,
    price,
    img,
  };
}

const menuItems = [
  createMenuItem("Cedar Plank Salmon", 15.99, cedarPlankSalmon),
  createMenuItem("Cherry Tomato Pasta", 12.49, cherryTomatoPasta),
  createMenuItem("Chicken Alfredo Pasta", 14.79, chickenAlfredoPasta),
  createMenuItem("Fresh Strawberry Cake", 8.99, freshStrawberryCake),
  createMenuItem("Key Lime Pie", 7.99, keyLimePie),
  createMenuItem("Marinated Spring Vegetables", 9.99, marinatedSpringVegetables),
  createMenuItem("Rhubarb Cake", 10.49, rhubarbCake),
  createMenuItem("The Ultimate Paloma", 6.49, theUltimatePaloma),
];

export default menuItems;
