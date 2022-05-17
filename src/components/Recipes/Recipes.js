import React from "react";
import img1 from "../../img/1.jpeg";
import img2 from "../../img/2.jpeg";
import img3 from "../../img/3.jpeg";
import img4 from "../../img/4.jpeg";
import img5 from "../../img/5.jpeg";
import img6 from "../../img/6.jpeg";

const Recipes = () => (
  <div className="wrapper container-fluid">
    <div className="d-flex align-items-center justify-content-center flex-wrap pt-3">
      <div className="card mb-5 mx-4 mt-3" style={{ width: "25rem" }}>
        <img src={img6} className="card-img-top" alt="roasted-chickpea" />
        <div className="card-body">
          <h5 className="card-title">Chili Mango Zesty Quinoa Salad</h5>
          <p className="card-text">
            This delicious Chili Mango Zesty Quinoa Salad is crisp and hearty!
            Made with chopped kale, crunchy pepitas, walnuts, pomegranate arils,
            dried cranberries and chickpeas roasted with oil, turmeric, cumin,
            and cinnamon, this salad is one of the BEST for fall. Top it off
            with a sweet or savory vinaigrette and enjoy!
          </p>
          <div className="btn bg-secondary text-light fw-bold">More</div>
        </div>
      </div>
      <div className="card mb-5 mx-4 mt-3" style={{ width: "25rem" }}>
        <img src={img2} className="card-img-top" alt="pumpkin-salad" />
        <div className="card-body">
          <h5 className="card-title">Roasted Pumpkin Salad</h5>
          <p className="card-text">
            This delicious Roasted Pumpkin Salad is crisp and hearty! Made with
            chopped kale, crunchy pepitas, walnuts, pomegranate arils, dried
            cranberries and chickpeas roasted with oil, turmeric, cumin, and
            cinnamon, this salad is one of the BEST for fall. Top it off with a
            sweet or savory vinaigrette and enjoy your day!
          </p>
          <div className="btn bg-secondary text-light fw-bold">More</div>
        </div>
      </div>

      <div className="card mb-5 mx-4 mt-3" style={{ width: "25rem" }}>
        <img src={img3} className="card-img-top" alt="rfig-goat-cheese-salad" />
        <div className="card-body">
          <h5 className="card-title">Fig &#38; Goat Cheese Salad</h5>
          <p className="card-text">
            This icreadibly delicious Fig &#38; Goat Cheese Salad is crisp and
            hearty! Made with chopped kale, crunchy pepitas, walnuts,
            pomegranate arils, dried cranberries and chickpeas roasted with oil,
            turmeric, cumin, and cinnamon, this salad is one of the BEST for
            fall. Top it off with a sweet or savory vinaigrette and enjoy!
          </p>
          <div className="btn bg-secondary text-light fw-bold">More</div>
        </div>
      </div>
      <div className="card mb-5 mx-4 mt-3" style={{ width: "25rem" }}>
        <img src={img4} className="card-img-top" alt="reacted-chckpea" />
        <div className="card-body">
          <h5 className="card-title">Avocado Strawberry Salad</h5>
          <p className="card-text">
            This delicious Avocado Strawberry Salad is crisp and hearty! Made
            with chopped kale, crunchy pepitas, walnuts, pomegranate arils,
            dried cranberries and chickpeas roasted with oil, turmeric, cumin,
            and cinnamon, this salad is one of the BEST for fall. Top it off
            with a sweet or savory vinaigrette and enjoy!
          </p>
          <div className="btn bg-secondary text-light fw-bold">More</div>
        </div>
      </div>

      <div className="card mb-5 mx-4 mt-3" style={{ width: "25rem" }}>
        <img
          src={img5}
          className="card-img-top"
          alt="healthy-chicken-cobb-salad"
        />
        <div className="card-body">
          <h5 className="card-title">Healthy Chicken Cobb Salad</h5>
          <p className="card-text">
            This delicious Healthy Chicken Cobb Salad is crisp and hearty! Made
            with chopped kale, crunchy pepitas, walnuts, pomegranate arils,
            dried cranberries and chickpeas roasted with oil, turmeric, cumin,
            and cinnamon, this salad is one of the BEST for fall. Top it off
            with a sweet or savory vinaigrette and enjoy!
          </p>
          <div className="btn bg-secondary text-light fw-bold">More</div>
        </div>
      </div>
      <div className="card mb-5 mx-4 mt-3" style={{ width: "25rem" }}>
        <img src={img1} className="card-img-top" alt="reacted-chckpea" />
        <div className="card-body">
          <h5 className="card-title">Roasted Chickpea Fall Salad</h5>
          <p className="card-text">
            This delicious Roasted Chickpea Fall Salad is crisp and hearty! Made
            with chopped kale, crunchy pepitas, walnuts, pomegranate arils,
            dried cranberries and chickpeas roasted with oil, turmeric, cumin,
            and cinnamon, this salad is one of the BEST for fall. Top it off
            with a sweet or savory vinaigrette and enjoy!
          </p>
          <div className="btn bg-secondary text-light fw-bold">More</div>
        </div>
      </div>
    </div>
  </div>
);

export default Recipes;
