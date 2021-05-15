import React from "react";
import { ServicesStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";

const Services = ({ services }) => {
  const myServices = [
    {
      name: "Web Development",
      about:
        "I build responsive web applications with reactjs with and integtrate apis",
      exp_key: 1,
    },
    {
      name: "mobile Development",
      about:
        "I bulid mobile applications using react native for cross platforms and also integrate apis .",
      exp_key: 2,
    },
    {
      name: "Api Development",
      about: "I bulid apis using nodjs both rest and graphql.",
      exp_key: 2,
    },
  ];
  return (
    <ServicesStyle ref={services}>
      <div className="container">
        <header>
          <h1>SERVICES</h1>
          <p>I bulid web/mobile apps and apis.</p>
        </header>

        <section>
          <Flex className="cards" justifyContent="space-around">
            {myServices.map(({ img, name, about, exp_key }) => (
              <div className="card" key={exp_key}>
                <div className="imgWrap">{/* <img src={img} alt="" /> */}</div>
                <div className="content">
                  <h3>{name}</h3>
                  <p>{about}</p>
                </div>
              </div>
            ))}
          </Flex>
        </section>
      </div>
    </ServicesStyle>
  );
};
export default Services;
