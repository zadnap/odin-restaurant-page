import "../css/menu.css";
import chickenBurgerCategory from "../assets/images/categories/burger.png";
import friesCategory from "../assets/images/categories/fries.png";
import pizzaCategory from "../assets/images/categories/pizza.png";
import cheeseBurger from "../assets/images/dishes/cheese-burger.jpg";
import chickenPizza from "../assets/images/dishes/chicken-pizza.jpg";
import chickenFry from "../assets/images/dishes/fried-chicken.jpg";
import grillSandwich from "../assets/images/dishes/grill-sandwich.jpg";
import taco from "../assets/images/dishes/taco.jpg";
import ramen from "../assets/images/dishes/ramen.jpg";

export default `<section class="best-delivered">
        <h1 class="title">Best <span>Delivered</span> Categories</h1>
        <ul>
          <li>
            <img
              src="${chickenBurgerCategory}"
              alt="chicken burger"
            />
            <h4>Chicken Burger</h4>
            <a href="">Order Now</a>
          </li>
          <li>
            <img
              src="${friesCategory}"
              alt="chicken pizza"
            />
            <h4>Chicken Pizza</h4>
            <a href="">Order Now</a>
          </li>
          <li>
            <img
              src="${pizzaCategory}"
              alt="french fries"
            />
            <h4>French Fries</h4>
            <a href="">Order Now</a>
          </li>
        </ul>
      </section>
      <section class="menu">
        <h1 class="title">Our <span>Regular</span> Menus</h1>
        <div class="description">
          <p>There Are Our Regular Menus. You Can Order Anything You Like</p>
          <button>See All</button>
        </div>
        <ul>
          <li>
            <img
              src="${cheeseBurger}"
              alt="cheese burger"
            />
            <h3>Cheese Burger</h3>
            <div class="order">
              <p>$3.50</p>
              <button>Buy Now</button>
            </div>
          </li>
          <li>
            <img
              src="${chickenPizza}"
              alt="chicken pizza"
            />
            <h3>Chicken Pizza</h3>
            <div class="order">
              <p>$4.20</p>
              <button>Buy Now</button>
            </div>
          </li>
          <li>
            <img
              src="${chickenFry}"
              alt="chicken fry"
            />
            <h3>Chicken Fry</h3>
            <div class="order">
              <p>$5.00</p>
              <button>Buy Now</button>
            </div>
          </li>
          <li>
            <img
              src="${grillSandwich}"
              alt="grill sandwich"
            />
            <h3>Grill Sandwich</h3>
            <div class="order">
              <p>$4.80</p>
              <button>Buy Now</button>
            </div>
          </li>
          <li>
            <img
              src="${taco}"
              alt="taco"
            />
            <h3>Taco</h3>
            <div class="order">
              <p>$3.63</p>
              <button>Buy Now</button>
            </div>
          </li>
          <li>
            <img
              src="${ramen}"
              alt="ramen"
            />
            <h3>Ramen</h3>
            <div class="order">
              <p>$6.50</p>
              <button>Buy Now</button>
            </div>
          </li>
        </ul>
      </section>`;
