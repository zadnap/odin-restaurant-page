import "../css/order.css";
import cheeseBurger from "../assets/images/dishes/cheese-burger.jpg";
import ramen from "../assets/images/dishes/ramen.jpg";
import taco from "../assets/images/dishes/taco.jpg";

export default `<section class="search">
        <label for="search-order">Search your order</label>
        <input type="text" placeholder="E.g: Chicken Pizza" id="search-order"/>
      </section>
      <section class="order-list">
        <ul>
          <li>
            <div class="info">
                <img
                    src="${cheeseBurger}"
                    alt="cheese burger"
                />
                <div class="details">
                    <h3>Cheese burger</h3>
                    <p>$3.50</p>
                </div>
            </div>
            <div class="handles">
                <button>Remove</button>
            </div>
          </li>
          <li>
            <div class="info">
                <img
                    src="${ramen}"
                    alt="ramen"
                />
                <div class="details">
                    <h3>Ramen</h3>
                    <p>$6.50</p>
                </div>
            </div>
            <div class="handles">
                <button>Remove</button>
            </div>
          </li>
          <li>
            <div class="info">
                <img
                    src="${taco}"
                    alt="taco"
                />
                <div class="details">
                    <h3>Taco</h3>
                    <p>$3.63</p>
                </div>
            </div>
            <div class="handles">
                <button>Remove</button>
            </div>
          </li>
        </ul>
      </section>`;
