const db = require(`../models/index.js`);
const moment = require('moment');

class OrdersController {
  /////////////////////////////////////////////
  //          Listing items from DBB         //
  /////////////////////////////////////////////

  orders(req, res) {
    db.orders.findAll({ include: [{ model: db.products }, { model: db.users }] }).then(orders => res.json(orders));
  }

  /////////////////////////////////////////////
  //        Update of the items in DBB       //
  /////////////////////////////////////////////

  // 1. accept the order
  acceptOrder(req, res) {
    db.orders
      .update({
        state: req.params.state
      }, {
          where: {
            id: req.params.id
          }
        })
      .then(order => {
        res.json(order);
      });
  }
  // 2. cancel the order
  cancelOrder(req, res) {
    db.orders
      .update({
        state: req.params.state
      }, {
          where: {
            id: req.params.id
          }
        })
      .then(order => {
        res.json(order)
      });
  }
  // 3. finish the order
  finishOrder(req, res) {
    db.orders
      .update({
        state: req.params.state
      }, {
          where: {
            id: req.params.id
          }
        })
      .then(order => {
        res.json(order);
      });
  }


}

module.exports = OrdersController;