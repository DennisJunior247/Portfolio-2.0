import React from "react";
import { StacksStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import Scale from "../Scale";

const Stack = ({ skills }) => {
  const Stacks = [
    {
      name: "node",
      range: 80,
      expKey: 1,
    },
    {
      name: "CSS",
      range: 80,
      expKey: 12,
    },
    {
      name: "Javascript",
      range: 80,
      expKey: 13,
    },
    {
      name: "REACT",
      range: 80,
      expKey: 14,
    },
    {
      name: "mongoDB",
      range: 80,
      expKey: 15,
    },
    {
      name: "ReactNative",
      range: 80,
      expKey: 16,
    },
    {
      name: "SQl",
      range: 50,
      expKey: 16,
    },
  ];
  return (
    <StacksStyle>
      <Flex className="container" ref={skills}>
        <div className="test">
          <h1>My Skills</h1>
        </div>
        <section className="scales">
          {Stacks.map((scale) => (
            <Scale scale={scale} key={scale.expKey} />
          ))}
        </section>
      </Flex>
    </StacksStyle>
  );
};
export default Stack;
