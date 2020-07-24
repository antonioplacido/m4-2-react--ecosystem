import React from "react";
import { items } from "../data";

import styled from "styled-components";

const ListedItemDescrips = styled.span`
  font-weight: bold;
`;

const ListedItemName = styled.span``;

const ListedItemLatin = styled.span`
  font-style: italic;
  color: #b1b1b1;
  display: block;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
`;

const StupidFruitPictures = styled.img`
  border: 4px orange solid;
  border-radius: 40%;
  width: 300px;
  height: 300px;
`;

const TheULConst = styled.ul`
  list-style-type: none;
  padding: 45px;
  display: inline-block;
  text-align: center;
  width: 25%;
`;

const FruitBlock = styled.div`
  width: 50%;
  border: 1px gray solid;
  border-radius: 25%;
  padding: 60px;
  height: 400px;
`;

const ListingGrid = () => {
  const itemList = Object.values(items);
  const displayList = itemList.map((item) => {
    return (
      <TheULConst>
        <li>
          <FruitBlock>
            <StupidFruitPictures src={item.imageSrc}></StupidFruitPictures>
            <ListedItemDescrips>
              <ListedItemName>{item.name}</ListedItemName>
              <ListedItemLatin>{item.latinName}</ListedItemLatin>
            </ListedItemDescrips>
          </FruitBlock>
        </li>
      </TheULConst>
    );
  });

  return <ul>{displayList}</ul>;
};

export default ListingGrid;

//component will always return some html.
