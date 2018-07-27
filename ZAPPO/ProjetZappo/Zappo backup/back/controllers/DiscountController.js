const db = require(`../models/index.js`);
const _ = require("lodash");

/**
 * Class Discount Controller
 */
class DiscountController {
  /**
   * Exemple
   * @param {*} req
   * @param {*} res
   */
  discount(req, res) {
    db.discounts.findAll().then(discounts => {
      res.render("admin/manageDiscounts", { discounts });
    });
  }

    create(req, res) {

        const obj ={
            name:"hqgdhsqd",
            discount_items:{
                robert:"kezrkle",
                tuuyeury:"hskjhej",
                hgheg676:"hjkjdshfkj"
            },
            code:"RYFGH890"
        }
        // db.discounts.create(obj).then(promo => {
        //     res.send(promo)
        // });
        db.discounts.findAll().then(discounts =>
            res.send(discounts)
        );
    }

  editer(req, res) {
    db.category
      .findAll({ include: [{ model: db.products }] })
      .then(category => {
        console.log(category);
        res.render("admin/editerDiscount", { category });
      });
  }
}

module.exports = DiscountController;
