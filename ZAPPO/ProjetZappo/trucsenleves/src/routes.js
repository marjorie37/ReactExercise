import { Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import Basket from "./components/Basket";
import PropTypes from "prop-types";

const NewRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} exact path="/" component={HomePage} />
);

// NewRoute.propTypes = {
//   component: PropTypes.element.isRequired,
//   rest: PropTypes.any
// };

const routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/mon-panier" component={Basket} />
    </div>
  );
};

export default routes;
