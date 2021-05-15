import React from "react";
import { LandingStyle } from "./styles.js";

const Landing = () => {
  return (
    <LandingStyle>
      <section className="main_container">
        <div className="headMain">
          <aside className="landingImgDiv">
            <aside className="learning">
              <div className="captionDiv">
                <h2>I'm Dennis Junior </h2>
                <h3> Front-end/backend Developer</h3>
              </div>
              <div className="moreDetail">
                <p>
                  I am passionate about creating user delightful
                  interfaces/Apis,based on the users need that are also easy and
                  simple to use.
                </p>
              </div>
            </aside>

            <div className="header_img_Maindiv">
              <div className="header_img_div">
                <img src={require("../../assets/images/dennis.jpg")} alt="" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div></div>
      </section>
    </LandingStyle>
  );
};

export default Landing;
