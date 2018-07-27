import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainHeader from "./MainHeader";
import { RootContainer } from "../styled/container";
import BasketProductsList from "./BasketProductsList";
import FooterPrice from "./FooterPrice";
import GetTitle from "../assets/lib/getTitle";

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
        />
        <BasketProductsList />
        <FooterPrice />
      </RootContainer>
    );
  }
}

export default Basket;
