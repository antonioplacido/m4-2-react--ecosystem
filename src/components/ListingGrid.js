import React from "react";
import { items } from "../data";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListedItemDescrips = styled.span`
  font-weight: bold;
  display: block;
`;

const ListedItemName = styled(Link)`
  text-decoration: none;
`;

const ListedItemLatin = styled.span`
  font-style: italic;
  color: #b1b1b1;
  display: block;
`;

const StupidFruitPictures = styled.img`
  border: 4px orange solid;
  border-radius: 50%;
  width: 60%;
  height: 60%;
`;

const TheULConst = styled.ul`
  list-style-type: none;
  padding-top: 25px;
  display: inline-block;
  text-align: center;
  max-width: 40vh;
`;

const FruitBlock = styled.div`
  border: 1px gray solid;
  height: 40vh;
  padding-top: 40px;
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
              <ListedItemName to={`/items/${item.id}`}>
                {item.name}
              </ListedItemName>
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
