import React, { Component } from "react";
import { Star } from "@material-ui/icons";
import {
  withTheme,
  Typography,
  ListItem,
  List,
  Divider
} from "@material-ui/core";

class RewardPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 6
    };
  }

  render() {
    return (
      <div>
        <List>
          <ListItem>
            <Typography
              variant="body2"
              component="p"
              style={this.props.theme.infoColor}
            >
              + {this.state.points} points de fidélité
              {Array(this.state.points).fill(<Star />)}
            </Typography>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withTheme()(RewardPoints);
