import React from "react";
import { items } from "../data";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ImageAndTextBlock = styled.div``;

const SelectedFruitPicture = styled.img``;

const SelectedFruitText = styled.p``;

const FruitName = styled.h2``;

const FruitLatin = styled.span``;

const FruitDescrip = styled.span``;

const FruitOri = styled.span``;

const FruitButton = styled.button``;

const FruitSellerPicAndText = styled.div``;

const SellerPic = styled.img``;

const SellerText = styled.span``;

const ItemDetails = () => {
  return (
    <ImageAndTextBlock>
      <SelectedFruitPicture></SelectedFruitPicture>
      <SelectedFruitText>
        <FruitName></FruitName>
        <FruitLatin></FruitLatin>
        <FruitDescrip></FruitDescrip>
        <FruitOri></FruitOri>
        <FruitButton></FruitButton>
        <FruitSellerPicAndText>
          <SellerPic></SellerPic>
          <SellerText></SellerText>
        </FruitSellerPicAndText>
      </SelectedFruitText>
    </ImageAndTextBlock>
  );
};

export default ItemDetails;
