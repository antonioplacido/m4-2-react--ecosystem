import React from "react";

import styled from "styled-components";

import ListingGrid from "../components/ListingGrid";

const HomeBlock = styled.p`
  font-size: 35px;
  float: left;
`;

const BrowseItems = styled.p`
  align-items: center;
  padding-left: 8vh;
`;

const Browsing = styled.p`
  font-weight: Bold;
  padding-top: 60px;
`;

const Homepage = () => {
  return (
    <HomeBlock>
      <BrowseItems>
        Fruit Emporium sells the finest fruits from this world and beyond.
        <Browsing>Browse items</Browsing>
      </BrowseItems>
      <ListingGrid></ListingGrid>
    </HomeBlock>
  );
};

export default Homepage;

//there's a new line for browse items
