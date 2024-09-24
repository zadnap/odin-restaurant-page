import "../css/style.css";

import Home from "./home";
import Menu from "./menu";
import Order from "./order";

const content = document.querySelector("#content");

content.innerHTML = Home;

const navigation = document.querySelector("nav");
const navTabs = document.querySelectorAll("nav li");

navigation.addEventListener("click", (e) => {
  if (e.target !== navigation) {
    navTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");

    switch (e.target.id) {
      case "home":
        content.innerHTML = Home;
        break;
      case "menu":
        content.innerHTML = Menu;
        break;
      case "order":
        content.innerHTML = Order;
        break;
      default:
        break;
    }
  }
});
