import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import RoundButton from "./RoundButton";
import Typography from "@material-ui/core/Typography";
import { FooterPriceWrapper } from "../styled/Index";

class FooterPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTTC: 0,
      tvaTen: 0,
      tvaTwenty: 0,
      totalHT: 0
    };
  }
  render() {
    return (
      <div>
        <FooterPriceWrapper>
          <Grid>
            <RoundButton />
          </Grid>
          <List>
            <ListItem>
              <Typography>
                <ListItemText primary="Total TTC" />
                <ListItemText primary={this.state.totalTTC} />
              </Typography>
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText style={{ color: "white" }} primary="Dont TVA 10%" />
              <ListItemText primary={this.state.tvaTen} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dont TVA 20%" />
              <ListItemText primary={this.state.tvaTwenty} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary="Total HT" />
              <ListItemText primary={this.state.totalHT} />
            </ListItem>
          </List>
        </FooterPriceWrapper>
      </div>
    );
  }
}

export default FooterPrice;
