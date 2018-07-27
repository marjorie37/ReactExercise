import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Grid,
  Button,
  Divider,
  ListItem,
  ListItemText,
  List
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { FooterPriceWrapper, FooterTable, FooterTable2 } from "../styled/Index";
import { Payment } from "@material-ui/icons";

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
            <Button
              style={{ margin: "-20% 80%" }}
              variant="fab"
              color="secondary"
              onClick={this.goToPayment}
            >
              <Payment />
            </Button>
          </Grid>
          <Table>
            <TableHead>
              <TableRow>
                <FooterTable>Total TTC</FooterTable>
                <TableCell
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    textAlign: "center"
                  }}
                  numeric
                >
                  {this.state.totalTTC}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  style={{ color: "white", fontSize: "1.2em", padding: "0 5%" }}
                  component="th"
                  scope="row"
                >
                  Dont TVA 10%
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    textAlign: "center"
                  }}
                  numeric
                >
                  {this.state.tvaTen}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ color: "white", fontSize: "1.2em", padding: "0 5%" }}
                  component="th"
                  scope="row"
                >
                  Dont TVA 20%
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    textAlign: "center"
                  }}
                  numeric
                >
                  {this.state.tvaTwenty}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ color: "white", fontSize: "1.2em", padding: "0 5%" }}
                  component="th"
                  scope="row"
                >
                  Total HT
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    textAlign: "center",
                    margin: "0 50px"
                  }}
                  numeric
                >
                  {this.state.tvaTwenty}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FooterPriceWrapper>
      </div>
    );
  }
}

export default FooterPrice;
