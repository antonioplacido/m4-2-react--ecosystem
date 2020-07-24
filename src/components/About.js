import React from "react";

import styled from "styled-components";

const EntireBlock = styled.p`
  font-size: 35px;
  float: left;
`;

const FirstLine = styled.p``;

const TheBold = styled.span`
  font-weight: bold;
`;

const TheRest = styled.p``;

const About = (props) => {
  return (
    <EntireBlock>
      <FirstLine>
        Fruit Emporium is founded on a very simple principle:
        <TheBold> Fruit is good.</TheBold>
      </FirstLine>
      <TheRest>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </TheRest>
    </EntireBlock>
  );
};

export default About;
