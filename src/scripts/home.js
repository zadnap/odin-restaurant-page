import "../css/home.css";
import logo from "../assets/images/logo.png";
import heroBanner from "../assets/images/hero-banner.png";

export default `<section class="hero">
        <div class="text">
          <h1>All Fast Food is Available at Foodle</h1>
          <div class="description">
            <img
              src="${logo}"
              alt="Restaurant's description"
            />
            <p>
              We Are Just A Click Away When You Crave For Delicious Fast Food
            </p>
          </div>
          <div class="user-actions">
            <button>Buy Now</button>
            <button>How To Order</button>
          </div>
        </div>
        <img
          src="${heroBanner}"
          alt="hero banner"
          class="banner"
        />
      </section>
      <section class="qualities">
        <ul>
          <li>
            <img src="${logo}" alt="fast delivery" />
            <div class="text">
              <h3>Fast Delivery</h3>
              <p>
                The Food Will Be Delivered To Your Home Within 1-2 hours Of Your
                Ordering
              </p>
            </div>
          </li>
          <li>
            <img src="${logo}" alt="fresh food" />
            <div class="text">
              <h3>Fresh Food</h3>
              <p>
                Your Food Will Be Delivered 100% Fresh To Your Home. We Do Not
                Deliver Stale Food
              </p>
            </div>
          </li>
          <li>
            <img src="${logo}" alt="free delivery" />
            <div class="text">
              <h3>Free Delivery</h3>
              <p>
                Your Food Delivery Is Absolutely Free. No Cost Just Order And
                Enjoy
              </p>
            </div>
          </li>
        </ul>
      </section>`;
