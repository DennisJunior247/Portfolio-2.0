import React from "react";
import { AboutStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
// import pdf from "../../assets/images/My_Resume.pdf";
import { ButtonStyled } from "../Button/styles";

const Menu = ({ about }) => {
  return (
    <AboutStyle>
      <Flex className="container" ref={about}>
        <div className="about">
          <h1>About Me</h1>
        </div>
        <div className="aboutParagraph">
          <div className="inside">
            <p>
              Hi{" "}
              <span role="img" aria-label="waving emoji">
                👋
              </span>
              , I am Dennis Junior, a frontend/backend developer with keen
              interest in building out rich interactive experiences functional
              user interfaces and backend apis.
              <br /> I spend more of my time writing backend apis with
              nodejs/golang , i also work on frontend react/reactnative too if
              needed, aside coding i enjoy watching movies,playing video games and
              hanging out with friends.
            </p>
            <Flex
              className="btns"
              justifyContent="space-around"
              alignItems="stretch"
            >
              <ButtonStyled text="Download CV" className="button-container">
                <a
                  target="blank"
                  href="https://docs.google.com/document/d/1x6FlTbMcjCUkx3te5bpsNluSY7jU1EzKBxlR6UPcI1g/edit?usp=sharing"
                  className="button"
                >
                  Download CV
                </a>
              </ButtonStyled>
            </Flex>
          </div>
        </div>
      </Flex>
    </AboutStyle>
  );
};
export default Menu;
