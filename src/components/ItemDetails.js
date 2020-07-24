import React from "react";
import { items, sellers } from "../data";

import { useParams } from "react-router-dom";

import styled from "styled-components";

const ImageAndTextBlock = styled.div`
  padding: 8vh;
`;

const SelectedFruitPicture = styled.img`
  width: 35%;
  height: 35%
  padding-top: 5px;
  border: 4px orange solid;
  border-radius: 50%;
`;

const SelectedFruitText = styled.p`
  display: inline-block;
  position: absolute;
  left: 850px;
  top: 170px;
  font-size: 26px;
`;

const FruitName = styled.h1``;

const FruitLatin = styled.span``;

const FruitDescrip = styled.p``;

const FruitOri = styled.p`
  font-style: italic;
  padding: 30px;
  padding-right: 50px;
`;

const FruitButton = styled.button`
  width: 400px;
  height: 100px;
  background: purple;
  opacity: 75%;
  font-size: 40px;
  color: white;
`;

const FruitSellerPicAndText = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-right: 610px;
`;

const SellerPic = styled.img`
  border-radius: 50%;
  height: 75px;
`;

const SellerText = styled.span`
  padding: 15px;
`;

function checkStock(a) {
  if (a < 1) {
    return "Sold Out!";
  } else {
    return "Buy Now!";
  }
}

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  let a = item.quantity;
  let stockQuant = checkStock(a);
  return (
    <ImageAndTextBlock>
      <SelectedFruitPicture src={item.imageSrc}></SelectedFruitPicture>
      <SelectedFruitText>
        <FruitName>{item.name}</FruitName>
        <FruitLatin>
          <i>{item.latinName}</i>
        </FruitLatin>
        <FruitDescrip>{item.description}</FruitDescrip>
        <FruitOri>
          Product of <b>{item.countryOfOrigin}</b>
        </FruitOri>
        <FruitButton>
          {item.price}$ - {stockQuant}
        </FruitButton>
        <FruitSellerPicAndText>
          <SellerPic src={seller.avatarSrc}></SellerPic>
          <SellerText>
            Sold By: <b>{seller.storeName}</b>
          </SellerText>
        </FruitSellerPicAndText>
      </SelectedFruitText>
    </ImageAndTextBlock>
  );
};

export default ItemDetails;
