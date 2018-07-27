import React, { Component } from "react";
import MainHeader from "./MainHeader";
import { RootContainer } from "../styled/container";
import BasketProductsList from "./BasketProductsList";
import FooterPrice from "./FooterPrice";
import imageBasket from "../assets/img/thumbShoppingCart.jpg";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "22 mars 2018",
      heure: "20h10"
    };
  }

  render() {
    return (
      <RootContainer>
        <MainHeader
          pageTitle="PANIER"
          subTitle={`A retirer le ${this.state.date} à ${this.state.heure}`}
          titleAvatars="basket"
          image={imageBasket}
        />
        <BasketProductsList />
        <FooterPrice />
      </RootContainer>
    );
  }
}

export default Basket;
