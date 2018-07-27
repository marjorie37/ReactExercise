import React, { Component } from "react";
import BasketProducts from "./BasketProducts";
import RewardPoints from "./RewardPoints";
import { Grid, ListItem, List, Divider } from "@material-ui/core";

class BasketProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <List>
          <ListItem>
            <Grid item sm={7} />
            <Grid item sm={5}>
              <RewardPoints />
            </Grid>
          </ListItem>
          <ListItem>
            <BasketProducts />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default BasketProductsList;
