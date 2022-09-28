import React from "react";
import { HeaderContainer, HeaderText } from "./HomeComponents.styled";

const TopHeader = () => {
  return (
    <HeaderContainer>
      <img
        src="https://github.com/Moyeenwaz/pet-store-images/blob/main/banner.png?raw=true"
        alt=""
      />
      <HeaderText>GET A COMPANION TODAY</HeaderText>
      <button>Shop Now</button>
    </HeaderContainer>
  );
};

export default TopHeader;
